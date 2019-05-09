using System;
using System.Collections.Generic;
using MiniCarSales.API.DataAccess.Models;

namespace MiniCarSales.API.DataAccess
{
    public interface IVehicleDataAccessor
    {
        void CreateCar(CarEntity car);
        IEnumerable<VehicleEntity> GetVehicleList();
    }
}
