using Application.DTOs;
using Application.Interfaces;
using AutoMapper;
using Domain;
using FluentValidation;

namespace Application;

public class BoxService : IBoxService
{
    private IBoxRepository _repository;

    private IValidator<PostBoxDTO> _validationBoxPost;
    private IValidator<PutBoxDTO> _validationBoxPut;
    private IMapper _mapper;

    public BoxService(IBoxRepository repository,
        IMapper mapper,
        IValidator<PostBoxDTO> postBoxDTO,
        IValidator<PutBoxDTO> putBoxDTO)
    {
        _repository = repository;
        _mapper = mapper;
        _validationBoxPost = postBoxDTO;
        _validationBoxPut = putBoxDTO;
    }

    public Box GetBox(int id)
    {
        return _repository.GetBox(id);
    }

    public List<Box> GetBoxes()
    {
        return _repository.GetBoxes();
    }

    public Box AddBox(PostBoxDTO box)
    {
        var validate = _validationBoxPost.Validate(box);
        if (!validate.IsValid)
        {
            throw new ValidationException(validate.ToString());
        }

        return _repository.AddBox(_mapper.Map<Box>(box));
    }

    public Box UpdateBox(PutBoxDTO box, int id)
    {
        if (id != box.ID)
            throw new ValidationException("ID in the body and route are different");
        var validate = _validationBoxPut.Validate(box);
        if (!validate.IsValid)
        {
            throw new ValidationException(validate.ToString());
        }

        return _repository.UpdateBox(_mapper.Map<Box>(box), id);
    }

    public Box DeleteBox(int id)
    {
        return _repository.DeleteBox(id);
    }

    public void RebuildDB()
    {
        _repository.RebuildDB();
    }
}