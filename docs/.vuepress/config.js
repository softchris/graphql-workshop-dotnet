/**
 * file: config.js
 * description: file responsible for all application configuration
 * date: 07/24/2020
 * author: Glaucia Lemos & Chris Noring
 */

module.exports = {
  base: '/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  logo: 'bit.png',
  title: 'Workshop about GraphQL + .NET Core + Azure Functions',
  description: 'Workshop about GraphQL + .NET Core + Azure Functions',
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Workshop about GraphQL + .NET Core + Azure Functions',
      description: 'Workshop about GraphQL + .NET Core + Azure Functions',
    },
    '/pt-br/': {
      lang: 'pt-BR',
      title: 'Workshop GraphQL + .NET Core + Azure Functions',
      description: 'Workshop GraphQL + .NET Core + Azure Functions',
    },
  },
  themeConfig: {
    repo: 'https://github.com/softchris/graphql-workshop-dotnet',
    editLinks: true,
    editLinkText: 'Do you found an error? So, help us to improve this worskhop',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Main Page', link: '/' },
          { text: 'Videos', link: 'https://www.youtube.com/user/l32759' },
          { text: 'Doubts?', link: 'https://github.com/softchris/graphql-workshop-dotnet/issues' },
          { text: 'Code of Conduct', link: '' }
        ],
        sidebar: [
          { title: '🍕 Introduction - What is GraphQL and Serverless?', path: '/workshop/1' },
          { title: '🔎 The GraphQL API', path: '/workshop/2' },
          { title: '📦 Microservices and Docker', path: '/workshop/3' },
          { title: '☁️ Serverless Functions', path: '/workshop/4' },
          { title: '🚀 Deploy your app', path: '/workshop/5' }
        ],
      },
      '/pt-br/': {
        selectText: 'Idiomas',
        label: 'Português',
        nav: [
          { text: 'Página Principal', link: '/pt-br/' },
          { text: 'Videos', link: 'https://www.youtube.com/user/l32759' },
          { text: 'Dúvidas', link: 'https://github.com/softchris/graphql-workshop-dotnet/issues' },
          { text: 'Código de Conduta', link: '' }
        ],
        sidebar: [
          { title: '🍕 Introdução - O que é GraphQL e computação sem servidor?', path: '/docs/pt-br/workshop/1' },
          { title: '🔎 API do GraphQL', path: '/docs/pt-br/workshop/2' },
          { title: '📦 Microsserviços e o Docker', path: '/docs/pt-br/workshop/3' },
          { title: '☁️ Funções sem servidor', path: '/docs/pt-br/workshop/4' },
          { title: '🚀 Implantando sua aplicação', path: '/docs/pt-br/workshop/5' }  
        ]
      },
    }, // fim colchete de locales
  }
}