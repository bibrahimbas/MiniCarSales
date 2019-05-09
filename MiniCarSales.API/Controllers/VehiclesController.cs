using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MiniCarSales.API.Caching;
using MiniCarSales.API.DataAccess;
using MiniCarSales.API.Models;

namespace MiniCarSales.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly IVehicleDataAccessor _vehicleData;
        private readonly IMapper _mapper;
        public VehiclesController(
            IVehicleDataAccessor vehicleData,
            IMapper mapper)
        {
            _vehicleData = vehicleData;
            _mapper = mapper;
        }

        // GET api/cache
        [HttpGet()]
        public IEnumerable<VehicleModel> Get(string cacheKey)
        {
            return _vehicleData.GetVehicleList().Select(x => _mapper.Map<VehicleModel>(x));
        }
    }
}
