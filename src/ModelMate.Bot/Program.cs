using Microsoft.Extensions.Options;
using ModelMate.Bot.Configurations;
using ModelMate.Bot.Handlers;
using ModelMate.Bot.Services;
using Telegram.Bot;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.AddOptions<BotConfiguration>()
    .Bind(builder.Configuration.GetSection(BotConfiguration.ConfigurationSectionName))
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services.AddHttpClient("telegram_bot_client")
    .RemoveAllLoggers()
    .AddTypedClient<ITelegramBotClient>((httpClient, provider) =>
    {
        var configuration = provider.GetService<IOptions<BotConfiguration>>()?.Value;

        ArgumentNullException.ThrowIfNull(configuration);

        var options = new TelegramBotClientOptions(configuration.BotToken);

        return new TelegramBotClient(options, httpClient);
    });

builder.Services.AddScoped<UpdateHandler>();
builder.Services.AddScoped<ReceiverService>();

builder.Services.AddHostedService<PollingService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.Run();
