using Application.DTOs;
using Domain;

namespace Application.Interfaces;

public interface IBoxService
{
    Box GetBox(int id);

    List<Box> GetBoxes();

    Box AddBox(PostBoxDTO box);

    Box UpdateBox(PutBoxDTO box, int id);

    Box DeleteBox(int id);

    void RebuildDB();
}