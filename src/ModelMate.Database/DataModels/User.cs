using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.DataModels;

internal class User
{
    public int Id { get; set; }
    public long TelegramId { get; set; }
    public UserRole Role { get; set; }
    public string UserName { get; set; }
    public string Name { get; set; }
    public DateTimeOffset RegisteredAt { get; set; }


    public virtual UserSubscription Subscription { get; set; }
    public virtual ICollection<UserAIModel> UserAiModels { get; set; } = new List<UserAIModel>();
    public virtual ICollection<UserLog> Logs { get; set; } = new List<UserLog>();
    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
}
