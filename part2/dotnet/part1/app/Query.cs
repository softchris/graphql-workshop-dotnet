using GraphQL;

namespace app 
{
  public class Query
  {
    [GraphQLMetadata("hello")]
    public string GetHello()
    {
      return "World";
    }
  }
}