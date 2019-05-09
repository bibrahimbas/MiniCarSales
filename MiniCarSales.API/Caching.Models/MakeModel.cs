using System.Collections.Generic;

namespace MiniCarSales.API.Caching.Models
{
    public class MakeModel
    {
        public string Make { get; set; }
        public IEnumerable<string> Models { get; set; }
    }
}
