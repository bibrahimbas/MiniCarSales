using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MiniCarSales.API.Caching;

namespace MiniCarSales.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CacheController : ControllerBase
    {
        private readonly ICacheClient _cacheClient;
        public CacheController(ICacheClient cacheClient)
        {
            _cacheClient = cacheClient;
        }

        // GET api/cache
        [HttpGet("{cacheKey}")]
        public ActionResult<object> Get(string cacheKey)
        {
            return _cacheClient.Get(cacheKey);
        }
    }
}
