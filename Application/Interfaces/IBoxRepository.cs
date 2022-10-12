using Domain;

namespace Application.Interfaces;

public interface IBoxRepository
{
    Box GetBox(int id);

    List<Box> GetBoxes();

    Box AddBox(Box box);

    Box UpdateBox(Box box, int id);

    Box DeleteBox(int id);
    
    void RebuildDB();
}