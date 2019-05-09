using System.Collections.Generic;

namespace MiniCarSales.API.Caching
{
    public interface ICacheClient
    {
        void Set<T>(string key, IEnumerable<T> items);
        IEnumerable<T> Get<T>(string key);
        object Get(string key);
    }
}
