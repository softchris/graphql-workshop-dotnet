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

            Console.WriteLine("Hello World!");
        }
    }
}
