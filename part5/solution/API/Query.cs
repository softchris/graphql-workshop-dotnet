using GraphQL.Types;
using GraphQL;
using System.Linq;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;

namespace Microsoft
{

  public class Response 
  {
    public List<Planet> results { get; set; } 
  }

  public class HttpHelper 
  {
    public static async ValueTask<T> Get<T>(string url)
    {
      var options = new JsonSerializerOptions
      {
        PropertyNameCaseInsensitive = true,
      };

      HttpClient client = new HttpClient();
      var streamTask = client.GetStreamAsync(url);
      var response = await System.Text.Json.JsonSerializer.DeserializeAsync<T>(await streamTask, options);
      return response;
    }
  }
  public class Query
  {
    [GraphQLMetadata("hello")]
    public string GetHello()
    {
      return "World";
    }

    [GraphQLMetadata("products")]
    public async Task<List<Product>> GetProducts()
    {
      return  await HttpHelper.Get<List<Product>>("http://localhost:8000");
    }

    [GraphQLMetadata("product")]
    public Product GetProductById(int id)
    {
      return Data.Products.SingleOrDefault(p => p.Id == id);
    }

    [GraphQLMetadata("reviews")]
    public async Task<List<Review>> GetReviews()
    {
      return await HttpHelper.Get<List<Review>>("http://localhost:8001");
    }

    [GraphQLMetadata("planets")]
    public async Task<List<Planet>> GetPlanets()
    {
      var response = await HttpHelper.Get<Response>("https://swapi.co/api/planets");
      return response.results;
    }
  }

  [GraphQLMetadata("Review", IsTypeOf = typeof(Review))]
  public class ReviewResolver
  {
    public string Title(Review review) => review.Title;
    public string Description(Review review) => review.Description;
    public int Grade(Review review) => review.Grade;
    public async Task<Product> Product(ResolveFieldContext context, Review review)
    {
      var products = await HttpHelper.Get<List<Product>>("http://localhost:8000");
      return products.SingleOrDefault(p => p.Id == review.Product);
    }
  }
}