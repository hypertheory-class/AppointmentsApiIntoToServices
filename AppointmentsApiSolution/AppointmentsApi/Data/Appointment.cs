namespace AppointmentsApi.Data;

public class Appointment
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public DateTime NextDate { get; set; }
}
