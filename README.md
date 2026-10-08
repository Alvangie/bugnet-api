<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


# BugNet API 🐞

A robust, secure, and scalable backend API for the **BugNet** issue tracking and bug reporting platform, built with NestJS, TypeScript, Prisma ORM, and PostgreSQL (Neon Serverless).

## Project Information

- **Author:** Angie Alvarez
- **Origin Project:** Extended from Project 2 (Bug Reporting & Tracking System)
- **Course:** Backend con NestJS - Proyecto Integrador 4

---

## Live Deployment & Links

- **Repository:** [https://github.com/Alvangie/bugnet-api](https://github.com/Alvangie/bugnet-api)
- **Live API Base URL:** [https://bugnet-api.onrender.com](https://bugnet-api.onrender.com)
- **Interactive Swagger Docs:** [https://bugnet-api.onrender.com/api/docs](https://bugnet-api.onrender.com/api/docs)

---
---

## Tech Stack

| Technology | Main Use |
| --- | --- |
| NestJS | Backend framework (Node.js) |
| TypeScript | Static typing and interfaces |
| PostgreSQL | Relational database (Neon Serverless) |
| Prisma ORM | Database ORM and schema management |
| JWT / Passport | Authentication and session authorization |
| Bcrypt | Password encryption and hashing |
| Class-Validator | DTO data validation |
| Helmet | HTTP secure header protection |
| Throttler | Rate limiting and brute-force prevention |
| Swagger | Interactive OpenAPI documentation |

---

## Security Features

| Feature | Description |
| --- | --- |
| HTTP Headers | Implemented via Helmet |
| Rate Limiting | Protects against brute-force attacks by limiting requests per IP |
| CORS | Cross-Origin Resource Sharing configured for trusted clients |
| Strict Validation | Payload sanitization with whitelist enabled |
| Resource Ownership | Users can only manage their own bug reports and templates |

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- PostgreSQL database instance

### Installation & Setup

1. Clone the repository:
```bash
git clone [https://github.com/Alvangie/bugnet-api.git](https://github.com/Alvangie/bugnet-api.git)
cd bugnet-api

```

2. Install dependencies:

```bash
npm install

```

3. Configure environment variables:
Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
JWT_SECRET="super_secret_access_key"
JWT_REFRESH_SECRET="super_secret_refresh_key"
JWT_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"
PORT=3000

```

4. Sync database schema:

```bash
npx prisma db push
npx prisma generate

```

---

## Running the Application

```bash
# Development mode
npm run start:dev

# Production build & start
npm run build
npm run start:prod

```

Interactive documentation: `http://localhost:3000/api/docs`

---

##  API Endpoints

### Authentication (`/auth`)

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST | `/auth/register` | Register a new user | Public |
| POST | `/auth/login` | Authenticate user and receive tokens | Public |
| POST | `/auth/refresh` | Renew access token using refresh token | Public |
| POST | `/auth/logout` | Invalidate active session tokens | Bearer Token |
| GET | `/auth/me` | Fetch authenticated user profile | Bearer Token |

### Bug Reports (`/bug-reports`)

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST | `/bug-reports` | Create a new bug report | Bearer Token |
| GET | `/bug-reports` | Retrieve user's bug reports | Bearer Token |
| GET | `/bug-reports/:id` | Retrieve bug report details by ID | Bearer Token |
| PATCH | `/bug-reports/:id` | Update an existing bug report | Bearer Token |
| DELETE | `/bug-reports/:id` | Delete a bug report | Bearer Token |

### Templates (`/templates`)

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| POST | `/templates` | Create a new bug report template | Bearer Token |
| GET | `/templates` | List user's templates | Bearer Token |
| GET | `/templates/:id` | Retrieve template details by ID | Bearer Token |
| PATCH | `/templates/:id` | Update an existing template | Bearer Token |
| DELETE | `/templates/:id` | Delete a template | Bearer Token |

