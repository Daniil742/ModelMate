using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.DataModels;

internal class UserLog
{
    public long Id { get; set; }
    public int UserId { get; set; }
    public LogActionType Action { get; set; }
    public string Message { get; set; } // "Добавил модель 'Мой GPT-4o'"
    public string? DetailsJson { get; set; }
    public DateTimeOffset Timestamp { get; set; } = DateTimeOffset.UtcNow;

    public virtual User User { get; set; }
}
