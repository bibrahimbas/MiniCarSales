using System;
using System.Collections.Generic;
using AutoMapper;
using MiniCarSales.API.DataAccess.Models;
using MiniCarSales.API.Models;

namespace MiniCarSales.API.Mapping
{
    public class DataMappingConfig : Profile
    {
        public DataMappingConfig()
        {
            CreateMap<CarModel, CarEntity>()
                .ForMember(dest => dest.VehicleType, opt => opt.MapFrom(src => src.VehicleType.ToString()));

            CreateMap<VehicleEntity, VehicleModel>()
                .ForMember(dest => dest.VehicleType, opt => opt.MapFrom(src => Enum.Parse<VehicleType>(src.VehicleType)));
        }
    }
}
