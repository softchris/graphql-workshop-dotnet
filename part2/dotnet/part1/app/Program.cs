using System;
using GraphQL.Types;
using GraphQL;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            var schema = Schema.For(@"
            type Query {
                hello: String
            }
            ", _ =>
            {
            _.Types.Include<Query>();
            });

            var json = schema.Execute(_ =>
            {
                _.Query = "{ hello }";
            });

            Console.WriteLine(json);
        }
    }
}
