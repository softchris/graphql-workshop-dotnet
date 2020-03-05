using GraphQL.Types;
using GraphQL;
using System.Linq;
using System.Collections.Generic;

namespace app
{
  public class Query
  {
    [GraphQLMetadata("hello")]
    public string GetHello()
    {
      return "World";
    }

    [GraphQLMetadata("products")]
    public List<Product> GetProducts()
    {
      return Data.Products;
    }

    [GraphQLMetadata("product")]
    public Product GetProductById(int id)
    {
      return Data.Products.SingleOrDefault( p => p.Id == id );
    }

    [GraphQLMetadata("reviews")]
    public List<Review> GetReviews()
    {
      return Data.Reviews;
    }
  }

  [GraphQLMetadata("Review", IsTypeOf = typeof(Review))]
  public class ReviewResolver
  {
    public string Title(Review review) => review.Title;
    public string Description(Review review) => review.Description;
    public int Grade(Review review) => review.Grade;
    public Product Product(ResolveFieldContext context, Review review)
    {
      return Data.Products.SingleOrDefault(p => p.Id == review.Product);
    }
  }
} 