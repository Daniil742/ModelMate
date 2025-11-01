using ModelMate.Bot.Abstractions;
using ModelMate.Bot.Handlers;
using Telegram.Bot;

namespace ModelMate.Bot.Services;

internal class ReceiverService(ITelegramBotClient botClient, UpdateHandler updateHandler, ILogger<ReceiverServiceBase<UpdateHandler>> logger)
    : ReceiverServiceBase<UpdateHandler>(botClient, updateHandler, logger);
