# Web Sockets Flow4Network

Exemplo de como obter e monitorar os dados dos testes feitos em tempo real.

- [Instalações](#instalações)
- [Configurações](#configurações)
- [Funcionalidade](#funcionalidade)
- [Como Funciona](#como-funciona)
- [Rodando o script](#rodando-o-script)

## Instalações

- **[Node.js e NPM](https://www.nodejs.org/)** (suportadas versões: 10.x.x)

## Configurações

- Estando na raiz desse projeto, basta executar para instalar todas as depêndencias:

```shell
npm i
```

- No script `socketTest.js`, nas variáveis 4 e 5, adicione as credenciais referentes ao usuário admin tal qual:

```js
const username = 'meu_usuario';
const password = 'minha_senha';
```

## Funcionalidade

Com auxilio de um web socket, poderemos obter um ouvinte (listener) que mantem a conexão com a aplicação e a cada novo teste realizado, automaticamente ele receberá esse novo dado (o teste realizado) pra que você possa fazer a tratativa que desejar.'

Vale ressaltar que a cada nova interação, você deverá receber `um novo teste` e jamais um array de testes. Ou seja, pra cada teste feito o socket receberá uma nova entrada.

Devem ser seguidos os seguintes passos:
- logar com um usuário válido no sistema (é necessário que seja um Administrador)
- Um vez que o login seja efetuado com sucesso, coletar o identificador (id) do login
- conecta-se ao socket usando este id como base pra identificação (abordaremos no tópico a frente)

## Como funciona

Voltemos nosso olhar ao script `socketTest.js`

Haverá, neste exemplo, a funçào para login pronta do qual poderá ser usada como exemplo. Para usá-la e ter acesso ao teste por este exemplo, basta informar seu usuário e senha nos campos `username` e `password` nas linhas 4 e 5 deste código.

- [Login](#login)
- [Conexão com o socket](#conexão-com-o-socket)

### Login

A função login deve retornar os seguintes dados se o login for efetuado com sucesso, são eles: 

  - `message`: mensagem informando que o login foi feito com sucesso
  - `token`: informa o token de acesso para operações com nossa API, irrelevante neste caso.
  - `name`: nome do cliente logado
  - `id`: identificador único do cliente, este do qual nos interessa pra execução da nossa tarefa neste contexto.

### Conexão com o socket

Com o id do cliente "em mãos", precisamos nos conectar ao socket.

Vamos supor que um id seja: `123456789`
Precisamos montar nos conectar com o socket usando a estrutura `Id-recent-tests`, ou seja, neste caso: `123456789-recent-tests`.

Com isso em mão, basta a conexão com o socket e toda a informação cairá neste ouvinte, ficando a critério do seu uso.

## Rodando o script

Execute na raiz do projeto:

```shell
npm run execute
```

ou

```shell
node socketTest.js
```
