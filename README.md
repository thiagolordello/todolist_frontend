# To Do List Front End - O seu app de tarefas.

Este projeto encontra-se disponível para em (repulsive-riddle-production.up.railway.app).

Este sistema conta com o front end de uma aplicação de lista tarefas pessoal. Nela temos o cadastro de usuário, assim como o login e a utilização básica 
das manipulações da tarefa como a criação, edição, e deleção. A interface tem cores vibrantes que estimulam o usuário a produzir e manter o foco. Toda a aplicação foi desenvolvida em React com a utilizacao de Hooks para o controle de estado.


### 📋 Pré-requisitos

Ter instalado em seu computador o npm ou yarn

### 🔧 Instalação


1. Clone o repositório: Abra o terminal e digite o comando abaixo. 
```
git clone https://github.com/thiagolordello/todolist_backend.git
```

2. Entre no diretório criado, e instale as dependências do projeto:
```
cd To_do_List_Project-Front-End

```
```
npm install
```
ou

```
yarn install
```

3. Inicie a aplicação com o comando de script:
```
npm start
```

É importante lembrar que para o acesso ao sistema em ambiente local, é preciso que tenha a parte do backend instalada e em execução pois a todo momento a aplicação faz acessos ao banco de dados por meio das rotas do backend. Portanto se não instalou o back end, vá até ao endereço https://github.com/thiagolordello/todolist_backend e siga as instruções no readme para a instalação.



## ⚙️ Executando os testes

Os testes foram desenvolvidos com a biblioteca RTL (React Testing Library). Nesta biblioteca fazemos o teste dos componentes renderizados na aplicação. 

Para a execucao dos testes será necessário estar com aplicacao iniciada e obviamente ter sido executada a instalação do projeto no tópico acima de instalação. Caso não esteja iniciada, execute o seguinte comando de script.
```
npm start
```
Com a aplicação rodando execute o comando para a execução dos testes.
```
jest --testMatch "**/*.test.js"
```

## 🔩 Analise de cada teste




