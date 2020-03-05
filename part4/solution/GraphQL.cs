using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using GraphQL;

namespace Microsoft
{
    public static class GraphQL
    {
        [FunctionName("GraphQL")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string query = req.Query["query"];
            var schema = SchemaFactory.Create();

            var json = schema.Execute(_ =>
            {
                _.Query = query;
            });
            return new OkObjectResult(json);
        }
    }
}
