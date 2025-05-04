# FURIA Fan Insight

Este é um app criado para o Challenge #2 - Know Your Fan da FURIA. Ele coleta dados do fã e retorna uma análise interativa.

## Scripts disponíveis

- `npm install` para instalar dependências
- `npm run dev` para rodar o projeto localmente

## 📸 Demonstração
⚡ O projeto pode ser dividido em três partes:

    -Preenchimento do formulário e análise do fã

    -Visualização de perfil personalizado

    -Dashboard com ranking dos fãs FURIOSOS

## 🛠️ Tecnologias Utilizadas

Frontend:

 - React + Vite

- Tailwind CSS

## Componentes personalizados

Backend:

  - Node.js com Express

  - MySQL + mysql2

   - CORS e JSON middleware

## 📦 Instalação
🔧 Pré-requisitos
   - Node.js

    - MySQL (local ou hospedado)/ou outro banco de dados

## 🔁 Backend
Clone o repositório e entre na pasta do backend:



Instale as dependências:

```bash
  npm install

Configure o banco de dados:

Crie um banco chamado fanDB no MySQL.

Execute o SQL abaixo para criar a tabela:

CREATE TABLE fan_profile (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  avatar TEXT,
  team VARCHAR(255),
  age INT,
  city VARCHAR(255),
  level VARCHAR(50),
  score INT
);

```
(Opcional) Crie um arquivo .env com suas credenciais do banco:
```bash
env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=fanDB
```
Inicie o servidor:

```bash
node index.js
O servidor rodará na porta 3001.
```

## 💻 Frontend
Acesse a pasta frontend e instale as dependências:

```bash
Copiar
Editar
cd ../frontend
npm install
```
Inicie o projeto:

```bash
Copiar
Editar
npm run dev
```
A aplicação estará disponível em http://localhost:5173.


## 💡 Funcionalidades
Criação e análise de perfis com base em frequência, humor e preferências

Armazenamento de dados persistentes em banco de dados MySQL

Interface estilizada e responsiva com Tailwind

## 📈 Possíveis melhorias
Edição de perfil via modal ou nova página

Ranking dinâmico com pontuação

Avatar personalizado e upload de imagem

Sistema de login para fãs

Compartilhamento social do perfil

## 🤝 Contribuição
Pull Requests são bem-vindos! Sinta-se à vontade para sugerir melhorias ou reportar bugs.

