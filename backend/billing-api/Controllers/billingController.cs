using Microsoft.AspNetCore.Mvc;

namespace billing_api.Controllers
{
    [ApiController]
    [Route("api/billing")]
    public class BillingController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetBills()
        {
            var bills = new List<object>
            {
                new { Id = 1, Item = "Laptop", Price = 50000 },
                new { Id = 2, Item = "Keyboard", Price = 2000 }
            };

            return Ok(bills);
        }
    }
}