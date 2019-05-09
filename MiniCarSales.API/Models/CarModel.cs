using System;
namespace MiniCarSales.API.Models
{
    public class CarModel : VehicleModel
    {
        public string Engine { get; set; }
        public int Doors { get; set; }
        public string BodyType { get; set; }
    }
}
