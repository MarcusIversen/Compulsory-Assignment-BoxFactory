namespace Domain;


public class Box
{
    public int ID { get; set; }
    
    public string Name { get; set; }
    
    public double Price { get; set; }
    
    public string Size { get; set; }
    
    public string Description { get; set; }
    
    //public List<Box> Boxes { get; set; }
}

public class Customer
{
    public int ID { get; set; }
    
    public string FirstName { get; set; }
    
    public string LastName { get; set; }
    
    public string Address { get; set; }
    
    public int PhoneNumber { get; set; }

    public Box? Box { get; set; }
}
