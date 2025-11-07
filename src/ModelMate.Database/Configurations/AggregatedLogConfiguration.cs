using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelMate.Database.DataModels;

namespace ModelMate.Database.Configurations;

internal sealed class AggregatedLogConfiguration : IEntityTypeConfiguration<AggregatedLog>
{
    public void Configure(EntityTypeBuilder<AggregatedLog> builder)
    {
        builder.ToTable("AggregatedLogs");
        builder.HasKey(e => e.Id).HasName("PK_AggregatedLogs_Id");
        builder.HasIndex(e => new { e.Date, e.Metric }).IsUnique().HasDatabaseName("UQ_AggregatedLogs_Date_Metric");

        builder.Property(e => e.Id)
            .HasColumnName("Id")
            .ValueGeneratedOnAdd();

        builder.Property(e => e.Date)
            .HasColumnName("Date")
            .IsRequired();

        builder.Property(e => e.Metric)
            .HasColumnName("Metric")
            .HasColumnType("AggregatedMetric")
            .IsRequired();

        builder.Property(e => e.Value)
            .HasColumnName("Value")
            .IsRequired();
    }
}
