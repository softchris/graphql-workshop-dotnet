using System;
using GraphQL;
using GraphQL.Types;

namespace app
{
  class Program
  {
    static void Main(string[] args)
    {
      var schema = SchemaFactory.Create();
      var json = schema.Execute(_ =>
      {
        _.Query = "{ reviews { product { name } } }";
      });

      Console.WriteLine(json);
    }
  }
}