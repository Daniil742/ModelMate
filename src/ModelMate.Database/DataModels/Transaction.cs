using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.DataModels;

internal class Transaction
{
    public Guid Id { get; set; }
    public int UserId { get; set; }
    public decimal Amount { get; set; }
    public string Currency { get; set; }
    public TransactionStatus Status { get; set; }
    public string ProviderTransactionId { get; set; }
    public SubscriptionType PlanType { get; set; }
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;

    public virtual User User { get; set; }
}
