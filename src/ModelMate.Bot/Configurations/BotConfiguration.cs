using System.ComponentModel.DataAnnotations;

namespace ModelMate.Bot.Configurations;

public class BotConfiguration
{
    public const string ConfigurationSectionName = "BotConfiguration";

    [Required]
    public string BotToken { get; set; }
}
