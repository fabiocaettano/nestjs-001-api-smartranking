# NestJS - Framework

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge" #vitrinedev/>
</p>

<p>Objetivo desse laboratório é construir um Backend com NestJS, executar no Cloud Service.</p>

<p>A base do laboratório é de um Curso da Udemy, "Node.js Microservices: NestJS, RabbitMQ and Cloud Services", minitrado pelo Diego Fernandes da Silva.</p>

<p>NestJS é um framework para desenvolivmento de aplicações backend em NodeJS.</p>

<p>Laboratório:</p>
<ul>
<li>Implementar Microserviços fazendo uso do package Nest Services;</li>
<li>Empregar Escabilidade e resiliência ao Backend, fazendo uso de um broker de mensagens;</li>
<li>Aplicar conceitos de uma arquitetura orientada a eventos;</li>
<li>Entregar a responsabilidade do processo de autenticação para um serviço seguro, escalável e de baixo custo.</li>
</ul>


## Sumário

* [Configuração](#configuração)
  - [Máquina Virtual](#máquina-virtual) 
  - [Git](#git)	
  - [NVM](#nvm)	
  - [NestJs](#nestjs)
* [Dominio](#dominio)
* [Criar Projeto](#criar-projeto)
* [Dependências](#dependências)
* [Entidades](#entidades)
  - [Jogadores](#jogadores)
    - [Module](#module)
    - [Controller](#controller)
    - [Interface](#interface)
    - [Dto](#dto)
    - [Service](#service)


## Configuração

### Máquina Virtual
<p>Utilizado uma Máquina Virtual (Droplet) no serviço da Digital Ocena (Cloud Provider).Recursos:</p>
<ul>
<li>-Sistema Operacional Debian;</li>
<li>1 CPU;</li>
<li>2GB de memória;</li>
<li>50 GB de espaço.</li>
</ul>

### Git

<p>Versionamento do código.</p>

``` bash
aot update
apt install git
```


### NVM

<p>O NVM é um gerenciador de instalação do Node.</p>

<p>Instalar NVM:</p>

``` bash
apt update
apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm install node
```

<P>Checar a versão:<p/>

``` bash
node -v
npm -v
```

<p>Instalar uma versão especifica do Node:</p>

```
nvm install v14.21.1
```

<p>Selecionar a versão a ser utilizada:</p>

``` bash
nvm use v14.21.1
```

<p>![Referência de instalação](https://tecadmin.net/how-to-install-nvm-on-debian-10/) </p>


### NestJs

<p>Comando para instalar o nestjs</p>

``` bash
npm i -g @nestjs/cli
```

<p>Checar a versão: </p>

``` bash
nest -v
```


## Dominio

<p>Desenvolvimento do backend de um aplicativo que será utilizado por jogadores amadores de :tennis:, e inclusão de um controle de ranking.</p>

## Criar Projeto

<p>Comando para criar o projeto, selecionar npm:</p>

``` bash
nest new api-smartranking
```

<p>Excluir arquivos e foldrs do diretório src:</p>
<ul>
<li>app.controller</li>
<li>app.services</li>
<li>test</li>
</ul>

<p>Executar o comando abaixo, o cli vai retornar com erro devido a exclusão acima. Basta excluir estas referências dos arquivos app.module.ts e main.ts</p>

<p>Outra alteração a ser realizada é a troca da porta para 8080.</p>

<p> Salvar e executar</p>

``` bash
npm run start:dev
```

## Dependências

<p>Gerar id para ser utilizado no MongoDb:</p>

``` bash
npm install uuid
```

## Entidades

<p>Estas são as entidades que serão utilizadas para o desensvolvimento da aplicação:</p>
<ul>
<li>Categorias</li>
<li>Jogadores</li>
<li>Desafios</li>
<li>Partidas</li>
<li>Rankings</li>
<li>Notificações</li>
</ul>


### Jogadores

#### Module

O comando irá ira criar um arquivo do tipo TypeScriot jogadores.module.ts no diretório "src >> jogadores".
E irá injetar o módulo Jogadores no arquivo app.module.ts.

``` bash
nest g module jogadores
```

#### Controller

O controller tratar as requisições HTTP.
A classe Controller será injetada no Modulo Jogadores.

``` bash
nest g controller jogadores
```

Excluir o arquivo:

``` bash
cd src/jogadores
rm jogadores.controller.spec.ts
```

Alterado o endpoint na classe Controller:

``` ts
@Controller('api/v1/jogadores')
```

#### Interface

É a representação da tabela no MongoDB.

``` bash
mkdir src/jogadores/interfaces
touch jogador.interface.ts
```

#### Dto

São os dados informados pelos usuários, nem todos os campos da Interface Jogador serão informados pelo Usuário. A ideia do DTO que ele transporte somnete o que usuário for informar.

``` bash
mkdir src/jogadores/dtos
touch criar-jogador.dtos.ts
```

#### Service

Service é um Provider pois a classe será anotada com o decorator @Injectable.
O Service irá receber requisições do Controller.
O Service é injetado no Module Jogadores.

``` bash
nest g service jogadores
```
