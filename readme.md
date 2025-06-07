# create-express-mongo-prod

A CLI tool to quickly scaffold a production-ready Express.js application with MongoDB integration. This tool helps you create a scalable and well-structured Express + MongoDB project with best practices and modern development setup.

## Features

- 🚀 Quick project scaffolding
- 🔧 Support for both TypeScript and JavaScript
- 🧩 Select MongoDB (Mongoose) or PostgreSQL (Prisma) at initialization
- 🧬 Optional GraphQL setup
- 📦 Multiple package manager support (npm, yarn, pnpm)
- 🏗️ Production-ready project structure
- 📝 Well-organized code structure
- 🎯 Scalable architecture
- 🎨 ESLint and Prettier configuration for consistent code style
- ✨ Automatic code formatting on save

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

1. Enter your project name
2. Choose your preferred package manager (npm, yarn, or pnpm)
3. Select your preferred language (TypeScript or JavaScript)

Note: You don't need to install the package globally. The `create` command will automatically download and execute the latest version of the package.

## Project Structure

The generated project includes:

- Express.js server setup
- MongoDB integration
- Environment configuration
- Error handling middleware
- Request validation
- Production deployment configuration
- ESLint configuration for code linting
- Prettier configuration for code formatting
- VS Code settings for automatic formatting

## Getting Started

After creating your project:

1. Navigate to your project directory:
   ```bash
   cd your-project-name
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## License

MIT © Suryansh Verma

## Author

- Suryansh Verma

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
