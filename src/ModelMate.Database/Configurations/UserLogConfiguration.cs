using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelMate.Database.DataModels;

namespace ModelMate.Database.Configurations;

internal sealed class UserLogConfiguration : IEntityTypeConfiguration<UserLog>
{
    public void Configure(EntityTypeBuilder<UserLog> builder)
    {
        builder.ToTable("UserLogs");
        builder.HasKey(e => e.Id).HasName("PK_UserLogs_Id");

        builder.Property(e => e.Id)
            .HasColumnName("Id")
            .ValueGeneratedOnAdd();

        builder.Property(e => e.UserId)
            .HasColumnName("UserId")
            .IsRequired();

        builder.Property(e => e.Action)
            .HasColumnName("Action")
            .HasColumnType("LogActionType")
            .IsRequired();

        builder.Property(e => e.Message)
            .HasColumnName("Message")
            .IsRequired();

        builder.Property(e => e.DetailsJson)
            .HasColumnName("DetailsJson")
            .IsRequired(false);

        builder.Property(e => e.Timestamp)
            .HasColumnName("Timestamp")
            .HasDefaultValueSql("now()")
            .IsRequired();

        builder.HasOne(l => l.User)
            .WithMany(u => u.Logs)
            .HasForeignKey(l => l.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
