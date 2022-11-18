# NestJS - Framework

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge" #vitrinedev/>
</p>

<p>Objetivo desse laboratório é construir um Backend com NestJS, e executar no Cloud Service.</p>

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
  - [Docker](#docker)
  - [Docker-Compose](#docker-compose)
* [Dominio](#dominio)
* [Criar Projeto](#criar-projeto)
* [Dependências](#dependências)
* [Entidade Jogadores](#entidade-jogadores)  
  - [Interface](#interface)
  - [Dto](#dto)
  - [Module](#module)
  - [Controller](#controller)  
  - [Service](#service) 


## Configuração

### Máquina Virtual

<p>Utilizado uma Máquina Virtual (Droplet) no serviço da Digital Ocena (Cloud Provider).</p>
<p>Recursos:</p>
<ul>
<li>Sistema Operacional Debian 10.4;</li>
<li>1 CPU;</li>
<li>2GB de memória;</li>
<li>50 GB de espaço.</li>
</ul>

Para acessar a máquina virtual:
```
ssh root@ipDaMaquinaVirtual
```
Será solicitado uma senha para acessar a máquina virtual.


### Git

<p>Instalar o Git na máquina virtual:</p>

``` bash
aot update
apt install git
```


### NVM

<p>Instalar NVM na máquina virtual para controlar as instalaçoes do Node e Npm:</p>

``` bash
apt update
apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm install node
```

<P>Checar a versão:</p>

``` bash
node -v
npm -v
```

<p>Instalar uma versão especifica do Node:</p>

``` bash
nvm install v14.21.1
```

<p>Selecionar a versão a ser utilizada:</p>

``` bash
nvm use v14.21.1
```

<p><a href="https://tecadmin.net/">Referência da instalação obtida no Site TecAdmin.net.</a></p>


### NestJs

<p>Comando para instalar o NestJS na máquina virtual:</p>

``` bash
npm i -g @nestjs/cli
```

<p>Checar a versão:</p>

``` bash
nest -v
```

### Docker

<p>Instalar o Docker na máquina virtual:</p>

``` bash
//Atualizar o repositório
apt-get update

//Download das dependências
sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common

//Verificar a integridade da chave GPG key
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

//Adicionar Docker ao repositório
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian buster stable"

//Atualizar repositório
apt-get update

//Instalar
sudo apt-get install docker-ce docker-ce-cli containerd.io

//Checar o systemctl
sudo systemctl status docker

//Verifiar a versão
docker -v
```

<a href="https://phoenixnap.com/">Referência para instalação no Site Phoenixnap.</a>


### Docker-Compose

<p>Instalar na máquina virtual</p>:

``` bash
//Download do binário
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

//Permissão para executar o binário
sudo chmod +x /usr/local/bin/docker-compose

//Checar a versão
docker-compose --version
```

<a href="https://linuxize.com/">Referência para instalação no Site Linuxize.</a>


## Dominio

<p>Desenvolvimento do backend de um aplicativo que será utilizado por jogadores amadores de :tennis:, e inclusão de um controle de ranking.</p>

<p>Estas são as entidades que serão utilizadas para o desensvolvimento da aplicação:</p>
<ul>
<li>Categorias</li>
<li>Jogadores</li>
<li>Desafios</li>
<li>Partidas</li>
<li>Rankings</li>
<li>Notificações</li>
</ul>

## Criar Projeto

<p>Comando para criar o projeto, e logo em seguida selecionar npm:</p>

``` bash
nest new api-smartranking
```

<p>Dentro do diretório src foi excluido os seguins itens:</p>
<ul>
<li>app.controller;</li>
<li>app.services;</li>
<li>test.</li>
</ul>

<p>Outra alteração realizada foi a troca da porta para 8080 no "src >> main.ts"</p>

<p>Executar o comando:</p> 

``` bash
npm run start:dev
```

<p>O cli vai retornar com erro devido as exclusões acima.</p> 

<p><b>Basta excluir as referências dos arquivos app.module.ts e main.ts aonde foi sinalizado o erro.</b></p>



## Dependências

<p>Instalações necessárias:</p>

``` bash
//Gerar id para ser utilizado no MongoDb
npm install uuid

//Mongoose
npm install @nestjs/mongoose mongoose
```

## Container

<p>O arquivo <b>Dockerfile</b> criará uma imagem do node-alpine.</p>

<p>O arquivo <b>docker-compose</b> irá construir 02 containers.</p>

<p>Um container referente ao contexto do Dockerfile, e o outro container referente ao MongoDB</p>

<p>Comandos:</p>

``` bash
//Para criar os containers
docker-compose up -d --build

//Para excluir os containers
docker-compose down

//Para visualizar os container em execução (status UP)
docker-compose ps

//Para visualizar as imagens
docker-compose images

//Caso ocorra problemas para construir o container
docker-compose logs
```

## Entidade Jogadores

### Interface

<p>Diretório do Projeo: <b>src >> jogadores >> interfaces </b></p>

<p>É a representação da tabela no MongoDB.</p>

<p>Criar arquivos:</p>

``` bash
mkdir src/jogadores/interfaces
touch jogador.interface.ts
touch jogador.schema.ts
```


### Dto

<p>Diretório do Projeo: <b>src >> jogadores >> dtos </b></p>

<p>São os dados informados pelos usuários, nem todos os campos da Interface Jogador serão informados pelo Usuário. A ideia do DTO que ele transporte somnete o que usuário for informar.</p>

``` bash
mkdir src/jogadores/dtos
touch criar-jogador.dtos.ts
```


### Module

<p>Diretório do Projeo: <b>src >> jogadores </b></p>

<p>O comando irá ira criar o arquivo <b>jogadores.module.ts</b>.</p>

<p>Será injetado o módulo Jogadores no arquivo "src >> app.module.ts".</p>

``` bash
nest g module jogadores
```

### Controller

<p>Diretório do Projeo: <b>src >> jogadores </b></p>

<p>O controller tratar as requisições HTTP.</p>

<p>A classe Controller será injetada no Modulo Jogadores.</p>

``` bash
nest g controller jogadores
```

<p>Excluir o arquivo:</p>

``` bash
cd src/jogadores
rm jogadores.controller.spec.ts
```

<p>Alterado o endpoint na classe Controller:</p>

``` ts
@Controller('api/v1/jogadores')
```

### Service

<p>Diretório do Projeo: <b>src >> jogadores </b></p>

<p>Service é um Provider pois a classe será anotada com o decorator <b>@Injectable</b>.</P>
<P>O Service irá receber requisições do Controller.</p>
<p>O Service é injetado no Module Jogadores.</p>

``` bash
nest g service jogadores
```