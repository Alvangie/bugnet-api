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

 BugNet API 🐞

A robust, secure, and scalable backend API for the **BugNet** issue tracking and bug reporting platform, built with NestJS, TypeScript, Prisma ORM, and PostgreSQL (Neon Serverless).

---

## Tech Stack

- **Framework:** NestJS (Node.js)
- **Language:** TypeScript
- **Database:** PostgreSQL (Neon Serverless)
- **ORM:** Prisma
- **Authentication & Authorization:** JWT (JSON Web Tokens), Passport, Bcrypt
- **Validation:** Class-Validator & Class-Transformer
- **Security:** Helmet (HTTP headers), CORS, @nestjs/throttler (Rate Limiting)
- **Interactive Documentation:** OpenAPI / Swagger

---

## Security Features

1. **Secure HTTP Headers:** Implemented via Helmet.
2. **Rate Limiting:** Protects against brute-force attacks by limiting requests per IP.
3. **CORS Enabled:** Cross-Origin Resource Sharing configured for trusted clients.
4. **Strict Validation:** Payload sanitization with `whitelist: true` and `forbidNonWhitelisted: true`.
5. **Data Ownership & Isolation:** Users can only view, edit, and delete their own bug reports and templates.

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- PostgreSQL database instance

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Alvangie/bugnet-api.git](https://github.com/Alvangie/bugnet-api.git)
   cd bugnet-api
Install dependencies:Bashnpm install
Configure environment variables:Create a .env file in the root directory:Fragmento de códigoDATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
JWT_SECRET="super_secret_access_key"
JWT_REFRESH_SECRET="super_secret_refresh_key"
JWT_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"
PORT=3000
Sync database schema:Bashnpx prisma db push
npx prisma generate
Running the ApplicationBash# Development mode (hot reload)
npm run start:dev

# Production build & start
npm run build
npm run start:prod
Interactive Swagger documentation will be available at: http://localhost:3000/api/docs📌 
API Endpoints
Authentication (/auth)

| Method | Endpoint | Description | Access
|---|---|
POST/auth/registerRegister a new userPublicPOST/auth/loginAuthenticate user and receive tokensPublicPOST/auth/refreshRenew access token using refresh tokenPublicPOST/auth/logoutInvalidate active session tokensBearer TokenGET/auth/meFetch authenticated user profileBearer Token Bug Reports (/bug-reports)MethodEndpointDescriptionAccessPOST/bug-reportsCreate a new bug reportBearer TokenGET/bug-reportsRetrieve user's bug reportsBearer TokenGET/bug-reports/:idRetrieve bug report details by IDBearer TokenPATCH/bug-reports/:idUpdate an existing bug reportBearer TokenDELETE/bug-reports/:idDelete a bug reportBearer Token Templates (/templates)MethodEndpointDescriptionAccessPOST/templatesCreate a new bug report templateBearer TokenGET/templatesList user's templatesBearer TokenGET/templates/:idRetrieve template details by IDBearer TokenPATCH/templates/:idUpdate an existing templateBearer TokenDELETE/templates/:idDelete a templateBearer Token
