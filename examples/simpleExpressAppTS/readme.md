# create-express-mongo-prod

[![npm version](https://img.shields.io/npm/v/create-express-mongo-prod)](https://www.npmjs.com/package/create-express-mongo-prod)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> ⚡️ A zero-config CLI tool to scaffold a production-ready Express.js + MongoDB application in seconds.  
> Supports both **TypeScript** and **JavaScript**. Built on top of `nodeMongoTsTemplate` and other best-practice templates.

---

## 🚀 Features

- **Quick Project Scaffolding**: Start coding instantly with a full-featured Express + MongoDB setup.
- **TypeScript & JavaScript Support**: Choose your preferred language.
- **Modern Project Structure**: Organized, scalable, and ready for real-world apps.
- **Production-Ready**: Includes environment config, error handling, request validation, and deployment setup.
- **Code Quality Tools**: ESLint, Prettier, and VSCode settings for consistent, clean code.
- **Multiple Package Managers**: Works with npm, yarn, or pnpm.
- **No Global Install Needed**: Use via `npm create`, `yarn create`, or `pnpm create`.

---

## ⚡ Quick Start

### 1. Scaffold a New Project

```bash
# With npm
npm create express-mongo-prod@latest

# With yarn
yarn create express-mongo-prod

# With pnpm
pnpm create express-mongo-prod
```

The CLI will prompt you for:

- Project name
- Package manager
- Language (TypeScript or JavaScript)

---

### 2. Start Developing

```bash
cd your-project-name
npm install      # or yarn install, pnpm install
npm run dev      # or yarn dev, pnpm dev
```

---

## 📁 Project Structure

The generated project is based on [`nodeMongoTsTemplate`](https://github.com/suryanshverma/nodeMongoTsTemplate) and includes:

```
├── src/
│   ├── config/         # Environment & DB configs
│   ├── controllers/    # Route controllers
│   ├── middlewares/    # Custom and error middlewares
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routers
│   ├── utils/          # Utility functions
│   ├── index.ts          # Express app main file
├── .env.example        # Sample environment variables
├── .eslintrc.js        # ESLint config
├── .prettierrc         # Prettier config
├── tsconfig.json       # TypeScript config (if selected)
├── package.json
└── README.md
```

---

## 🧩 Key Features in the Template

- Express.js server setup
- MongoDB integration (via Mongoose)
- Environment variables with `.env` support
- Centralized error handling
- Request validation (with Joi or similar)
- Ready for deployment (Docker, Heroku, etc.)
- ESLint & Prettier for code style
- VSCode settings for auto-formatting

---

## 🛠️ Customization

After generation, you can:

- Add your own routes and models in `src/routes` and `src/models`
- Configure environment variables in `.env`
- Extend validation, error handling, and authentication as needed

---

## 🙏 Acknowledgements

- [`nodeMongoTsTemplate`](https://github.com/suryanshverma/nodeMongoTsTemplate) by **Suryansh Verma**
- Other open-source boilerplates and best practices

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to [open an issue](https://github.com/suryanshverma/create-express-mongo-prod/issues) or submit a PR.

---

## 📄 License

**MIT** © [Suryansh Verma](https://github.com/suryanshverma)
