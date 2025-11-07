namespace ModelMate.Database.DataModels.Enums;

internal enum SubscriptionStatus
{
    Active = 0,
    Canceled = 1, // Отменена, но еще активна до ExpirationDate
    Expired = 2,
    PendingPayment = 3
}
