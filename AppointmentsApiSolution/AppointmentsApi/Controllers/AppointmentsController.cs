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



    // GET ......../appointments
    [HttpGet("/appointments")]
    public async Task<ActionResult> GetAppointments()
    {

        var data = await _dataContext.Appointments!.ToListAsync();
      
        return Ok(new { data, onCallInfo="Call Joe at 555-1212" });
    }
}
