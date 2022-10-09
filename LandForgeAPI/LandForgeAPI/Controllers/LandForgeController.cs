using land_forcesAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LandForgeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LandForgeController : ControllerBase
    {
        private readonly Context _context;

        public LandForgeController(Context context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<LandForge>>> GetLandForges()
        {
            return Ok(await _context.LandForges.ToListAsync());
        }
        [HttpPost]
        public async Task<ActionResult<List<LandForge>>> Addsoldier(LandForge force)
        {
            _context.LandForges.Add(force);
            await _context.SaveChangesAsync();
            return Ok(await _context.LandForges.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<LandForge>>> Updatesoldier(LandForge request)
        {
            var soldierDB = await _context.LandForges.FindAsync(request.Id);
            if (soldierDB == null)
            {
                return BadRequest("Personel Bulunamadı.");
            }
            soldierDB.FirstName = request.FirstName;
            soldierDB.LastName = request.LastName;
            soldierDB.Greade = request.Greade;
            soldierDB.Place = request.Place;
            soldierDB.Rank = request.Rank;
            await _context.SaveChangesAsync();
            return Ok(await _context.LandForges.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<LandForge>> Delete(int id)
        {
            var dbsoldier = await _context.LandForges.FindAsync(id);
            if (dbsoldier == null)
            {
                return BadRequest("Personel Bulunamadı.");
            }
            _context.LandForges.Remove(dbsoldier);
            await _context.SaveChangesAsync();
            return Ok(await _context.LandForges.ToListAsync());
        }
    }
}
