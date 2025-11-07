using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelMate.Database.DataModels;

namespace ModelMate.Database.Configurations;

internal sealed class UserAIModelConfiguration : IEntityTypeConfiguration<UserAIModel>
{
    public void Configure(EntityTypeBuilder<UserAIModel> builder)
    {
        builder.ToTable("UserAIModels");
        builder.HasKey(e => e.Id).HasName("PK_UserAIModels_Id");

        builder.Property(e => e.Id)
            .HasColumnName("Id")
            .ValueGeneratedOnAdd();

        builder.Property(e => e.UserId)
            .HasColumnName("UserId")
            .IsRequired();

        builder.Property(e => e.Name)
            .HasColumnName("Name")
            .IsRequired();

        builder.Property(e => e.Provider)
            .HasColumnName("Provider")
            .HasColumnType("AIProvider")
            .IsRequired();

        builder.Property(e => e.ModelIdentifier)
            .HasColumnName("ModelIdentifier")
            .IsRequired();

        builder.Property(e => e.EncryptedApiKey)
            .HasColumnName("EncryptedApiKey")
            .IsRequired();

        builder.Property(e => e.IsDefault)
            .HasColumnName("IsDefault");

        builder.Property(e => e.ConfigJson)
            .HasColumnName("ConfigJson")
            .IsRequired(false);

        builder.Property(e => e.AddedAt)
            .HasColumnName("AddedAt")
            .HasDefaultValueSql("now()")
            .IsRequired();
    }
}
