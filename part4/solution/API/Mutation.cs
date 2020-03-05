using GraphQL.Types;
using GraphQL;
using System.Linq;
using System.Collections.Generic;

namespace Microsoft
{
  public class Mutation
  {
    [GraphQLMetadata("createProduct")]
    public Product CreateProduct(Product product)
    {
      product.Id = Data.Products.Count() + 1;
      Data.Products.Add(product);
      return product;
    }
  }
}