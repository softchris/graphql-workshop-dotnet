using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace reviews.Controllers
{
  public class Review
  {
    public int Grade { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int Product { get; set; }
  }

  public class ReviewsStore
  {
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

  [ApiController]
  public class DefaultController : ControllerBase
  {
    [Route("/")]
    public List<Review> GetReviews()
    {
      return ReviewsStore.Reviews;
    }
  }
}