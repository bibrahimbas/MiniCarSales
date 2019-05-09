using System;
namespace MiniCarSales.API.DataAccess.Models
{
    public class VehicleEntity
    {
        public string Name { get; set; }
        public string VehicleType { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Note { get; set; }
    }
}
