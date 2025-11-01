using ModelMate.Bot.Abstractions;

namespace ModelMate.Bot.Services;

internal class PollingService(IServiceProvider serviceProvider, ILogger<PollingService> logger)
    : PollingServiceBase<ReceiverService>(serviceProvider, logger);
