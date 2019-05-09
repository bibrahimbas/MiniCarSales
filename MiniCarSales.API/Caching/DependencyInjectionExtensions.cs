using System;
using Microsoft.Extensions.DependencyInjection;

namespace MiniCarSales.API.Caching
{
    public static class DependencyInjectionExtensions
    {
        public static IServiceCollection AddInMemoryCaching(this IServiceCollection services)
        {
            return services
                .AddMemoryCache()
                .AddSingleton<ICacheClient, MockCacheClient>();
        }
    }
}
