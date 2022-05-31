using Microsoft.AspNetCore.Mvc;

namespace Mv_school_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
        return Ok("vinicius");
        }
        
    }
}