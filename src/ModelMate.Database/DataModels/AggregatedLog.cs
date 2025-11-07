using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.DataModels;

internal class AggregatedLog
{
    public int Id { get; set; }
    public DateOnly Date { get; set; }
    public AggregatedMetric Metric { get; set; }
    public long Value { get; set; }
}
