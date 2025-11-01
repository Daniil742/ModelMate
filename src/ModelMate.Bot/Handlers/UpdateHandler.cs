using Telegram.Bot;
using Telegram.Bot.Exceptions;
using Telegram.Bot.Polling;
using Telegram.Bot.Types;
using Telegram.Bot.Types.Enums;

namespace ModelMate.Bot.Handlers;

internal class UpdateHandler(
    ITelegramBotClient botClient,
    ILogger<UpdateHandler> logger) : IUpdateHandler
{
    public async Task HandleErrorAsync(ITelegramBotClient botClient, Exception exception, HandleErrorSource source, CancellationToken cancellationToken)
    {
        logger.LogInformation("HandleError: {Exception}", exception);

        if (exception is RequestException)
            await Task.Delay(TimeSpan.FromSeconds(2), cancellationToken);
    }

    //Task HandlePollingErrorAsync(ITelegramBotClient botClient, Exception exception, CancellationToken cancellationToken)
    //{
    //    logger.LogError(exception, "Telegram API Error");
    //    return Task.CompletedTask;
    //}

    public async Task HandleUpdateAsync(ITelegramBotClient botClient, Update update, CancellationToken cancellationToken)
    {
        cancellationToken.ThrowIfCancellationRequested();

        var handler = update switch
        {
            { Message: { } message } => OnMessageReceived(message, cancellationToken),
            { CallbackQuery: { } callbackQuery } => OnCallbackQueryReceived(callbackQuery, cancellationToken),
            _ => OnUnknownUpdateAsync(update, cancellationToken)
        };

        try
        {
            await handler;
        }
        catch (Exception exception)
        {
            await HandleErrorAsync(botClient, exception, HandleErrorSource.HandleUpdateError, cancellationToken);
        }
    }

    #region Privates

    async Task OnMessageReceived(Message message, CancellationToken cancellationToken)
    {
        if (message.From == null)
        {
            logger.LogWarning("Received message {MessageId} with no 'From' field.", message.MessageId);
            return;
        }

        logger.LogInformation("Receive message type: {MessageType} from user {UserId}", message.Type, message.From.Id);

        Task action = message.Type switch
        {
            MessageType.Text => HandleTextMessageAsync(message, cancellationToken),
            MessageType.Voice => HandleVoiceMessageAsync(message, cancellationToken),
            MessageType.Photo => HandlePhotoMessageAsync(message, cancellationToken),
            MessageType.Document => HandleDocumentMessageAsync(message, cancellationToken),
            _ => HandleUnknownMessageAsync(message, cancellationToken)
        };

        await action;
    }

    #region Handlers

    private async Task HandleTextMessageAsync(Message message, CancellationToken cancellationToken)
    {
        if (message.Text is not { } messageText)
            return;

        Task action = messageText switch
        {
            "/start" => HandleStartCommandAsync(message, cancellationToken),
            _ => HandleGenericTextAsync(message, cancellationToken)
        };

        await action;
    }

    private async Task HandleStartCommandAsync(Message message, CancellationToken cancellationToken)
    {
        var user = message.From!;
        var chatId = message.Chat.Id;

        logger.LogInformation("Processing /start for user {UserId}", user.Id);

        //var grpcRequest = new RegisterUserRequest
        //{
        //    TelegramId = user.Id,
        //    Username = user.Username ?? "",
        //    FirstName = user.FirstName ?? "",
        //    LanguageCode = user.LanguageCode ?? "en"
        //};

        try
        {
            // Вызов удаленной процедуры
            //var grpcResponse = await _userClient.RegisterUserAsync(grpcRequest, cancellationToken: cancellationToken);
            //logger.LogInformation("User {UserId} registered via gRPC. IsNew: {IsNew}", user.Id, grpcResponse.IsNewUser);

            // Welcome Message
            await botClient.SendMessage(
                chatId: chatId,
                text: "Добро пожаловать! Я готов к работе.",
                cancellationToken: cancellationToken
            );

            // Установка кнопки "Open App"
            await SetupMenuButtonAsync(chatId, cancellationToken);
        }
        catch (Exception ex)//RpcException
        {
            logger.LogError(ex, "gRPC call failed for user {UserId}", user.Id);
            //await botClient.SendMessage(
            //    chatId: chatId,
            //    text: "Ошибка: не могу подключиться к главному серверу. Попробуйте /start позже.",
            //    cancellationToken: cancellationToken
            //);
        }
    }

    private async Task HandleGenericTextAsync(Message message, CancellationToken cancellationToken)
    {
        // TODO: Переслать 'message.Text' в ModelMate.Api по gRPC
        await botClient.SendMessage(
            chatId: message.Chat.Id,
            text: "Обрабатываю ваш запрос...",
            cancellationToken: cancellationToken);
    }

    private async Task HandleVoiceMessageAsync(Message message, CancellationToken cancellationToken)
    {
        // TODO: Скачать файл (message.Voice.FileId) и переслать в ModelMate.Api по gRPC
        await botClient.SendMessage(
            chatId: message.Chat.Id,
            text: "Получил голосовое. Скоро научусь его понимать!",
            cancellationToken: cancellationToken);
    }

    private async Task HandlePhotoMessageAsync(Message message, CancellationToken cancellationToken)
    {
        // TODO: Скачать файл (message.Photo.Last().FileId) и переслать в ModelMate.Api по gRPC
        await botClient.SendMessage(
            chatId: message.Chat.Id,
            text: "Вижу картинку. Скоро смогу ее анализировать!",
            cancellationToken: cancellationToken);
    }

    private async Task HandleDocumentMessageAsync(Message message, CancellationToken cancellationToken)
    {
        // TODO: Скачать файл (message.Document.FileId) и переслать в ModelMate.Api по gRPC
        await botClient.SendMessage(
            chatId: message.Chat.Id,
            text: "Вижу файл. Скоро научусь их читать!",
            cancellationToken: cancellationToken);
    }

    private Task OnCallbackQueryReceived(CallbackQuery callbackQuery, CancellationToken cancellationToken)
    {
        logger.LogInformation("Received callback query: {Data}", callbackQuery.Data);
        // TODO: Обработать нажатие кнопки
        return Task.CompletedTask;
    }

    private Task HandleUnknownMessageAsync(Message message, CancellationToken cancellationToken)
    {
        logger.LogInformation("Received unknown message type: {MessageType}", message.Type);

        return Task.CompletedTask;
    }

    private Task OnUnknownUpdateAsync(Update update, CancellationToken cancellationToken)
    {
        logger.LogInformation("Received unknown update type: {UpdateType}", update.Type);

        return Task.CompletedTask;
    }

    #endregion

    private async Task SetupMenuButtonAsync(long chatId, CancellationToken cancellationToken)
    {
        var menuButton = new MenuButtonWebApp
        {
            //Type = "web_app",
            Text = "Open App",
            WebApp = new WebAppInfo
            {
                // TODO: Заменить на URL из конфигурации
                Url = "https://your-webapp-url.com"
            }
        };

        await botClient.SetChatMenuButton(
            chatId: chatId,
            menuButton: menuButton,
            cancellationToken: cancellationToken
        );

        logger.LogInformation("WebApp Menu Button set for chat {ChatId}", chatId);
    }

    #endregion
}
