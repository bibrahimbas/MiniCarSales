using System;
namespace MiniCarSales.API.DataAccess.Models
{
    public class CarEntity : VehicleEntity
    {
        public string Engine { get; set; }
        public int Doors { get; set; }
        public string BodyType { get; set; }
    }
}
