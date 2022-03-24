Curso de Node {Alura} 💜 Biblioteca 💜 Status: **concluído 💜** 

<img src="assets/library.png">

# <h1 align="center" style="font-weight: bold">Biblioteca</h1>

## **Sumário**

- [Origem da Biblioteca](#origem-da-biblioteca)
- [Objetivo](#objetivo)
- [Funcionalidades](#funcionalidades)
- [Execução da Biblioteca](#execução-da-biblioteca)
- [A Linguagem de Programação Executada](#a-linguagem-de-programação-executada)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Bibliotecas Aplicadas](#bibliotecas-aplicadas)
- [Instruções de Instalação da Biblioteca](#instruções-de-instalação-da-biblioteca)
- [Porta](#rotas-públicas)
- [Rotas Públicas](#rotas-públicas)

<br>

<br>

## **Origem da Biblioteca**

> Pensando em melhorar meu conhecimento técnico e até mesmo fortalecer meus estudos, comecei o Curso de Node pela Alura.

<br>

>  Sempre gostei de desenvolver, por isso, criei uma API de Biblioteca para ajudar as pessoas cadastrarem e pesquisarem seus livros favoritos.

<br>


<br>


# **Objetivo**

>  A Biblioteca, possui como o seu principal objetivo a importância de ajudar pessoas realizarem uma troca, compartilharem os livros que leram com outras pessoas.

<br>

>  Para atingirmos este objetivo, realizaremos os cadastros de Autores, Livros e Usuários.

<br>

<br>

<hr>

## **Funcionalidades**

<hr>

                           Rotas Públicas

<h4 align="center" style="font-weight: bold"> {Autores} </h4>

- [X] Cadastrar;
- [X] Atualizar;
- [X] Mostrar os registrados;
- [X] Pesquisar por id;
- [X] Remover.

<h4 align="center" style="font-weight: bold"> {Livros} </h4>

- [X] Cadastrar;
- [X] Atualizar;
- [X] Mostrar os registrados;
- [X] Pesquisar por id;
- [X] Pesquisar por editora;
- [X] Remover.

<h4 align="center" style="font-weight: bold"> {Usuários} </h4>                               

- [X] Cadastrar;
- [X] Mostrar os registrados;
- [X] Remover.



<br>

<br>

##  **Execução da Biblioteca** 

 - Informando todos os autores registrados. 

 -  Informando todas os registrados. 
 
 -  Informando todos os usuários registrados. 
 
 - Informando todos os livros por editora. 


<br>

<br>

## **A Linguagem de Programação Executada**
<p align="justify"><br><img src="https://img.shields.io/badge/JavaScript-C71585?style=for-the-badge&logo=javascript&logoColor=black"></img></p>

## **Tecnologias Utilizadas**
<br>
<p  align="justify">
<a  href="https://git-scm.com/"><img  alt="Git version"  src="https://img.shields.io/badge/Git/GitHub-slateblue">
<a  href="https://nodejs.org/pt-br/"><img  alt="Node version"  src="https://img.shields.io/badge/NodeJS-violet">
<a  href="https://www.mongodb.com/cloud/atlas"><img  alt="Node version"  src="https://img.shields.io/badge/MongoDB%20Atlas-slateblue"></a>

## **Bibliotecas Aplicadas**
<br>

<p  align="justify">
<a  href="https://www.npmjs.com/"><img  alt="npm version"  src="https://img.shields.io/badge/npm-6.14.6-slateblue">
<a  href="https://expressjs.com/pt-br/"><img  alt="Express version"  src="https://img.shields.io/badge/express-4.17.1-slateblue">
<a  href="https://mongoosejs.com/"><img  alt="Mongoose version"  src="https://img.shields.io/badge/mongoose-5.10.17-slateblue">
<a  href="https://www.npmjs.com/package/nodemon"><img  alt="Nodemon version"  src="https://img.shields.io/badge/nodemon-2.0.6-violet">
</a>
</p>

<br>

<br>

## **Instruções de Instalação da Biblioteca** 

 Antes de começar, se for da sua preferência criar modificações em nosso código, será necessário realizar o download e concluir instalação do  <a href="https://code.visualstudio.com/download">Visual Studio Code</a> e <a href="https://nodejs.org/en/download/">Node.js.</a>
Para verificar se as modificações foram realizadas com sucesso, deixaremos o link para instalação de um banco de dados NoSQL, preferencialmente, o <a href="https://www.mongodb.com/try/download/community">MongoDB.</a>
Deixaremos disponíveis dois links de nossa preferência de APIs que serão capazes de testar, criar e compartilhar APIs, são eles: o   <a href="https://www.postman.com/downloads/">Postman</a> e o </a>  <a href="https://insomnia.rest/download">Insomnia.</a>

**IMPORTANTE**: Sempre escolha versão de acordo com o seu sistema, não se esqueça!



Feito isto, siga o processo abaixo:

 - Faça um fork da API Saudex:


 - Na sua área de trabalho, clique no botão esquerdo do mouse ou no direito caso você seja canhota, abra o terminal git bash here:

- No terminal Git Bash Here, faça o clone da API Saudex:

      git clone https://github.com/letidesi/library.git

- Para os que desejam criar modificações no código, crie uma nova branch:


      git checkout -b nome-da-sua-branch

- (**Obs**: Se não deseja realizar modificações, apenas pule para próxima etapa)

- Entre na pasta da Biblioteca:

      cd library

- Após entrar na pasta da API Saudex, instale todas as dependências:

      npm install ou npm i

- Depois de seguir este processo, você estará apto a executar nossa API, utilize o último comando para finalizar:

      npm start

- Os que fizeram modificações, realize o push das suas alterações e envie uma solicitação de pull request. Para mais informações de comandos, <a href="https://gist.github.com/letidesi/47454278dff1f7b666802f3cc4951292">clique aqui</a>.

<br>



##  **Rotas Públicas**

        Porta = http://localhost:7575
        
<h6>

| **_{GET}_** | Retornar |
| ------------------- | :-------------------: |
| / | Início da Biblioteca |
| /authors | Lista todos os autores cadastrados. |
| /authors/:id"| Procura o autor pelo id requisitado. |
| /books | Lista todos os livros cadastrados. |
| /books/search | Pesquisa os livros por editora. |
| /books/:id"| Procura o livro pelo id requisitado. |
| /users | Lista todos os usuários cadastrados. |

<br>

<br>

| **_{POST}_** | Retornar |
| ------------------- | :-------------------: |
| /authors| Cadastrar os autores. |
| /books| Cadastrar os livros. |
| /users| Cadastrar os usuários. |



<br>

<br>



| **_{PUT}_** | Retornar |
| ------------------- | :-------------------: |
| /authors/:id| Atualizar registro do autor. |
| /books/:id| Atualizar registro do livro. |




<br>

<br>

| **_{DELETE}_** | Retornar |
| ------------------- | :-------------------: |
| /authors| Deletar os registros dos autores. |
| /books| Deletar os registros dos livros. |
| /users| Deletar os registros dos usuários. |

</h6>

<br>

<br>
