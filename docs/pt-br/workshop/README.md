---
title: Sejam bem-vindos(as) ao Workshop de GraphQL + .NET Core + Azure Functions 
---

# Sejam bem-vindos(as) ao Workshop de GraphQL + .NET Core + Azure Functions 

[![grapql-image.png](https://i.postimg.cc/pV7jjzcH/grapql-image.png)](https://postimg.cc/DmrmkJKj)

O GraphQL no .NET Core é um pouco diferente da implementação do JavaScript. Mas não tão diferente.

Os seguintes conceitos são semelhantes

- **Esquema**: ainda temos a ideia de um esquema. Algo que especifica quais entidades temos, o que podemos consultar, o que podemos fazer mutar e assim por diante
- **Resolvedor**: ainda temos o conceito de um resolvedor, que é uma parte do código que deve ser invocada quando uma consulta ou mutação é feita.
- **GQL**: ainda temos a linguagem de consulta GraphQL para definir nosso esquema e também a usamos para construir consultas e mutações para tentar ler/gravar dados

> Então, o que é diferente?

A diferença está na forma como resolvemos uma consulta. A primeira ação que efetuamos ao resolver uma consulta em GraphQL é garantir que o recurso que chamamos exista. Se ele existir, invocaremos a função correspondente. Abaixo está o mesmo pseudocódigo que explica a diferença na abordagem

## Abordagem do JS

```js
// JavaScript
const resolverObject = {
  hello: function resolver() { return "hello"; }
}
```

No GQL, solicitaríamos o recurso `hello`. O núcleo interno encontraria o objeto do resolvedor e invocaria a função `resolver()`.

## Abordagem do C#

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

Acima, temos a abordagem do C# em que temos uma classe `Query` e um método que é decorado com uma classe de atributo `GraphQLMetadata` e um parâmetro `hello` que é o recurso que ele resolve. Invocar nosso método `GetHello()` nos forneceria a resposta que buscamos. 

Essa é uma explicação muito breve de como o JavaScript e o C# diferem.

## O que eu preciso saber para continuar esse workshop?

Para dar continuidade nesse workshop, se faz necessário ter conhecimento em:

* **[C#](https://docs.microsoft.com/dotnet/csharp/tutorials/intro-to-csharp/?WT.mc_id=graphql_workshop-github-gllemos)**
* **[.NET Core](https://docs.microsoft.com/dotnet/core/introduction?WT.mc_id=graphql_workshop-github-gllemos)**
* **[GraphQL](https://graphql.org/learn/)**
* **[Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=graphql_workshop-github-gllemos)**
* **[App Service](https://docs.microsoft.com/azure/app-service/app-service-web-get-started-dotnet?WT.mc_id=graphql_workshop-github-gllemos)**

Porém, caso não tenha, deixaremos alguns recursos e links importantes de alguns cursos gratuitos sobre:

* **[Cursos Gratuitos - Microsoft Learn: C# & .NET Core](https://docs.microsoft.com/learn/browse/?products=dotnet&WT.mc_id=graphql_workshop-github-gllemos)**
* **[Cursos Gratuitos - Microsoft Learn: Serverless & Azure Functions](https://docs.microsoft.com/learn/paths/create-serverless-applications/?WT.mc_id=graphql_workshop-github-gllemos)**
* **[Tutoriais Azure App Service - Documentação Oficial](https://docs.microsoft.com/azure/app-service/overview?WT.mc_id=graphql_workshop-github-gllemos)**


