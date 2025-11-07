using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelMate.Database.DataModels;

namespace ModelMate.Database.Configurations;

internal sealed class UserSubscriptionConfiguration : IEntityTypeConfiguration<UserSubscription>
{
    public void Configure(EntityTypeBuilder<UserSubscription> builder)
    {
        builder.ToTable("UserSubscriptions");
        builder.HasKey(e => e.UserId).HasName("PK_UserSubscriptions_UserId");

        builder.Property(e => e.UserId)
            .HasColumnName("UserId");

        builder.Property(e => e.Type)
            .HasColumnName("Type")
            .HasColumnType("SubscriptionType")
            .IsRequired();

        builder.Property(e => e.Status)
            .HasColumnName("Status")
            .HasColumnType("SubscriptionType")
            .IsRequired();

        builder.Property(e => e.StartedAt)
            .HasColumnName("StartedAt")
            .IsRequired();

        builder.Property(e => e.ExpiresAt)
            .HasColumnName("ExpiresAt")
            .IsRequired(false);
    }
}
