using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelMate.Database.DataModels;

namespace ModelMate.Database.Configurations;

internal sealed class TransactionConfiguration : IEntityTypeConfiguration<Transaction>
{
    public void Configure(EntityTypeBuilder<Transaction> builder)
    {
        builder.ToTable("Transactions");
        builder.HasKey(e => e.Id).HasName("PK_Transactions_Id");

        builder.Property(e => e.Id)
            .HasColumnName("Id")
            .ValueGeneratedOnAdd();

        builder.Property(e => e.UserId)
            .HasColumnName("UserId")
            .IsRequired();

        builder.Property(e => e.Amount)
            .HasColumnName("Amount")
            .HasColumnType("decimal(18,2)")
            .IsRequired();

        builder.Property(e => e.Currency)
            .HasColumnName("Currency")
            .HasMaxLength(3)
            .IsRequired();

        builder.Property(e => e.Status)
            .HasColumnName("Status")
            .HasColumnType("TransactionStatus")
            .IsRequired();

        builder.Property(e => e.ProviderTransactionId)
            .HasColumnName("ProviderTransactionId")
            .IsRequired(false);

        builder.Property(e => e.PlanType)
            .HasColumnName("PlanType")
            .HasColumnType("SubscriptionType")
            .IsRequired();

        builder.Property(e => e.CreatedAt)
            .HasColumnName("CreatedAt")
            .HasDefaultValueSql("now()")
            .IsRequired();

        builder.HasOne(t => t.User)
            .WithMany(u => u.Transactions)
            .HasForeignKey(t => t.UserId)
            .OnDelete(DeleteBehavior.SetNull); // Сохраняем транзакцию, даже если юзер удален
    }
}
