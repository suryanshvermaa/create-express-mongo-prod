# Contributor Documentation for create-express-mongo-prod

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Design](#architecture--design)
3. [Project Structure](#project-structure)
4. [Core Components](#core-components)
5. [Service Integrations](#service-integrations)
6. [Template System](#template-system)
7. [Development Workflow](#development-workflow)
8. [Adding New Features](#adding-new-features)
9. [Testing Guidelines](#testing-guidelines)
10. [Deployment & Publishing](#deployment--publishing)
11. [Troubleshooting](#troubleshooting)

## Project Overview

`create-express-mongo-prod` is a comprehensive CLI tool that scaffolds production-ready Express.js applications. It supports multiple languages, databases, and advanced features to create scalable, well-structured projects with modern development practices.

### Key Features
- **Multi-language Support**: TypeScript and JavaScript
- **Database Options**: MongoDB (Mongoose) and PostgreSQL (Prisma)
- **Advanced Features**: GraphQL, AWS S3, BullMQ, Socket.IO, Kafka, Redis
- **Package Managers**: npm, yarn, pnpm
- **Development Tools**: ESLint, Prettier, Docker, Husky

## Architecture & Design

### Core Architecture

The project follows a modular architecture with clear separation of concerns:

```
create-express-mongo-prod/
├── bin/           # CLI entry point
├── constants/     # Application constants
├── functions/     # Core business logic
├── mapping/       # Template mapping logic
├── prompts/       # CLI interaction
├── repos/         # Repository configurations
├── services/      # Additional service integrations
├── state/         # Application state management
└── examples/      # Generated project examples
```

### Design Principles

1. **Modularity**: Each component has a single responsibility
2. **Extensibility**: Easy to add new features and templates
3. **Type Safety**: Full TypeScript support for generated projects
4. **Production Ready**: Includes best practices and security measures
5. **Developer Experience**: Comprehensive tooling and documentation

## Project Structure

### Core Directories

#### `/bin`
- **Purpose**: CLI entry point and orchestration
- **Key Files**: `index.js` - Main CLI execution logic
- **Responsibilities**: 
  - Parse user input
  - Coordinate between components
  - Handle project creation flow

#### `/constants`
- **Purpose**: Centralized configuration and constants
- **Key Files**: `index.js` - All application constants
- **Constants Include**:
  - Package managers (npm, yarn, pnpm)
  - Languages (TypeScript, JavaScript)
  - ORMs (Mongoose, Prisma)
  - Features (GraphQL, AWS S3, etc.)
  - Development tools

#### `/functions`
- **Purpose**: Core business logic and operations
- **Key Files**: `index.js` - All core functions
- **Functions Include**:
  - `cloneRepo()`: Clone template repositories
  - `renameProject()`: Update project names
  - `installDependencies()`: Install packages
  - `addService()`: Add additional services
  - `resolveExtraDependencies()`: Handle feature dependencies

#### `/mapping`
- **Purpose**: Map user selections to appropriate templates
- **Key Files**: `index.js` - Template selection logic
- **Responsibilities**:
  - Determine repository based on language
  - Select appropriate branch based on features
  - Handle complex feature combinations

#### `/prompts`
- **Purpose**: CLI interaction and user input
- **Key Files**: `index.js` - All prompt configurations
- **Prompt Types**:
  - Project name input
  - Package manager selection
  - Language selection
  - ORM selection
  - Feature multi-selection

#### `/repos`
- **Purpose**: Template repository configurations
- **Key Files**: `index.js` - Repository and branch mappings
- **Structure**:
  - Repository URLs for each language
  - Branch mappings for each feature combination
  - Database-specific configurations

#### `/state`
- **Purpose**: Application state management
- **Key Files**: `values.js` - Global state object
- **State Properties**:
  - Project name
  - Selected package manager
  - Chosen language
  - Database/ORM selection
  - Selected features

#### `/services`
- **Purpose**: Additional service integrations
- **Structure**:
  ```
  services/
  ├── redis/
  │   ├── javascript/
  │   └── typescript/
  ├── kafka/
  │   ├── javascript/
  │   └── typescript/
  ├── socket.io/
  │   ├── javascript/
  │   └── typescript/
  └── bullmq/
      ├── javascript/
      └── typescript/
  ```

#### `/dockerfiles`
- **Purpose**: Docker configurations for services
- **Files**:
  - `docker-compose.redis.yml` - Redis service configuration
  - `docker-compose.kafka.yml` - Kafka service configuration

#### `/examples`
- **Purpose**: Sample generated projects
- **Structure**:
  - `simpleExpressAppJS/` - JavaScript example
  - `simpleExpressAppTS/` - TypeScript example

## Core Components

### CLI Entry Point (`bin/index.js`)

The main CLI orchestrator that:
1. Collects user input through prompts
2. Updates application state
3. Determines template repository and branch
4. Executes project creation workflow

```javascript
// Main execution flow
const projectName = await prompts(projectPrompt);
const packageManager = await prompts(packageManagerPrompt);
const language = await prompts(languagePrompt);
const orm = await prompts(ormsPrompt);
const features = await prompts(featuresPrompt);

// Update state
values.projectName = projectName.projectName;
// ... other state updates

// Execute workflow
const repo = getRepoName();
const branch = getBranchName();
await cloneRepo(repo, branch);
await resolveExtraDependencies();
await packageNameInpackageJson(values.projectName);
await installDependencies(values.projectName, values.packageManager);
```

### State Management (`state/values.js`)

Global state object that maintains user selections throughout the process:

```javascript
const values = {
    projectName: 'express-app',
    packageManager: packages.NPM,
    language: languages.JAVASCRIPT,
    databaseORM: orms.MONGOOSE,
    features: new Array(0),
}
```

### Template Mapping (`mapping/index.js`)

Complex logic to map user selections to appropriate template branches:

```javascript
// Example mapping logic
if (values.language == languages.TYPESCRIPT) {
    const typescript = repos[0];
    if (values.databaseORM == orms.MONGOOSE) {
        const mongoose = typescript.databases[0];
        if (values.features.includes(features.AWS_S3) && 
            values.features.includes(features.GRAPH_QL)) {
            return mongoose.branch.graphQL_AWS_S3;
        }
        // ... more conditions
    }
}
```

## Service Integrations

### Redis Integration

**Purpose**: Caching and session management
**Files**: `services/redis/javascript/` and `services/redis/typescript/`
**Dependencies**: `ioredis`
**Configuration**: Environment variables for connection

```javascript
// Connection setup
const redis = new Redis({
    port: 6379,
    password: process.env.REDIS_PASSWORD,
    host: "localhost",
})
```

### Kafka Integration

**Purpose**: Event streaming and message queuing
**Files**: `services/kafka/javascript/` and `services/kafka/typescript/`
**Dependencies**: `kafkajs`
**Components**:
- Producer for sending messages
- Consumer for receiving messages
- Connection management
- Topic creation scripts

### Socket.IO Integration

**Purpose**: Real-time bidirectional communication
**Files**: `services/socket.io/javascript/` and `services/socket.io/typescript/`
**Dependencies**: `socket.io`
**Features**:
- WebSocket server setup
- Event handling
- Room management
- Authentication integration

### BullMQ Integration

**Purpose**: Job queue processing
**Files**: `services/bullmq/javascript/` and `services/bullmq/typescript/`
**Dependencies**: `bullmq`
**Components**:
- Queue management
- Worker processes
- Job scheduling
- Redis integration

## Template System

### Repository Structure

The tool uses two main template repositories:
1. **TypeScript Template**: `suryanshvermaa/nodeMongoTsTemplate.git`
2. **JavaScript Template**: `suryanshvermaa/nodeMongoJsTemplate.git`

### Branch Strategy

Each repository has multiple branches for different feature combinations:

```
main                    # Basic Express setup
express-awsS3          # Express + AWS S3
graphqlWithMongo       # GraphQL + MongoDB
express-mongoose-graphql-awsS3  # Full feature set
prisma                 # Prisma + PostgreSQL
express-prisma-awsS3   # Prisma + AWS S3
express-prisma-graphql # Prisma + GraphQL
express-prisma-graphql-awsS3 # Prisma + GraphQL + AWS S3
```

### Template Requirements

Each template must include:
- Complete Express.js setup
- Database integration (MongoDB/PostgreSQL)
- Environment configuration
- Error handling middleware
- Request validation
- Development tools (ESLint, Prettier)
- Docker configuration
- Comprehensive documentation

## Development Workflow

### Local Development Setup

1. **Clone and Install**:
   ```bash
   git clone https://github.com/suryanshvermaa/create-express-mongo-prod.git
   cd create-express-mongo-prod
   npm install
   ```

2. **Link Package Locally**:
   ```bash
   npm link
   ```

3. **Test CLI**:
   ```bash
   create-express-mongo-prod
   ```

4. **Unlink When Done**:
   ```bash
   npm unlink
   ```

### Development Process

1. **Create Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**:
   - Update relevant components
   - Add tests if applicable
   - Update documentation

3. **Test Changes**:
   ```bash
   npm link
   create-express-mongo-prod
   # Test all combinations
   npm unlink
   ```

4. **Commit and Push**:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings
- **Naming**: camelCase for variables/functions, PascalCase for classes
- **Comments**: JSDoc for functions
- **File Organization**: One responsibility per file

## Adding New Features

### Adding a New Service

1. **Create Service Directory**:
   ```
   services/
   └── new-service/
       ├── javascript/
       │   ├── connection.js
       │   └── methods.js
       └── typescript/
           ├── connection.ts
           └── methods.ts
   ```

2. **Add to Constants**:
   ```javascript
   // constants/index.js
   export const features = {
       // ... existing features
       NEW_SERVICE: "new-service",
   }
   ```

3. **Add to Prompts**:
   ```javascript
   // prompts/index.js
   exports.featuresPrompt = {
       // ... existing choices
       choices: [
           // ... existing choices
           { title: "New Service", value: features.NEW_SERVICE },
       ]
   }
   ```

4. **Update Functions**:
   ```javascript
   // functions/index.js
   exports.resolveExtraDependencies = async () => {
       // ... existing logic
       if (values.features.includes(features.NEW_SERVICE)) {
           await this.addService(features.NEW_SERVICE);
           execSync(`${values.packageManager} install new-service-package`, { stdio: "inherit" });
       }
   }
   ```

### Adding a New Database/ORM

1. **Update Constants**:
   ```javascript
   // constants/index.js
   export const orms = {
       // ... existing ORMs
       NEW_ORM: "new-orm"
   }
   ```

2. **Update Prompts**:
   ```javascript
   // prompts/index.js
   exports.ormsPrompt = {
       choices: [
           // ... existing choices
           { title: "New ORM with Database", value: orms.NEW_ORM },
       ]
   }
   ```

3. **Update Repository Configuration**:
   ```javascript
   // repos/index.js
   const repos = [
       {
           // ... existing config
           databases: [
               // ... existing databases
               {
                   name: "NEW_DB",
                   branch: {
                       EXPRESS: "new-orm-main",
                       AWS_S3: "new-orm-awsS3",
                       graphQL: "new-orm-graphql",
                       graphQL_AWS_S3: "new-orm-graphql-awsS3",
                   }
               }
           ]
       }
   ]
   ```

4. **Update Mapping Logic**:
   ```javascript
   // mapping/index.js
   exports.getBranchName = () => {
       // ... existing logic
       else if (values.databaseORM == orms.NEW_ORM) {
           const newOrm = typescript.databases[2]; // Add new database
           // ... branch selection logic
       }
   }
   ```

## Testing Guidelines

### Manual Testing Checklist

Test all combinations of:
- [ ] **Languages**: TypeScript, JavaScript
- [ ] **Databases**: MongoDB (Mongoose), PostgreSQL (Prisma)
- [ ] **Features**: GraphQL, AWS S3, BullMQ, Socket.IO, Kafka, Redis
- [ ] **Package Managers**: npm, yarn, pnpm
- [ ] **Feature Combinations**: No features, single features, multiple features

### Testing Process

1. **Basic Functionality**:
   ```bash
   npm link
   create-express-mongo-prod
   # Test each prompt
   # Verify project creation
   # Check generated structure
   npm unlink
   ```

2. **Feature Integration**:
   - Test each service integration
   - Verify Docker configurations
   - Check dependency installation
   - Validate environment setup

3. **Generated Project Testing**:
   ```bash
   cd generated-project
   npm install
   npm run dev
   # Test basic functionality
   # Verify all features work
   ```

### Automated Testing (Future)

Consider implementing:
- Unit tests for core functions
- Integration tests for CLI workflow
- E2E tests for generated projects
- CI/CD pipeline for automated testing

## Deployment & Publishing

### Version Management

1. **Update Version**:
   ```bash
   npm version patch  # or minor/major
   ```

2. **Update Changelog**:
   - Document new features
   - List breaking changes
   - Update migration guides

### Publishing Process

1. **Pre-publish Checklist**:
   - [ ] All tests pass
   - [ ] Documentation updated
   - [ ] Examples tested
   - [ ] Version updated

2. **Publish to npm**:
   ```bash
   npm publish
   ```

3. **Post-publish**:
   - Create GitHub release
   - Update documentation
   - Announce on social media

### Release Strategy

- **Patch**: Bug fixes and minor improvements
- **Minor**: New features (backward compatible)
- **Major**: Breaking changes

## Troubleshooting

### Common Issues

1. **Template Repository Not Found**:
   - Check repository URLs in `repos/index.js`
   - Verify branch names exist
   - Ensure repository is public

2. **Dependency Installation Fails**:
   - Check package manager compatibility
   - Verify package names in functions
   - Test with different Node.js versions

3. **Service Integration Issues**:
   - Verify service files exist
   - Check Docker configurations
   - Validate environment variables

4. **Generated Project Issues**:
   - Test with minimal features first
   - Check template repository quality
   - Verify all dependencies are included

### Debug Mode

Add debug logging to functions:
```javascript
// functions/index.js
exports.cloneRepo = async (repo, branch) => {
    console.log(`Debug: Cloning ${repo}#${branch}`);
    // ... existing code
}
```

### Getting Help

- **GitHub Issues**: Report bugs and request features
- **GitHub Discussions**: Ask questions and share ideas
- **Documentation**: Check README and this guide
- **Examples**: Study generated project examples

## Contributing Best Practices

### Before Contributing

1. **Check Existing Issues**: Avoid duplicates
2. **Read Documentation**: Understand the project structure
3. **Test Locally**: Ensure your changes work
4. **Follow Guidelines**: Adhere to coding standards

### Pull Request Process

1. **Fork Repository**: Create your own fork
2. **Create Branch**: Use descriptive branch names
3. **Make Changes**: Follow the development workflow
4. **Test Thoroughly**: Test all affected combinations
5. **Update Documentation**: Keep docs in sync
6. **Submit PR**: Include clear description and testing steps

### Code Review Process

- **Self Review**: Test your changes before submitting
- **Peer Review**: Get feedback from other contributors
- **CI Checks**: Ensure all automated tests pass
- **Final Review**: Address all feedback before merging

---

This documentation should help you understand the project structure and contribute effectively. For additional questions, please refer to the main README or create an issue on GitHub. 