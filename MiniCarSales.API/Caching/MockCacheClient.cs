using System;
using System.Collections.Generic;
using Microsoft.Extensions.Caching.Memory;
using MiniCarSales.API.Caching.Models;

namespace MiniCarSales.API.Caching
{
    public class MockCacheClient : ICacheClient
    {
        private readonly IMemoryCache _memoryCache;
        public MockCacheClient(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
            InitializeCacheData();
        }

        private void InitializeCacheData()
        {
            Set(
                CacheNameConstants.BodyType, 
                new List<string> { 
                    "Sedan", 
                    "Hatchback", 
                    "SUV", 
                    "UTE" });

            Set(
                CacheNameConstants.Engine, 
                new List<string> { 
                    "1000cc", 
                    "1600cc", 
                    "2000cc", 
                    "2500cc" });

            Set(
                CacheNameConstants.MakeModel, 
                new List<MakeModel> {
                    new MakeModel
                    {
                        Make = "Audi",
                        Models = new List<string> { "A3", "A5", "Q3", "Q5", "R8" }
                    },
                    new MakeModel
                    {
                        Make = "BMW",
                        Models = new List<string> { "3 Series", "5 Series", "X3", "X5", "Z4" }
                    },
                    new MakeModel
                    {
                        Make = "Mazda",
                        Models = new List<string> { "3", "6", "CX3", "CX5", "MX5" }
                    },
                    new MakeModel
                    {
                        Make = "Subaru",
                        Models = new List<string> { "Impreza", "Forester", "Outback", "BRZ" }

                    }
                });
        }

        public IEnumerable<T> Get<T>(string key)
        {
            return Get(key) as IEnumerable<T>;
        }

        public object Get(string key)
        {
            return _memoryCache.Get(key);
        }

        public void Set<T>(string key, IEnumerable<T> items)
        {
            _memoryCache.Set(key, items);
        }
    }
}
