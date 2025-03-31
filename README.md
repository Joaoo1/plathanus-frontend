# Plathanus - Portal de notícias

Esta é o frontend desenvolvido para o teste da Plathanus. Encontra-se disponível online clicando [aqui](https://plathanus.utamo.com.br). 

O app não possui um botão de login na página inicial, e isso foi de propósito, pois não faz sentido um usuário comum ver um botão de login. Então para logar é só acessar a url /sign-in, ou clicar [aqui](https://plathanus.utamo.com.br/sign-in).

Considerando o app não possui funcionalidade de cadastrar usuário, para logar será necessário criar um usuário através do swagger da API, que se encontra [aqui](https://api-plathanus.utamo.com.br/docs), ou, simplesmente utilizar o usuário: `test@test.com` e senha `123456`

**O app já consta com CI/CD configurado, portanto, qualquer alteração na branch main já irá refletir no app.**

## 💭 Tecnologias utilizadas
Vou deixar aqui um breve resumo de algumas tecnologias utilizadas nesse projeto:

- **React query**: O react query é uma tecnologia que acaba facilitando demais as comunicações com serviços externos, pois possui muitas funcionalidades prontas que são essenciais, como cache, recarregar dados automaticamente ao sair e voltar na tela, cria varios estados do react facilitar a atualização da interface do usuário, etc.

- **React hook form + Zod**: O react hook form faz um parte perfeito com o Zod para lidar com toda aquela parte chata de formulários e te livra de um monte de boilerplate.

- **Chakra UI**: Por um tempo eu fui contra biblioteca de componentes visuais pelo trauma que tive trabalhando com bootstrap e companhia. Mas numa empresa que trabalhei fui obrigado a utilizar o chakra e acabei gostando muito. É uma biblioteca com boa integração com typescript, tem os componentes altamente customizáveis e bem feitos (está se encaminhando cada vez mais para esse caminho de ser mais customizável e menos opinativo com a recem lançada v3), e a melhor parte, não precisa criar 1 arquivo CSS sequer, evitando ter que ficar caçando classes e seletores CSS durante manuntenções. 

- **localforage**: ferramenta ótima para melhorar a experiência com dados salvos localmente no navegador, proporcionando um armazenamento assíncrono e tentando utilizar tecnologias mais robustas que o local-storage como IndexedDB ou WebSQL.

## 🔧 Executando o projeto
### Pré-requisitos para executar localmente

Antes de começar, você vai precisar ter a API configurada e rodando na sua máquina. Caso ainda não tenha, siga as instruções [aqui](https://github.com/Joaoo1/plathanus-backend?tab=readme-ov-file#api-plathanus).

### Executando o projeto localmente

```bash
# Instale as dependências
$ npm install

# Confira se a porta utilizada no arquivo `src/env.ts` é a mesma que você está executando a API localmente

# Execute a aplicação em modo desenvolvimento
$ npm run dev
```
