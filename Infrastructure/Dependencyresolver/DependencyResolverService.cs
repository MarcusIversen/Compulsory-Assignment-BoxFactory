using Application.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Dependencyresolver;

public class DependencyResolverService
{
    public static void RegisterApplicationLayer(IServiceCollection services)
    {
        services.AddScoped<IBoxRepository, BoxRepository>();
    }
}