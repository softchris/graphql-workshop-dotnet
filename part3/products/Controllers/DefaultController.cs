using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace products.Controllers
{
  public class Product
  {
    public int Id { get; set; }
    public string Name { get; set; }
  }

  public class ProductsStore 
  {
    public static List<Product> Products = new List<Product>()
    {
      new Product()
      {
        Id = 1,
        Name = "Avengers - End Game"
      }
    };
  }

  [ApiController]
  public class DefaultController : ControllerBase 
  {
    [Route("/")]
    public List<Product> GetProducts()
    {
      return ProductsStore.Products;
    }
  }
}