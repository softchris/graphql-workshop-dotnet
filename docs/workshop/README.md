---
title: Welcome to GraphQL + .NET Core + Azure Functions Workshop
---

# Welcome to GraphQL + .NET Core + Azure Functions Workshop

[![grapql-image.png](https://i.postimg.cc/pV7jjzcH/grapql-image.png)](https://postimg.cc/DmrmkJKj)

GraphQL in .NET Core is a little bit different than the JavaScript implementation. Not a whole lot though.

What is the same are the following concepts

- **Schema**, we still have the idea of a schema, something that specifies what Entities we have, what we can Query, what we can Mutate and so on
- **Resolver**, we still have the concept of a Resolver, a piece of code that should be invoked when a Query or Mutation is made.
- **GQL**, we still have the GraphQL Query Language to define our schema and we also use it to construct queries and mutations to try to read/write data

> So what is different?

The difference lies in how we resolve a query. The first thing we do when resolving a Query in GraphQL is to ensure the resource we ask for exist. If it does we invoke the corresponding Function. Below is same pseudo code the explains the difference in approach

## JS Approach

```js
// JavaScript
const resolverObject = {
  hello: function resolver() { return "hello"; }
}
```

In GQL we would ask for the resource `hello`. The inner core would find the resolver object and invoke the `resolver()` function.

## C# Approach

```csharp
// C#

public class Query 
{
  [GraphQLMetadata("hello")]
  public string GetHello() 
  {
      return "World";
  }
}
```

Above we have the C# approach in which we have a `Query` class and a method that is decorated with an attribute class `GraphQLMetadata` and a parameter `hello` which is the resource it resolves. Invoking our `GetHello()` method would give us the answer we seek. 

That is a very brief explanation of how JavaScript and C# differs.

## What do I need to know to continue this workshop?

To continue this workshop, it is necessary to have knowledge in:

* **[C#](https://docs.microsoft.com/dotnet/csharp/tutorials/intro-to-csharp/?WT.mc_id=graphql_workshop-github-chnoring)**
* **[.NET Core](https://docs.microsoft.com/dotnet/core/introduction?WT.mc_id=graphql_workshop-github-chnoring)**
* **[GraphQL](https://graphql.org/learn/)**
* **[Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=graphql_workshop-github-chnoring)**
* **[App Service](https://docs.microsoft.com/azure/app-service/app-service-web-get-started-dotnet?WT.mc_id=graphql_workshop-github-chnoring)**

However, if not, we will send here for you some important resources and links for some free courses on:

* **[Cursos Gratuitos - Microsoft Learn: C# & .NET Core](https://docs.microsoft.com/learn/browse/?products=dotnet&WT.mc_id=graphql_workshop-github-chnoring)**
* **[Cursos Gratuitos - Microsoft Learn: Serverless & Azure Functions](https://docs.microsoft.com/learn/paths/create-serverless-applications/?WT.mc_id=graphql_workshop-github-chnoring)**
* **[Tutoriais Azure App Service - Documentação Oficial](https://docs.microsoft.com/azure/app-service/overview?WT.mc_id=graphql_workshop-github-chnoring)**
