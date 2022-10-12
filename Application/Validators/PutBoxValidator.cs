using Application.DTOs;
using FluentValidation;

namespace Application.Validators;

public class PutBoxValidator : AbstractValidator<PutBoxDTO>
{
    public PutBoxValidator()
    {
            RuleFor(b => b.ID).NotEmpty().NotNull().GreaterThan(0);
            RuleFor(b => b.Name).NotEmpty();
            RuleFor(b => b.Price).NotEmpty().GreaterThan(0);
            RuleFor(b => b.Description).NotEmpty();
            RuleFor(b => b.Size).NotEmpty(); 
        }
}