namespace tune_catalog_be.Models;

public class VehicleModel
{
    public int Id { get; set; }
    public string Model { get; set; }
    public List<VehicleEngine> VehicleEngines { get; set; }
}