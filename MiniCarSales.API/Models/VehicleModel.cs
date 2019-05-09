using System;
namespace MiniCarSales.API.Models
{
    public class VehicleModel
    {
        public string Name { get; set; }
        public VehicleType VehicleType { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Note { get; set; }
    }
}
