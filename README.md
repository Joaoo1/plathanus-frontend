# Plathanus - Portal de notícias

Esta é o frontend desenvolvido para o teste da Plathanus. Encontra-se disponível online clicando [aqui](https://plathanus.utamo.com.br). 

O app não possui um botão de login na página inicial, e isso foi de propósito, pois não faz sentido um usuário comum ver um botão de login. Então para logar é só acessar a url /sign-in, ou clicar [aqui](https://plathanus.utamo.com.br/sign-in).

Considerando o app não possui funcionalidade de cadastrar usuário, para logar será necessário criar um usuário através do swagger da API, que se encontra [aqui](https://api-plathanus.utamo.com.br/docs), ou, simplesmente utilizar o usuário: `test@test.com` e senha `123456`

**O app já consta com CI/CD configurado, portanto, qualquer alteração na branch main já irá refletir no app.**

### ⚙ Pré-requisitos para executar localmente

Antes de começar, você vai precisar ter a API configurada e rodando na sua máquina. Caso ainda não tenha, siga as instruções [aqui](https://github.com/Joaoo1/plathanus-backend?tab=readme-ov-file#api-plathanus).

### 🧭 Executando o projeto localmente

```bash
# Instale as dependências
$ npm install

# Confira se a porta utilizada no arquivo `src/env.ts` é a mesma que você está executando a API localmente

# Execute a aplicação em modo desenvolvimento
$ npm run dev
```