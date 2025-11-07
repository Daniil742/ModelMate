using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelMate.Database.DataModels;
using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.Configurations;

internal sealed class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users");
        builder.HasKey(e => e.Id).HasName("PK_Users_Id");
        builder.HasIndex(e => e.TelegramId).IsUnique().HasDatabaseName("UQ_Users_TelegramId");

        builder.Property(e => e.Id)
            .HasColumnName("Id")
            .ValueGeneratedOnAdd();

        builder.Property(e => e.TelegramId)
            .HasColumnName("TelegramId")
            .IsRequired();

        builder.Property(e => e.Role)
            .HasColumnName("Role")
            .HasDefaultValue(UserRole.User)
            .HasColumnType("UserRole")
            .IsRequired();

        builder.Property(e => e.UserName)
            .HasColumnName("UserName")
            .IsRequired();

        builder.Property(e => e.Name)
            .HasColumnName("Name")
            .IsRequired();

        builder.Property(e => e.RegisteredAt)
            .HasColumnName("RegisteredAt")
            .HasDefaultValueSql("now()")
            .IsRequired();

        builder.HasOne(u => u.Subscription)
            .WithOne(s => s.User)
            .HasForeignKey<UserSubscription>(s => s.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany(u => u.UserAiModels)
            .WithOne(m => m.User)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
