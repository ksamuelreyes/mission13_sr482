using Microsoft.AspNetCore.Mvc;
using mission13_sr482_backend.Data;

namespace mission13_sr482_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Database> Get()
        {
            return context.MovieData.ToArray();
        }
    }
}
