using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using MiniCarSales.API.DataAccess.Models;

namespace MiniCarSales.API.DataAccess
{
    public class VehicleMockDataAccessor : IVehicleDataAccessor
    {
        private readonly ConcurrentQueue<CarEntity> _carsSet;

        public VehicleMockDataAccessor()
        {
            _carsSet = new ConcurrentQueue<CarEntity>();
        }

        public void CreateCar(CarEntity car)
        {
            _carsSet.Enqueue(car);
        }

        public IEnumerable<VehicleEntity> GetVehicleList()
        {
            return _carsSet.ToArray();
        }
    }
}
