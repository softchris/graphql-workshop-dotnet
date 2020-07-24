(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"🚀-implantando-sua-aplicacao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🚀-implantando-sua-aplicacao"}},[s._v("#")]),s._v(" 🚀 Implantando sua aplicação")]),s._v(" "),t("h2",{attrs:{id:"o-que-vamos-criar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#o-que-vamos-criar"}},[s._v("#")]),s._v(" O que vamos criar?")]),s._v(" "),t("p",[s._v("Há duas coisas que precisamos implantar:")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("Nossos microsserviços")]),s._v(", para implantá-los, precisamos carregá-los em um registro de contêiner. Quando estiverem no registro de contêiner, poderemos criar pontos de extremidade de serviço")]),s._v(" "),t("li",[t("strong",[s._v("Nossa API sem servidor")]),s._v(", isso é tão simples quanto usar o VS Code e carregá-lo com um simples clique.")])]),s._v(" "),t("h3",{attrs:{id:"pre-requisitos-dos-microsservicos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisitos-dos-microsservicos"}},[s._v("#")]),s._v(" Pré-requisitos dos microsserviços")]),s._v(" "),t("p",[s._v("Para fazer essa parte, precisamos da CLI do Azure instalada:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest&\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Como mencionamos acima, há duas etapas que precisamos executar para cada serviço:")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Carregar")]),s._v(" para o registro de contêiner")]),s._v(" "),t("li",[t("strong",[s._v("Criar")]),s._v(" um ponto de extremidade de serviço")])]),s._v(" "),t("p",[t("strong",[s._v("Criar um grupo de recursos")]),s._v(" Vamos criar primeiro um Grupo de recursos:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("az group create --name [name of resource group] --location westeurope\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Criar um registro de contêiner")])]),s._v(" "),t("p",[s._v("Depois disso, precisaremos criar um "),t("em",[s._v("registro de contêiner")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("az acr create --resource-group [name of resource group] --name [name of container registry, unique and only a-z or 0-9] --sku Basic --admin-enabled true\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"compilar-marcar-enviar-conteiner-por-push-criar-ponto-de-extremidade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compilar-marcar-enviar-conteiner-por-push-criar-ponto-de-extremidade"}},[s._v("#")]),s._v(" Compilar, marcar, enviar contêiner por push + criar ponto de extremidade")]),s._v(" "),t("p",[s._v("Precisamos seguir essas etapas para o serviço de produto e de revisões.")]),s._v(" "),t("p",[t("strong",[s._v("Criar imagem")])]),s._v(" "),t("p",[s._v("Primeiro vamos criar nosso serviço:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker build -t products-service .\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Localizar o valor do servidor de logon")])]),s._v(" "),t("p",[s._v("Em seguida, precisaremos descobrir o "),t("code",[s._v("login server")]),s._v(". Esse é um processo em duas etapas")]),s._v(" "),t("p",[s._v("Primeiro, faça logon em nosso registro de contêiner:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" az acr login --name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name of registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Agora, consulte o nome do servidor de logon com:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" az acr show --name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name of container registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --query loginServer --output table\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Marcar imagem")])]),s._v(" "),t("p",[s._v("Agora vamos usar o valor do "),t("em",[s._v("servidor de logon")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docker tag products-service "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("loginServer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/products-service:v1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Enviar nossa imagem por push para o Registro")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docker push "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("loginServer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/products-service:v1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Verifique se o push fez o trabalho dele com o seguinte comando:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" az acr repository list --name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name of registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --output table\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Criar um ponto de extremidade de serviço")])]),s._v(" "),t("p",[s._v("Há duas maneiras de fazer isso:")]),s._v(" "),t("ol",[t("li",[s._v("CLI do Azure")]),s._v(" "),t("li",[s._v("Visualmente, por meio do portal")])]),s._v(" "),t("p",[t("strong",[s._v("Alt I – CLI do Azure – criar ponto de extremidade")])]),s._v(" "),t("p",[s._v("Antes que possamos criar nosso ponto de extremidade, precisamos dos valores de nome de usuário e senha, desta forma:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" az acr credential show --name --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwords[0].value"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Agora, vamos criar um contêiner na nuvem com base em nossa imagem enviada por push:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" az container create --resource-group "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("resource group"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --name aci-tutorial-app --image "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("acrLoginServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("products-service or reviews-service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --cpu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --memory "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --registry-login-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("acrLoginServer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --registry-username "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("acrName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --registry-password "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("acrPassword"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --dns-name-label "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("aciDnsLabel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --ports "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("ALT II – Criar ponto de extremidade visualmente")])]),s._v(" "),t("p",[s._v("Para fazer isso visualmente, precisamos abrir o portal e selecionar para criar um recurso, desta forma:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/m3u7ox70e1hnfcvfl269.png",alt:""}})]),s._v(" "),t("p",[s._v("Em seguida, selecione o modelo correto digitando "),t("code",[s._v("Web App for Containers")]),s._v(":")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/tbho3zfew4auk5789dot.png",alt:""}})]),s._v(" "),t("p",[s._v("Depois, preencha alguns campos obrigatórios:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/hv4tjrud8dhybgav21ld.png",alt:""}})]),s._v(" "),t("p",[s._v("Clique na seção "),t("code",[s._v("Configure Container")]),s._v(" e selecione o registro de contêiner e o contêiner corretos (que você acabou de criar e carregar).")]),s._v(" "),t("p",[s._v("Pronto. Isso deve criar o ponto de extremidade.")]),s._v(" "),t("h3",{attrs:{id:"api-sem-servidor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-sem-servidor"}},[s._v("#")]),s._v(" API sem servidor")]),s._v(" "),t("p",[s._v("Então, como implantamos a API sem servidor?")]),s._v(" "),t("p",[s._v("Precisamos revisitar nosso aplicativo sem servidor antes de podermos implantar. Por quê?")]),s._v(" "),t("p",[s._v("Neste momento, os pontos de extremidade externos estão apontando para endereços IP locais.")]),s._v(" "),t("p",[s._v("Examinando o arquivo "),t("code",[s._v("Query.cs")]),s._v(", vemos isto:")]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GraphQLMetadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reviews"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" Task"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Review"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetReviews")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" HttpHelper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Get"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Review"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8001"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GraphQLMetadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"products"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" Task"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetProducts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" HttpHelper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Get"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:8000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("Ambos devem apontar para nossos novos pontos de extremidade no Azure. Para tornar isso possível, alteramos o anterior para:")]),s._v(" "),t("div",{staticClass:"language-csharp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GraphQLMetadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reviews"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" Task"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Review"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetReviews")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" HttpHelper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Get"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Review"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Environment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetEnvironmentVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"REVIEWS_URL"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" EnvironmentVariableTarget"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GraphQLMetadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"products"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" Task"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetProducts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" HttpHelper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Get"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("List"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Environment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetEnvironmentVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PRODUCTS_URL"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" EnvironmentVariableTarget"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("Agora, quando nosso aplicativo de funções for implantado na nuvem, ele será lido no AppSettings dele e preencherá "),t("code",[s._v("process.env")]),s._v(".")]),s._v(" "),t("blockquote",[t("p",[s._v("Como obtemos os valores acima para AppSettings?")])]),s._v(" "),t("p",[s._v("Há duas maneiras")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("Adicionar uma entrada manualmente")]),s._v(" no AppSettings no portal para o aplicativo de funções do Azure depois que o implantarmos")]),s._v(" "),t("li",[t("strong",[s._v("Armazenar esses valores no arquivo "),t("code",[s._v("local.settings.json")])]),s._v(" e, como parte da implantação do nosso aplicativo do Azure, selecionamos para copiar valores desse arquivo para AppSettings")])]),s._v(" "),t("p",[s._v("Mostraremos esta última")]),s._v(" "),t("p",[t("strong",[s._v("Armazenar chaves de aplicativo em local.settings.json")])]),s._v(" "),t("p",[s._v("Examinando o conteúdo de "),t("code",[s._v("local.settings.json")]),s._v(", ele deve ser semelhante a este:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"IsEncrypted"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Values"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"AzureWebJobsStorage"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"FUNCTIONS_WORKER_RUNTIME"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("Na propriedade "),t("code",[s._v("Values")]),s._v(", adicione as chaves necessárias:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"IsEncrypted"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Values"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"AzureWebJobsStorage"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"FUNCTIONS_WORKER_RUNTIME"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"PRODUCTS_URL"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<url to endpoint>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"REVIEWS_URL"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<url to endpoint>"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("Implantar o aplicativo de funções do Azure")])]),s._v(" "),t("p",[s._v("Clique no logotipo do Azure na barra de ferramentas esquerda no VS Code.")]),s._v(" "),t("p",[s._v("Entre no Azure se você ainda não tiver feito isso.")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/0485qfd86jawp4c9blx3.png",alt:""}})]),s._v(" "),t("p",[s._v("Clique no símbolo implantar")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/p07g5173lrpvuwuusvi0.png",alt:""}})]),s._v(" "),t("p",[s._v("Selecione "),t("code",[s._v("Create a new Function App")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/feovtte58st3x1l1byez.png",alt:""}})]),s._v(" "),t("p",[s._v("Isso deve começar a mostrar algo como isto:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/sx350ke8d6u820s8kycn.png",alt:""}})]),s._v(" "),t("p",[s._v("Quando terminar, você verá algo como isto:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/7nis5z0xk4fcyv2y6dnm.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("Transferir chaves do aplicativo")])]),s._v(" "),t("p",[s._v("Agora que você tem um aplicativo de funções do Azure, clique com o botão direito do mouse nele e selecione "),t("code",[s._v("Upload Local Settings")]),s._v(".")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/yw4d7m5d02nneh1a4ro3.png",alt:""}})]),s._v(" "),t("p",[s._v("Tudo já deve estar na nuvem e funcionando!")]),s._v(" "),t("h2",{attrs:{id:"solucao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solucao"}},[s._v("#")]),s._v(" Solução")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/softchris/graphql-workshop-dotnet/tree/master/part5",target:"_blank",rel:"noopener noreferrer"}},[s._v("Workshop da SOLUÇÃO, parte 5"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);