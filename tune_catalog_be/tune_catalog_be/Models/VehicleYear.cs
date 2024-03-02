namespace tune_catalog_be.Models;

public class VehicleYear
{
    public int Id { get; set; }
    public int Year { get; set; }
    public List<VehicleModel> VehicleModels { get; set; }
}