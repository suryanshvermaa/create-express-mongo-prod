# Express.js Production-Ready Starter Template

A modern, production-ready Express.js starter template with TypeScript, ESLint, Prettier, Docker, Docker Compose, and a scalable folder structure. Designed for best practices and rapid development.

## Features

- **TypeScript** for type safety and maintainability
- **ESLint** and **Prettier** for code quality and consistent formatting
- **Docker** and **Docker Compose** for easy containerization and local development
- **Environment variable** support via `.env`
- **MongoDB** integration with Mongoose
- **Scalable folder structure**: separation of routes, controllers, models, and utilities
- **Health check endpoint** for monitoring
- **Pre-configured scripts** for development, linting, formatting, and building

## Folder Structure

```
.
├── src/
│   ├── controllers/      # Route controllers
|   ├── middlewares/        # Custom middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # Express route definitions
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility modules (DB, error handling, etc.)
│   └── index.ts          # App entry point
├── .env                  # Environment variables
├── .gitignore
├── .dockerignore
├── .prettierrc           # Prettier config
├── .prettierignore
├── eslint.config.mjs     # ESLint config
├── tsconfig.json         # TypeScript config
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Getting Started

### Installation

1. **Clone the repository:**

    ```bash
    git clone <your-repo-url>
    cd prod-project
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

    or

    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Copy `.env.example` to `.env` and fill in your values (if `.env.example` exists).
    - Example:
        ```
        PORT=3000
        MONGO_URI=mongodb://localhost:27017/mydb
        ```

### Development

Start the development server with hot-reloading:

```bash
pnpm dev
```

### Linting & Formatting

- **Lint code:** `pnpm lint`
- **Fix lint errors:** `pnpm lint:fix`
- **Format code:** `pnpm format`

### Build

Compile TypeScript to JavaScript:

```bash
pnpm build
```

### Production

Start the compiled app:

```bash
pnpm start
```

## Docker Usage

### Build and Run with Docker Compose

```bash
docker-compose up --build
```

- The app runs on [http://localhost:3000](http://localhost:3000)
- MongoDB runs on port `27017` with credentials set in `docker-compose.yml`

### Standalone Docker

Build and run the app container:

```bash
docker build -t my-express-app .
docker run -p 3000:3000 --env-file .env my-express-app
```

## API Structure

### Health Check

- **GET** `/health`  
  Returns `"healthy"` if the server is running.

### User Routes

- **Base path:** `/api/v1/`
- Example route (expand as you add features):

    - **GET** `/api/v1/`  
      (Currently mapped to `createUser` controller, adjust as needed.)

## Code Quality

- **ESLint**: See `eslint.config.mjs` for rules and TypeScript integration.
- **Prettier**: See `.prettierrc` for formatting rules.

## TypeScript

- Configured via `tsconfig.json`
- Source code in `src/`, output to `dist/`

## Environment Variables

- Managed via `.env` and `dotenv` package.
- Example variables: `PORT`, `MONGO_URI`

## Contributing

Feel free to fork, open issues, or submit PRs to improve this template!

## License

MIT
