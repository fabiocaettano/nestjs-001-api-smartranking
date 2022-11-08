# NestJs

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge" #vitrinedev/>
</p>

## Sumário

* [Configuração](#configuração)
  - [Máquina Virtual](##máquina_virtual) 
  - [Git](##git)	
  - [NVM](#nvm)	
  - [NestJs](#nestjs)
* [Dominio](#dominio)
* [Entidades](#entidades)
* [Criar Projeto](#criar_projeto)

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

<p>[Referência de instalação](https://tecadmin.net/how-to-install-nvm-on-debian-10/)</p>


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

## Entidades

- Categorias;
- Jogadores;
- Desafios;
- Partidas;
- Rankings.
- Notificações.


## Criar o projeto

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

## Entidade Jogadores

### Criar Modulo Jogadores

O comando irá ira criar um arquivo do tipo TypeScriot jogadores.module.ts no diretório "src >> jogadores".
E irá injetar o módulo Jogadores no arquivo app.module.ts.

``` bash
nest g module jogadores
```

### Criar Controller Jogadores

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

Alterar o endpoint na classe Controller:

``` ts
@Controller('api/v1/jogadores')
```

### Classe Interface

``` bash
mkdir src/jogadores/interfaces
touch jogador.interface.ts
```

### Classe Dto

``` bash
mkdir src/jogadores/dtos
touch criar-jogador.dtos.ts
```
