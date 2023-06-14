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

Para a execução dos testes será necessário estar com aplicação iniciada e obviamente ter sido executada a instalação do projeto no tópico acima de instalação. Caso não esteja iniciada, execute o seguinte comando de script.
```
npm start
```
Com a aplicação rodando execute o comando para a execução dos testes.
```
jest --testMatch "**/*.test.js"
```

## 🔩 Analise de cada teste

Todos os arquivos de teste estão no diretório raiz do projeto '/'. Estão dividos em seis arquivos com a nomenclatura final '.test.js'. Os arquivos são: login.test.js, register.test.js, tasks.test.js, editTask.test.js, formTask.test.js, e logout.test.js . 

### No arquivo ```login.test.js"```, estão os testes referentes a página de login no arquivo Login.jsx. Os casos de teste são os seguintes:

```Verifica se existem elementos da pagina "Login"``` 
Aqui verificamos se os seguintes elementos estão presentes na página: Verifica se existe o titulo Login da pagina, verifica se existe o texto 'Nome' antes do input de nome, verifica se existe o input de nome, verifica se existe o texto 'Senha' antes do input de senha, verifica se existe o elemento input da senha (ele contem o seu type = password), verifica se existe o texto no botao Login, Testa o texto no botão 'Clique aqui para criar conta.


### No arquivo ```register.test.js"```, estão os testes referentes a página de cadastro de novo usuário no arquivo Register.jsx. Os casos de teste são os seguintes:

```Verifica os elementos na pagina "register"``` 
Aqui verificamos se os seguintes elementos estão presentes na página: 

Com o get no elemento html testid 'title-page-testid' verificamos se possui o texto 'Crie sua conta'.
Com o get no elemento html testid 'txt-user-testid' verificamos se possui o texto 'Usuário'.
Com o get no elemento html testid 'inpt-user-testid' verificamos se o html possui o elemento. 
Com o get no elemento html testid 'passwd-testid' verificamos se possui o texto 'Senha'. 
Com o get no elemento html testid 'inpt-passwd-testid' verificamos se o html possui o elemento. 
Com o get no elemento html testid 'btn-Cad-testid' verificamos se possui o texto 'Cadastrar'. 
Com o get no elemento html testid 'btn-cancel-testid' verificamos se possui o texto 'Cancelar'. 


### No arquivo ```tasks.test.js"```, estão os testes referentes a página das tarefas no arquivo Tasks.jsx. Os casos de teste são os seguintes:

```Verifica se existem elementos da pagina "Login"``` 
Aqui verificamos se os seguintes elementos estão presentes na página:

Com o get no elemento html testid 'titulo' verificamos se possui o texto 'To Do List'.
Com o get no elemento html testid 'tarefa-testid' verificamos se possui o texto 'Tarefa'.
Com o get no elemento html testid 'descricao-testid' verificamos se possui o texto 'Descrição'.
Com o get no elemento html testid 'status-testid' verificamos se possui o texto 'Status'.
Com o get no elemento html testid 'data-tarefa-testid' verificamos se possui o texto 'Data'.
Com o get no elemento html testid 'editar-testid' verificamos se possui o texto 'Editar'.
Com o get no elemento html testid 'deletar-testid' verificamos se possui o texto 'Deletar'.
Com o get no elemento html testid 'btnaddtask-testid' verificamos se possui o texto 'Nova Tarefa'.


### No arquivo ```editTask.test.js"```, estão os testes referentes a página de editar as tarefas no arquivo EditTask.jsx. Os casos de teste são os seguintes:

```Verifica os elementos na pagina edit task``` 
Aqui verificamos se os seguintes elementos estão presentes na página:

Com o get no elemento html testid 'titulo-pagina-testid' verificamos se possui o texto 'Editar'.
Com o get no elemento html testid 'texto-descric-testid' verificamos se possui o texto 'Descrição'.
Com o get no elemento html testid 'input-desc-testid' verificamos se o html possui o elemento input do campo de descrição da tarefa.
Com o get no elemento html testid 'text-staus-data-testid' verificamos se possui o texto .
Com o get no elemento html testid 'select-status-datatestid' verificamos se possui o texto 'Status'.
Com o get no elemento html testid 'btnSalvar-data-testid' verificamos se possui o texto 'Salvar'.
Com o get no elemento html testid 'btnCancel-testid' verificamos se possui o texto 'Cancelar'.


### No arquivo ```formTask.test.js"```, estão os testes referentes a página de login no arquivo Login.jsx. Os casos de teste são os seguintes:

```Verifica se existem elementos da pagina "Login"``` 
Aqui verificamos se os seguintes elementos estão presentes na página:


### No arquivo ```logout.test.js"```, estão os testes referentes a página de login no arquivo Login.jsx. Os casos de teste são os seguintes:

```Verifica se existem elementos da pagina "Login"``` 
Aqui verificamos se os seguintes elementos estão presentes na página:
