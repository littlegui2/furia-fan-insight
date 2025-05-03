# FURIA Fan Insight

Este é um app criado para o Challenge #2 - Know Your Fan da FURIA. Ele coleta dados do fã e retorna uma análise interativa.

## Scripts disponíveis

- `npm install` para instalar dependências
- `npm run dev` para rodar o projeto localmente

## Tecnologias

- React
- Tailwind CSS
- Vite

  🐺 FURIA Fan Insight
FURIA Fan Insight é uma aplicação web interativa que permite aos fãs da FURIA criarem seus perfis, responderem um formulário de análise de comportamento e visualizarem seu posicionamento no ranking da torcida.

📸 Demonstração
⚡ O projeto pode ser dividido em três partes:

Preenchimento do formulário e análise do fã

Visualização de perfil personalizado

Dashboard com ranking dos fãs FURIOSOS

🛠️ Tecnologias Utilizadas
Frontend
React + Vite

Tailwind CSS

Componentes personalizados

Backend
Node.js com Express

MySQL + mysql2

CORS e JSON middleware

📦 Instalação
🔧 Pré-requisitos
Node.js

MySQL (local ou hospedado)

🔁 Backend
Clone o repositório e entre na pasta do backend:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/furia-fan-insight.git
cd furia-fan-insight/backend
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o banco de dados:

Crie um banco chamado fanDB no MySQL.

Execute o SQL abaixo para criar a tabela:

sql
Copiar
Editar
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
(Opcional) Crie um arquivo .env com suas credenciais do banco:

env
Copiar
Editar
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=fanDB
Inicie o servidor:

bash
Copiar
Editar
node index.js
O servidor rodará na porta 3001.

💻 Frontend
Acesse a pasta frontend e instale as dependências:

bash
Copiar
Editar
cd ../frontend
npm install
Inicie o projeto:

bash
Copiar
Editar
npm run dev
A aplicação estará disponível em http://localhost:5173.

🔌 Rotas da API
POST /api/fan-profile
Cria um novo perfil de fã.

Body esperado:

json
Copiar
Editar
{
  "name": "João",
  "avatar": "",
  "team": "FURIA",
  "age": 22,
  "city": "São Paulo",
  "level": "Sempre",
  "score": 0
}
GET /api/fan-profile/:id
Retorna os dados de um fã específico pelo id.

GET /api/fan-ranking
Retorna o ranking completo de fãs, ordenado pela pontuação (score).

GET /api/test-db
Testa a conexão com o banco de dados.

💡 Funcionalidades
Criação e análise de perfis com base em frequência, humor e preferências

Armazenamento de dados persistentes em banco de dados MySQL

Ranking dinâmico com pontuação

Interface estilizada e responsiva com Tailwind

📈 Possíveis melhorias
Edição de perfil via modal ou nova página

Avatar personalizado e upload de imagem

Sistema de login para fãs

Compartilhamento social do perfil

🤝 Contribuição
Pull Requests são bem-vindos! Sinta-se à vontade para sugerir melhorias ou reportar bugs.

