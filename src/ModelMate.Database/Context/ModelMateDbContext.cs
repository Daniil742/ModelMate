using Microsoft.EntityFrameworkCore;
using ModelMate.Database.Configurations;
using ModelMate.Database.DataModels;
using ModelMate.Database.DataModels.Enums;

namespace ModelMate.Database.Context;

internal sealed class ModelMateDbContext(DbContextOptions<ModelMateDbContext> options) : DbContext(options)
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresEnum<UserRole>();
        modelBuilder.HasPostgresEnum<SubscriptionType>();
        modelBuilder.HasPostgresEnum<AIProvider>();
        modelBuilder.HasPostgresEnum<SubscriptionStatus>();
        modelBuilder.HasPostgresEnum<TransactionStatus>();
        modelBuilder.HasPostgresEnum<LogActionType>();
        modelBuilder.HasPostgresEnum<AggregatedMetric>();

        modelBuilder.ApplyConfiguration(new UserConfiguration());
        modelBuilder.ApplyConfiguration(new UserAIModelConfiguration());
        modelBuilder.ApplyConfiguration(new UserSubscriptionConfiguration());
        modelBuilder.ApplyConfiguration(new AIModelConfiguration());
        modelBuilder.ApplyConfiguration(new TransactionConfiguration());
        modelBuilder.ApplyConfiguration(new UserLogConfiguration());
        modelBuilder.ApplyConfiguration(new AggregatedLogConfiguration());

        base.OnModelCreating(modelBuilder);
    }

    public DbSet<User> Users { get; set; }
    public DbSet<UserAIModel> UserAIModels { get; set; }
    public DbSet<UserSubscription> UserSubscriptions { get; set; }
    public DbSet<AIModel> AIModels { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public DbSet<UserLog> UserLogs { get; set; }
    public DbSet<AggregatedLog> AggregatedLogs { get; set; }
}
