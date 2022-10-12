using Application.Interfaces;
using Domain;

namespace Infrastructure;

public class BoxRepository : IBoxRepository
{
    private BoxRepositoryDbContext _context;

    public BoxRepository(BoxRepositoryDbContext context)
    {
        _context = context;
    }

    public Box GetBox(int id)
    {
        var box = _context.Boxes.FirstOrDefault(box => box.ID == id);
        return box;
    }

    public List<Box> GetBoxes()
    {
        return _context.Boxes.ToList();
    }

    public Box AddBox(Box box)
    {
        _context.Boxes.Add(box);
        _context.SaveChanges();
        return box;

    }

    public Box UpdateBox(Box box, int id)
    {
        var boxByID = GetBox(id);
        if(boxByID.ID == id)
        {
            boxByID.Name = box.Name;
            boxByID.Price = box.Price;
            boxByID.Size = box.Size;
            boxByID.Description = box.Description;
            _context.Update(boxByID);
            _context.SaveChanges();
        }
        return box;
    }

    public Box DeleteBox(int id)
    {
        var box = _context.Boxes.FirstOrDefault(box => box.ID == id);
        _context.Boxes.Remove(box);
        _context.SaveChanges();
        return box;
    }

    public void RebuildDB()
    {
        _context.Database.EnsureDeleted();
        _context.Database.EnsureCreated();
    }
}