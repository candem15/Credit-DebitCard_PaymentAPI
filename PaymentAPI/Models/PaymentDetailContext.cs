using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models
{
    public class PaymentDetailContext :DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> opt ) : base(opt)
        {
            
        }

        public  DbSet<PaymentDetail> PaymentDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }
    }
}
