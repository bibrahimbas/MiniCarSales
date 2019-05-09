using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MiniCarSales.API.DataAccess;
using MiniCarSales.API.DataAccess.Models;
using MiniCarSales.API.Models;

namespace MiniCarSales.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly IVehicleDataAccessor _vehicleData;
        private readonly IMapper _mapper;
        public CarController(
            IVehicleDataAccessor vehicleData, 
            IMapper mapper)
        {
            _vehicleData = vehicleData;
            _mapper = mapper;
        }

        // POST api/vehicle
        [HttpPost]
        public void Post([FromBody] CarModel value)
        {
            _vehicleData.CreateCar(_mapper.Map<CarEntity>(value));
        }
    }
}
