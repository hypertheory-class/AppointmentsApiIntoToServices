using AppointmentsApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppointmentsApi.Controllers;

public class AppointmentsController : ControllerBase
{
    private readonly AppointmentsDataContext _dataContext;

    public AppointmentsController(AppointmentsDataContext dataContext)
    {
        _dataContext = dataContext;
    }


    [HttpPost("/appointments")]
    public async Task<ActionResult> AddAnAppointment([FromBody] AppointCreateRequest request)
    {
        // validate it...
        var appointment = new Appointment
        {
            Name = request.Name,
            NextDate = request.NextDate,
        };
        _dataContext.Appointments!.Add(appointment);
        await _dataContext.SaveChangesAsync();

        return Ok(appointment);

    }

    // GET ......../appointments
    [HttpGet("/appointments")]
    public async Task<ActionResult> GetAppointments()
    {

        var data = await _dataContext.Appointments!.ToListAsync();
      
        return Ok(new { data, onCallInfo="Call Joe at 555-1212" });
    }


}

public class AppointCreateRequest
{
    public string Name { get; set; } = "";
    public DateTime NextDate { get; set; }

    public int Priority { get; set; }
}