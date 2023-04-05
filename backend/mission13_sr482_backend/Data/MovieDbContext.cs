using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace mission13_sr482_backend.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Database> MovieData { get; set; }
    }
}
