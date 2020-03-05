using System.Collections.Generic;

namespace Microsoft
{

  public class Planet 
  {
    public string Name { get; set; }
  }
  public class Product
  {
    public int Id { get; set; }
    public string Name { get; set; }
  }

  public class Review
  {
    public int Grade { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int Product { get; set; }
  }
  public class Data
  {
    public static List<Product> Products = new List<Product>()
    {
      new Product()
      {
        Id = 1,
        Name = "Avengers - End Game"
      }
    };

    public static List<Review> Reviews = new List<Review>()
    {
      new Review()
      {
        Grade = 5,
        Title = "Great movie",
        Description = "Great actor playing Thanos",
        Product = 1
      }
    };
  }
}

