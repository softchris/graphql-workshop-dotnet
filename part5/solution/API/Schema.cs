using GraphQL.Types;
using GraphQL;

namespace Microsoft
{
  public class SchemaFactory
  {
    public static ISchema Create()
    {
      var schema = Schema.For(@"
          type Product {
            id: ID,
            name: String
          }

          type Planet {
            name: String
          }

          type Review {
            grade: Int,
            title: String,
            description: String,
            product: Product
          }

          input ProductInput {
            name: String
          }

          type Mutation {
            createProduct(product: ProductInput): Product
          }

          type Query {
            hello: String,
            products: [Product],
            product(id: ID!): Product,
            reviews: [Review],
            planets: [Planet]
          }
      ", _ =>
      {
        _.Types.Include<Query>();
        _.Types.Include<Mutation>();
        _.Types.Include<ReviewResolver>();
      });
      return schema;
    }
  }
}