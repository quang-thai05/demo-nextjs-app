namespace tune_catalog_be.Models;

public class VehicleMake
{
    public int Id { get; set; }
    public string Make { get; set; }
    public List<VehicleYear> VehicleYears { get; set; }
}