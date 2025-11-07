using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelMate.Database.DataModels;

namespace ModelMate.Database.Configurations;

internal sealed class AIModelConfiguration : IEntityTypeConfiguration<AIModel>
{
    public void Configure(EntityTypeBuilder<AIModel> builder)
    {
        builder.ToTable("AIModels");
        builder.HasKey(e => e.Id).HasName("PK_AIModels_Id");
        builder.HasIndex(e => new { e.Provider, e.ModelIdentifier }).IsUnique().HasDatabaseName("UQ_AIModels_Provider_ModelIdentifier");

        builder.Property(e => e.Id)
            .HasColumnName("Id")
            .ValueGeneratedOnAdd();

        builder.Property(e => e.Provider)
            .HasColumnName("Provider")
            .HasColumnType("AIProvider")
            .IsRequired();

        builder.Property(e => e.ModelIdentifier)
            .HasColumnName("ModelIdentifier")
            .IsRequired();

        builder.Property(e => e.Name)
            .HasColumnName("Name")
            .IsRequired();

        builder.Property(e => e.Description)
            .HasColumnName("Description")
            .IsRequired();

        builder.Property(e => e.IsServerDefault)
            .HasColumnName("IsServerDefault");
    }
}
