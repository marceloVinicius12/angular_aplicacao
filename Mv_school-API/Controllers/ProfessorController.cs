using Microsoft.AspNetCore.Mvc;
using System;
namespace Mv_school_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfessorController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            try{
                return Ok("");
            }
            catch(Exception ex){
                        return BadRequest($"error {ex.Message}");
            }
       
        }
        
    }
}