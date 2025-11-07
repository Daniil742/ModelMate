using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.DataModels;

internal class UserAIModel
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Name { get; set; }
    public AIProvider Provider { get; set; }
    public string ModelIdentifier { get; set; }
    public string EncryptedApiKey { get; set; }
    public bool IsDefault { get; set; }
    public string? ConfigJson { get; set; }
    public DateTimeOffset AddedAt { get; set; } = DateTimeOffset.UtcNow;


    public virtual User User { get; set; }
}
