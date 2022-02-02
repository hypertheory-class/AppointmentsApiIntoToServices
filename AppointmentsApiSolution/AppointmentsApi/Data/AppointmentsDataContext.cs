using Microsoft.EntityFrameworkCore;

namespace AppointmentsApi.Data;

public class AppointmentsDataContext : DbContext
{
    public AppointmentsDataContext(DbContextOptions<AppointmentsDataContext> options): base(options)
    {

    }
    public DbSet<Appointment>? Appointments { get; set; }
}
