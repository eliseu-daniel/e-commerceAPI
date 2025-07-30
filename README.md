# 🚀 API ECOMMERCE com TypeScript - Estrutura MVC

Este projeto é uma base para criar APIs usando **Node.js**, **Express** e **TypeScript**, seguindo o padrão **MVC (Model-View-Controller)**. Já vem configurado com:

- TypeScript
- Express
- Dotenv
- CORS
- Estrutura modularizada (MVC)
- Separação de responsabilidade com `routes`, `controllers`, `models`.

---

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/eliseu-daniel/e-commerceAPI

cd ecommerce-api

2. Instale as dependências

npm install
# ou
pnpm install

3. Renomeie o arquivo .env.example para .env e coloque suas variaveis de ambiente


▶️ Executando o Projeto
Em modo desenvolvimento (com ts-node-dev):

npm run dev

Em modo produção (transpila e roda):

npm run build
npm start

📌 Scripts disponíveis

"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

🧪 Exemplo de rota

GET /api/users

📚 Tecnologias usadas

    TypeScript

    Express

    Dotenv

    CORS

    ts-node-dev