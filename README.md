# Angular Fundamentals Seed

> [Angular Fundamental] de [Fabio Guelfi] (https://github.com/fabioguelfi).

## Configuração e ferramentas de projeto

### Ferramentas

Este curso é gravado com as seguintes ferramentas, você pode, opcionalmente, acompanhar usando o mesmo, ou o seu editor de texto / IDE favorito e navegador.

* Editor de texto *: Visual Studio Code, você pode [baixá-lo aqui] (http://code.visualstudio.com) para Mac, Windows e Linux.
* Navegador *: Google Chrome, você pode [fazer o download aqui] (https://www.google.com/chrome)

### Pré-requisitos

Por favor, certifique-se de ter instalado o seguinte:

* Instale a versão mais recente de [Node.js] (http://nodejs.org) (Mac ou Windows)
  Usuários de Mac podem opcionalmente preparar o nó de instalação se eles tiverem instalado

Node Sass, você pode precisar se você ainda não o instalou:

`` `bash
npm install -g node-sass
`` `

### Instalação de projetos

Para pegar o projeto semente, ou bifurque este repositório ou [clique aqui para baixar] (https://github.com/fabioguelfi/fundamentos-angular) a pasta `.zip` e extraia os arquivos onde quiser na sua máquina.

#### Etapa 1: Gerenciador de Pacotes

Para instalar as dependências do projeto, você precisará usar `npm` ou `yarn`. Para instalar o `yarn`, execute o seguinte no seu terminal:

`` `bash
npm install -g yarn
`` `

Os usuários de Mac podem, alternativamente, usar `brew` para instalar` yarn`.


Se você tiver problemas ao instalar / usar `yarn`, você pode verificar as instruções de instalação [aqui] (https://yarnpkg.com/en/docs/install).

##### Etapa 2: dependências do projeto

Agora que temos um gerenciador de pacotes, podemos instalar as dependências do projeto. Você pode fazer isso executando:

`yarn`

# OU

`npm install`

Isso instalará nossas dependências para executar nosso aplicativo Angular.

#### Etapa 3: executando o projeto

Durante o desenvolvimento, o projeto é construído usando o `webpack-dev-server`. Isso fornece um servidor de desenvolvimento local e o webpack recompila nosso aplicativo quando um arquivo é alterado. O projeto também atualizará automaticamente a página sempre que fizermos alterações.

Para iniciar o projeto em desenvolvimento, execute:

`yarn start`

# OR

`npm start`

Isso produzirá algumas informações sobre o projeto (como a versão do TypeScript e o progresso da compilação). Depois de ver "build completed", você está pronto para codificar!

Abra seu navegador para [localhost: 4000] (http: // localhost: 4000) para começar a executar o código.

### Ferramentas de projeto

O projeto usa o `webpack` para construir e compilar todos os nossos ativos. Isso fará o seguinte para nós:

- Compile todo o nosso código TypeScript em JavaScript (a partir de `main.ts` e ramificando para fora a partir de arquivos importados)
- Empacote todo o nosso JavaScript em um arquivo para usar
- Permita-nos usar o SASS para os arquivos CSS do nosso componente
- Fornecer os polyfills necessários para executar nosso aplicativo em todos os navegadores modernos
- Mockar um backend JSON usando [json-server] (https://github.com/typicode/json-server)