# create-express-mongo-prod
[![npm version](https://img.shields.io/npm/v/create-express-mongo-prod)](https://www.npmjs.com/package/create-express-mongo-prod)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A comprehensive CLI tool to quickly scaffold production-ready Express.js applications with multiple database options, advanced features, and modern development tools. This tool helps you create scalable and well-structured Express projects with best practices and enterprise-grade setup.

## Features

- 🚀 Quick project scaffolding with interactive CLI
- 🔧 Support for both TypeScript and JavaScript
- 🗄️ Multiple database support:
  - MongoDB with Mongoose ODM
  - PostgreSQL with Prisma ORM
- 🧬 Optional GraphQL setup with Apollo Server
- ☁️ AWS S3 integration for file uploads
- 📦 Multiple package manager support (npm, yarn, pnpm)
- 🏗️ Production-ready project structure
- 📝 Well-organized code architecture
- 🎯 Scalable and maintainable codebase
- 🎨 Development tools integration:
  - ESLint for code linting
  - Prettier for code formatting
  - Husky for Git hooks
  - Docker and Docker Compose support
- ✨ Automatic code formatting and linting
- 🔄 Multiple template branches for different feature combinations

## Installation & Usage

You can create a new project using any of the following commands:

Using npm:
```bash
npm create express-mongo-prod
```

Using yarn:
```bash
yarn create express-mongo-prod
```

Using pnpm:
```bash
pnpm create express-mongo-prod
```

The CLI will guide you through the following steps:

1. **Project Name**: Enter your project name
2. **Package Manager**: Choose your preferred package manager (npm, yarn, or pnpm)
3. **Language**: Select TypeScript or JavaScript
4. **Database/ORM**: Choose between:
   - Mongoose with MongoDB
   - Prisma with PostgreSQL
5. **Features** (Optional): Select additional features:
   - GraphQL with Apollo Server
   - AWS S3 integration for file uploads
6. **Development Tools** (Optional): Choose development tools:
   - ESLint for code linting
   - Prettier for code formatting
   - Dockerfile for containerization
   - Docker Compose for multi-container setup
   - Husky for Git hooks

Note: You don't need to install the package globally. The `create` command will automatically download and execute the latest version of the package.

## Available Templates

The tool provides multiple template branches based on your selections:

### TypeScript Templates
- **Main**: Basic Express + TypeScript setup
- **Express + AWS S3**: File upload capabilities
- **GraphQL**: GraphQL API with Apollo Server
- **GraphQL + AWS S3**: Full-stack GraphQL with file uploads

### JavaScript Templates
- **Main**: Basic Express + JavaScript setup
- **Express + AWS S3**: File upload capabilities
- **GraphQL**: GraphQL API with Apollo Server
- **GraphQL + AWS S3**: Full-stack GraphQL with file uploads

### Database Support
- **MongoDB**: Using Mongoose ODM with TypeScript/JavaScript
- **PostgreSQL**: Using Prisma ORM with TypeScript/JavaScript

## Project Structure

The generated project includes:

- Express.js server setup with middleware
- Database integration (MongoDB/PostgreSQL)
- Environment configuration management
- Error handling middleware
- Request validation and sanitization
- Production deployment configuration
- Development tools setup
- VS Code settings for optimal development experience
- Docker configuration for containerization
- Git hooks for code quality

## Getting Started

After creating your project:

1. Navigate to your project directory:
   ```bash
   cd your-project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## Development Tools

### Code Quality
- **ESLint**: Configured for consistent code style
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for pre-commit linting

### Containerization
- **Docker**: Containerized application setup
- **Docker Compose**: Multi-service development environment

## Version

Current version: 5.0.0

## License

MIT © Suryansh Verma

## Author

- Suryansh Verma

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.
