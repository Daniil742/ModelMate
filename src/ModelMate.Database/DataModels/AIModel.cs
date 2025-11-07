using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.DataModels;

internal class AIModel
{
    public int Id { get; set; }
    public AIProvider Provider { get; set; }
    public string ModelIdentifier { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public bool IsServerDefault { get; set; }
}
