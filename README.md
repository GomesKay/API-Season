<h1 align="center">API Season</h1>

<img src="https://github.com/user-attachments/assets/f25877eb-0b9c-4fe9-850b-e0b73004f9e1" alt="API-REST" />

<h2 align="center">🔧 Arquitetura da API</h2>

<div align="center">

  | HTTP | Rotas | Descrição |
  | --- | --- | --- |
  | `GET` | /catalog | Retornar todo o catálogo |
  | `GET` | /catalog/:id | Retorna uma série específica |
  | `POST` | /catalog | Cadastrar uma nova série |
  | `POST` | /catalog/:catalogId/season | Cadastra uma nova temporada |
  | `PUT` | /catalog/:id | Atualiza uma série específica |
  | `PUT` | /catalog/:catalogId/season/:id | Atualiza a temporada de uma série específica |
  | `DELETE` | /catalog/:id | Deletar uma série específica |
  
</div>

<h2 align="center">🚀 Tecnologias</h2>

<div align="center">

  <img title="Biome" src="https://github.com/user-attachments/assets/ca50003f-5d35-4299-9474-30b305ae07cb" alt="Biome" width="60" />&nbsp;
  <img title="PrismaORM" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="Prisma" width="60" />&nbsp;
  <img title="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" width="60" />&nbsp;
  <img title="Fastify" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" alt="Fastify" width="60" />&nbsp;
  <img title="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="60" />&nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="60" />&nbsp;
  <img title="Postman" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" width="60" />&nbsp;
  <img title="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="60" />&nbsp;
  <img title="Vitest" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg" alt="Vitest" width="60" />

</div>

<h2 align="center">💻 Projeto</h2>

<p align="center">
  A API REST é uma aplicação para gerenciar séries, permitindo a criação, leitura, atualização e exclusão (CRUD) de séries, temporadas e episódios. 
  Projetada para utilizar o <strong>Fastify</strong> como framework back-end, <strong>Prisma</strong> como ORM para integração com o banco de dados 
  <strong>PostgreSQL</strong>, e para testes automatizados escritos em <strong>Vitest</strong> e <strong>Supertest</strong>.
</p>
