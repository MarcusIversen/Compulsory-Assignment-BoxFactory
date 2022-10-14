using System.ComponentModel.DataAnnotations;
using Application.DTOs;
using Application.Interfaces;
using Domain;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;

namespace API.Controllers;


[ApiController]
[Route("[controller]")]
public class BoxController : ControllerBase
{

    private IBoxService _boxService;
    public BoxController(IBoxService boxService)
    {
        _boxService = boxService;
    }

    [HttpGet]
    public IActionResult GetBoxes()
    {
        return Ok(_boxService.GetBoxes());
    }
    
    [HttpGet("{id}")]
    public IActionResult GetBox(int id)
    {
        return Ok(_boxService.GetBox(id));
    }

    [HttpPost]
    public IActionResult AddBox(PostBoxDTO dto)
    {
        try
        {
            var box = _boxService.AddBox(dto);
            return Created("Box/" + box.ID, box);
        }
        catch (ValidationException e)
        {
            return BadRequest(e.Message);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
        
    }

    [HttpPut]
    public IActionResult UpdateBox(PutBoxDTO dto, int id)
    {
        try
        {
            return Ok(_boxService.UpdateBox(dto, id));
        }
        catch (KeyNotFoundException e)
        {
            return NotFound("No box found at id " + id);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    
    [HttpDelete("{id}")]
    public IActionResult DeleteBox([FromRoute] int id)
    {
        return Ok(_boxService.DeleteBox(id));
    }


    [HttpGet]
    [Route("rebuilddb")]
    public void RebuildDB()
    {
        _boxService.RebuildDB();
    }
}