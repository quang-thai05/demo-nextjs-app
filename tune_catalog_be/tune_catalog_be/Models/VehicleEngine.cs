namespace tune_catalog_be.Models;

public class VehicleEngine
{
    public int Id { get; set; }
    public string Engine { get; set; }
    public List<VehicleTransmission> VehicleTransmissions { get; set; }
}