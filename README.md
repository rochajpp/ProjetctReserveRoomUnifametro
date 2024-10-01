# Projeto da cadeira de Desenvolvimento de Aplicações Corporativas

Nesse projeto irei continuar uma ideia que tive com alguns amigos 
anteriormente e que foi apoiado por alguns professores que se
consiste na organização de reservas se salas de estudos na unifametro.

O projeto irá ter as seguintes funcionalidades:

- Seleção de dia e horários disponíveis para reserva.

- Salas que estão disponíveis no dia e horário serão mostrados.

- Após o aluno selecionar a salar e confirmar será salvo no
banco de dados a reserva.

- Um mensagem de confirmação será mostrada na tela após os dados
serem persistidos do banco de dados.

<br>

# Tecnologias usadas

Nesse projeto irei utilizar o Node.js para construir o servidor, MySQL como o sistema de gerenciamento do banco de dados e no front irei usar EJS, CSS e JavaScript.

No Node irei utilizar as seguintes bibliotecas:
- `express`: Framework para construção do servidor.
- `consign`: Módulo para gerenciamento de rotas e arquivos.
- `mysql2`: Módulo para criar uma conexão com o banco de dados.
- `ejs`: Módulo para configurar o view engine para arquivos .ejs.
- `dotenv`: Biblioteca para carregar variáveis de ambientes do arquivo .env.
- `body-parser`: Middleware para processar o corpo das requisições.

No projeto não irei utilizar ORMs como sequelize já que, por ser um projeto de cadeira da faculdade, optei por não utiliza muitos frameworks e fazer um projeto com tecnologias um pouco mais "cruas" e deixar o projeto de uma certa forma mais simples.

<br>

# Construção de arquivos

Os arquivos desse projeto se divide em 2 pastas:
- `app`: Onde tá armazendado todos os arquivos da aplicação.
- `config`: Onde tá armazenado todo os arquivos de configurações.
Além dessas pastas temos 2 arquivos importantes na raíz:
- `index.js`: Onde roda toda nossa aplicação.
- `.env`: Onde é armazenado as variáveis de ambientes.

<br>

## Funcionamento de index.js

O arquivo index.js, onde roda nossa aplicação, funciona da seguinte forma:

- O servidor é configurado em `config/server.js` e exportado.

- Na configuração do servidor o `consign` irá jogar todas as rotas,
controllers e models dentro da aplicação.

- Com esses arquivos no app podemos ter acesso a eles usando o app, em routes, por exemplo, chamamos o controller usando app.app.controllers.home.main(app, req, res), pois dentro da aplicação temos as pastas `app/controllers/home` e usamos main pois nos controllers tem vários exports e nesse caso estamos chamando o exports main que no controller está sendo definido como `module.exports.main = (app, req, res) => {}`.

- O index.js pega o app exportado pelo server.js já com todos os routes e controllers e inicia o servidor.

<br>

## Observações sobre o projeto

Além de eu ter citado a minha decisão de não usar o sequelize também optei por não
desenvolver, por hora, a responsividade da aplicação devido ao tempo de produção do 
trabalho, e assim focar mais na funcionalidade do projeto.

Algumas partes do projeto irá ter uma básica responsividade mas não irei focar muito
como por exemplo usando o `@media`.

Finalizando a aplicação irei analisar e decidir se desenvolvo a responsividade.

<br>

## Algumas ideias para futuras atualizações:

- Aluno ser notificado por email com as informações da reserva.
- Adição do `Sequelize` no projeto ou alguma outra ORM.

<br>

# Integrantes
1-2023125822 - João Paulo Medeiros Rocha
