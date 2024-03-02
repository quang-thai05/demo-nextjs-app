using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using tune_catalog_be.Models;

namespace tune_catalog_be.Controllers;

[ApiController]
[Route("api/catalogs")]
public class CatalogController : Controller
{
    private const string JsonPath = @"./catalog_data.json";

    [HttpGet("get-all-data")]
    public IActionResult GetAllData()
    {
        var data = ReadJsonData(JsonPath);
        return Ok(data);
    }

    [HttpGet("makes")]
    public IActionResult GetAllMakes()
    {
        var jsonData = ReadJsonData(JsonPath);
        var result = jsonData.Select(x => new
        {
            Value = x.Id,
            Label = x.Make
        }).ToList();
        return Ok(result);
    }

    [HttpGet("years/{makeId:int}")]
    public IActionResult GetYearsByMakeId(int makeId)
    {
        var jsonData = ReadJsonData(JsonPath);
        var make = jsonData.FirstOrDefault(x => x.Id == makeId);

        if (make is null) return NotFound();

        var years = make.VehicleYears.Select(x => new
        {
            Value = x.Id,
            Label = x.Year
        }).ToList();
        return Ok(years);
    }

    [HttpGet("models/{makeId:int}/{yearId:int}")]
    public IActionResult GetModelsByMakeAndYear(int makeId, int yearId)
    {
        var jsonData = ReadJsonData(JsonPath);

        var make = jsonData.FirstOrDefault(x => x.Id == makeId);
        var year = make!.VehicleYears.FirstOrDefault(x => x.Id == yearId);

        var models = year!.VehicleModels.Select(x => new
        {
            Value = x.Id,
            Label = x.Model
        }).ToList();
        return Ok(models);
    }

    [HttpGet("engines/{makeId}/{yearId}/{modelId}")]
    public IActionResult GetEngines(int makeId, int yearId, int modelId)
    {
        var jsonData = ReadJsonData(JsonPath);

        var make = jsonData.FirstOrDefault(x => x.Id == makeId);
        var year = make!.VehicleYears.FirstOrDefault(x => x.Id == yearId);
        var model = year!.VehicleModels.FirstOrDefault(x => x.Id == modelId);

        var engines = model!.VehicleEngines.Select(x => new
        {
            Value = x.Id,
            Label = x.Engine
        }).ToList();
        return Ok(engines);
    }

    [HttpGet("transmissions/{makeId}/{yearId}/{modelId}/{engineId}")]
    public IActionResult GetTransmission(int makeId, int yearId, int modelId, int engineId)
    {
        var jsonData = ReadJsonData(JsonPath);

        var make = jsonData.FirstOrDefault(x => x.Id == makeId);
        var year = make!.VehicleYears.FirstOrDefault(x => x.Id == yearId);
        var model = year!.VehicleModels.FirstOrDefault(x => x.Id == modelId);
        var engine = model!.VehicleEngines.FirstOrDefault(x => x.Id == engineId);

        var transmissions = engine!.VehicleTransmissions.Select(x => new
        {
            Value = x.Id,
            Label = x.Transmission
        }).ToList();
        return Ok(transmissions);
    }

    private List<VehicleMake> ReadJsonData(string jsonPath)
    {
        var jsonContent = System.IO.File.ReadAllText(jsonPath);
        var jsonData = JsonConvert.DeserializeObject<List<VehicleMake>>(jsonContent);
        return jsonData;
    }
}