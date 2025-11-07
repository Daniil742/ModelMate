using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.DataModels;

internal class UserSubscription
{
    public int UserId { get; set; }
    public SubscriptionType Type { get; set; }
    public SubscriptionStatus Status { get; set; }
    public DateTimeOffset StartedAt { get; set; }
    public DateTimeOffset? ExpiresAt { get; set; }

    public virtual User User { get; set; }
}
