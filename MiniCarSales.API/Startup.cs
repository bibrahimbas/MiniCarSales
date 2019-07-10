using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MiniCarSales.API.Caching;
using MiniCarSales.API.DataAccess;
using MiniCarSales.API.Mapping;

namespace MiniCarSales.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This, method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // Register Caching interfaces
            services.AddInMemoryCaching();

            // Registers Mapper interface
            services.AddSingleton<IMapper>(new Mapper(new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<DataMappingConfig>();
            })));

            // Registers Data Accessors
            services.AddSingleton<IVehicleDataAccessor, VehicleMockDataAccessor>();
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader());
    
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
