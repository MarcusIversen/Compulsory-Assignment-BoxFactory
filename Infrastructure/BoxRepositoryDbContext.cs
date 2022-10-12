using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class BoxRepositoryDbContext : DbContext
{

    public BoxRepositoryDbContext(DbContextOptions<BoxRepositoryDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //Account Model builder
        //Auto generate ID 
        modelBuilder.Entity<Box>()
            .Property(box => box.ID)
            .ValueGeneratedOnAdd();
    }
    
    public DbSet<Box> Boxes { get; set; }
}