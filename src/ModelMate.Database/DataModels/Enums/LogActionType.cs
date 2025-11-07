namespace ModelMate.Database.DataModels.Enums;

internal enum LogActionType
{
    UserRegistered = 1,
    ModelAdded = 10,
    ModelDeleted = 11,
    ModelSetDefault = 12,
    SubscriptionStarted = 20,
    SubscriptionCanceled = 21,
    LlmRequest = 30
}
