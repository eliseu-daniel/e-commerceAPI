# 🚀 API ECOMMERCE com TypeScript - Estrutura MVC

Este projeto é uma base para criar APIs usando **Node.js**, **Express** e **TypeScript**, seguindo o padrão **MVC (Model-View-Controller)**. Já vem configurado com:

- TypeScript
- Express
- Dotenv
- CORS
- Estrutura modularizada (MVC)
- Separação de responsabilidade com `routes`, `controllers`, `models`
- Banco de dados PostgreSQL (via Docker)
- Prisma ORM para gerenciamento do banco

---

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/eliseu-daniel/e-commerceAPI
cd ecommerce-api
```

### 2. Instale as dependências

```bash
npm install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente

Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente. Exemplo:

```plaintext
POSTGRES_USER=postgres
POSTGRES_PASSWORD=sua_senha_segura
POSTGRES_DB=ecommerce
POSTGRES_PORT=5432
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public
```

---

## 🐳 Configuração e Execução com Docker

### Pré-requisitos
- Docker e Docker Compose instalados.

### 1. Configurar o Docker
O projeto inclui um `Dockerfile` e um `docker-compose.yml` para rodar o PostgreSQL em um container.

1. **Verifique o arquivo `.env`**: Certifique-se de que o arquivo `.env` contém as variáveis listadas acima.
2. **(Opcional) Crie um arquivo `init.sql`**: Se precisar de scripts SQL para inicializar o banco, adicione-os em `init.sql` no diretório raiz e inclua a linha abaixo no `Dockerfile`:

    ```dockerfile
    COPY ./init.sql /docker-entrypoint-initdb.d/
    ```

### 2. Iniciar o PostgreSQL com Docker Compose

```bash
docker-compose up -d --build
```

Isso cria e inicia um container PostgreSQL com as configurações do `.env`. O banco estará disponível em `localhost:5432` (ou a porta definida em `POSTGRES_PORT`).

### 3. Parar o container

Para parar e remover o container (mantendo os dados, a menos que use `-v`):

```bash
docker-compose down
# Ou, para remover também os volumes (perde os dados do banco):
docker-compose down -v
```

### 4. Verificar o container

Confirme que o container está rodando:

```bash
docker ps
```

Conecte-se ao banco para testar:

```bash
docker exec -it ecommerce-api_postgres_1 psql -U postgres -d ecommerce
```

---

## 🛠️ Migrações com Prisma

O projeto usa o Prisma ORM para gerenciar o banco de dados. Siga os passos abaixo para configurar e rodar migrações.

### 1. Instalar o Prisma (se ainda não instalado)

```bash
npm install prisma --save-dev
# ou
pnpm add prisma --save-dev
```

### 2. Inicializar o Prisma (se ainda não configurado)

Se o Prisma ainda não está configurado, inicialize-o:

```bash
npx prisma init
```

Isso cria um diretório `prisma/` com um arquivo `schema.prisma` e adiciona a variável `DATABASE_URL` ao `.env`.

### 3. Configurar o `schema.prisma`

Edite o arquivo `prisma/schema.prisma` para definir seus modelos. Exemplo básico:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

### 4. Criar e aplicar migrações

1. **Gerar a migração**:

    ```bash
    npx prisma migrate dev --name init
    ```

    Isso cria uma nova migração com base no `schema.prisma` e a aplica ao banco. O parâmetro `--name init` nomeia a migração (ex.: `init`).

2. **Aplicar migrações existentes** (se já houver migrações):

    ```bash
    npx prisma migrate deploy
    ```

### 5. Gerar o cliente Prisma

Após criar ou alterar o `schema.prisma`, gere o cliente Prisma:

```bash
npx prisma generate
```

Isso atualiza o `@prisma/client` para refletir os modelos definidos.

### 6. Testar o Prisma

Para verificar se o Prisma está funcionando, use o Prisma Studio:

```bash
npx prisma studio
```

Acesse `http://localhost:5555` no navegador para visualizar e gerenciar os dados.

---

## ▶️ Executando o Projeto

### Em modo desenvolvimento (com ts-node-dev):

```bash
npm run dev
```

### Em modo produção (transpila e roda):

```bash
npm run build
npm start
```

### Com Docker (aplicação + banco)

Se quiser rodar a aplicação Node.js junto com o PostgreSQL no Docker, adicione um serviço para a aplicação no `docker-compose.yml`. Exemplo:

```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.app
    ports:
      - "3000:3000"
    depends_on:
      - postgres
    environment:
      - DATABASE_URL=${DATABASE_URL}
    env_file:
      - .env
```

Crie um `Dockerfile.app` para a aplicação:

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📌 Scripts disponíveis

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "migrate:dev": "npx prisma migrate dev",
  "migrate:deploy": "npx prisma migrate deploy",
  "generate:prisma": "npx prisma generate",
  "studio": "npx prisma studio"
}
```

---

## 🧪 Exemplo de rota

**GET** `/api/users`

---

## 📚 Tecnologias usadas

- TypeScript
- Express
- Dotenv
- CORS
- ts-node-dev
- PostgreSQL
- Prisma
- Docker
- Docker Compose