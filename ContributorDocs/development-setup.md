# Development Setup Guide

This guide provides detailed instructions for setting up your development environment to contribute to `create-express-mongo-prod`.

## 🛠️ Prerequisites

### Required Software

- **Node.js** (v14 or higher)
  ```bash
  node --version  # Should be >= 14.0.0
  ```
- **npm** (v6 or higher) or **yarn** (v1.22 or higher) or **pnpm** (v6 or higher)
  ```bash
  npm --version   # Should be >= 6.0.0
  # or
  yarn --version  # Should be >= 1.22.0
  # or
  pnpm --version  # Should be >= 6.0.0
  ```
- **Git** (v2.20 or higher)
  ```bash
  git --version   # Should be >= 2.20.0
  ```

### Recommended Software

- **VS Code** with extensions:
  - ESLint
  - Prettier
  - GitLens
  - Auto Rename Tag
- **Docker** (for testing service integrations)
- **Postman** or **Insomnia** (for API testing)

## 🚀 Initial Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/create-express-mongo-prod.git
cd create-express-mongo-prod
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Link Package Locally

```bash
npm link
```

This creates a global symlink to your local development version.

### 4. Verify Installation

```bash
create-express-mongo-prod --version
# or
create-express-mongo-prod --help
```

## 🔧 Development Environment

### Project Structure

```
create-express-mongo-prod/
├── bin/                    # CLI entry point
├── constants/              # Application constants
├── functions/              # Core business logic
├── mapping/                # Template mapping logic
├── prompts/                # CLI prompts
├── repos/                  # Repository configurations
├── services/               # Service integrations
├── state/                  # Application state
├── dockerfiles/            # Docker configurations
├── examples/               # Generated examples
├── ContributorDocs/        # This documentation
├── package.json
└── README.md
```

### Key Development Files

| File | Purpose | Development Focus |
|------|---------|-------------------|
| `bin/index.js` | CLI entry point | Main workflow orchestration |
| `prompts/index.js` | User interaction | Prompt configuration |
| `functions/index.js` | Core operations | Business logic |
| `mapping/index.js` | Template selection | Branch mapping logic |
| `constants/index.js` | Configuration | Constants and enums |
| `repos/index.js` | Template configs | Repository management |

## 🧪 Testing Setup

### Local Testing

1. **Test Basic Functionality**:
   ```bash
   create-express-mongo-prod
   # Follow prompts and verify generated project
   ```

2. **Test Different Configurations**:
   ```bash
   # Test TypeScript + MongoDB
   create-express-mongo-prod
   # Select: typescript, mongoose, no features
   
   # Test JavaScript + PostgreSQL + GraphQL
   create-express-mongo-prod
   # Select: javascript, prisma, GraphQL
   
   # Test with all features
   create-express-mongo-prod
   # Select: typescript, mongoose, all features
   ```

3. **Test Generated Projects**:
   ```bash
   cd generated-project-name
   npm install
   npm run dev
   # Verify server starts and endpoints work
   ```

### Service Integration Testing

For testing service integrations (Redis, Kafka, etc.):

1. **Start Docker Services**:
   ```bash
   cd generated-project-name
   docker-compose up -d
   ```

2. **Test Service Connections**:
   ```bash
   # Test Redis
   npm run test:redis
   
   # Test Kafka
   npm run test:kafka
   
   # Test Socket.IO
   npm run test:socket
   ```

## 🔄 Development Workflow

### Making Changes

1. **Create Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**:
   - Edit relevant files
   - Follow code style guidelines
   - Add comments for complex logic

3. **Test Changes**:
   ```bash
   npm link
   create-express-mongo-prod
   # Test with various configurations
   npm unlink
   ```

4. **Commit Changes**:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push and Create PR**:
   ```bash
   git push origin feature/your-feature-name
   # Create Pull Request on GitHub
   ```

### Testing Checklist

Before submitting changes, ensure:

- [ ] **Basic CLI works**: All prompts function correctly
- [ ] **Template cloning**: Repositories clone successfully
- [ ] **Project generation**: Generated projects are functional
- [ ] **Dependency installation**: All packages install correctly
- [ ] **Feature integration**: Selected features work properly
- [ ] **Cross-platform**: Works on different operating systems
- [ ] **Error handling**: Graceful error handling for edge cases

## 🐛 Debugging

### Enable Debug Logging

Add debug statements to functions:

```javascript
// functions/index.js
exports.cloneRepo = async (repo, branch) => {
    console.log(`Debug: Cloning ${repo}#${branch}`);
    console.log(`Debug: Project name: ${values.projectName}`);
    // ... existing code
}
```

### Common Debug Scenarios

1. **Template Selection Issues**:
   ```javascript
   // mapping/index.js
   console.log('Debug: Language:', values.language);
   console.log('Debug: ORM:', values.databaseORM);
   console.log('Debug: Features:', values.features);
   ```

2. **Service Integration Issues**:
   ```javascript
   // functions/index.js
   console.log('Debug: Adding service:', serviceName);
   console.log('Debug: Service path:', srcServicePath);
   ```

3. **Dependency Issues**:
   ```javascript
   // functions/index.js
   console.log('Debug: Installing dependencies with:', packageManager);
   ```

### Troubleshooting Commands

```bash
# Check if package is linked correctly
npm list -g | grep create-express-mongo-prod

# Unlink and relink if needed
npm unlink
npm link

# Check Node.js and npm versions
node --version
npm --version

# Clear npm cache if needed
npm cache clean --force
```

## 📝 Code Style Guidelines

### JavaScript/Node.js Standards

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings
- **Semicolons**: Use semicolons
- **Naming**: camelCase for variables/functions, PascalCase for classes
- **Comments**: JSDoc for functions, inline comments for complex logic

### File Organization

- **One responsibility per file**
- **Clear file naming conventions**
- **Consistent import/export patterns**
- **Logical directory structure**

### Git Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🔧 IDE Configuration

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"],
  "prettier.singleQuote": true,
  "prettier.semi": true
}
```

### Recommended Extensions

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **GitLens**: Git integration
- **Auto Rename Tag**: HTML/XML tag renaming
- **Bracket Pair Colorizer**: Code readability

## 🚀 Performance Optimization

### Development Tips

1. **Use npm link efficiently**:
   ```bash
   # Link once at the start
   npm link
   
   # Unlink when done
   npm unlink
   ```

2. **Test incrementally**:
   - Test changes immediately
   - Use small test projects
   - Focus on specific features

3. **Use Docker for services**:
   - Faster than local installations
   - Consistent environment
   - Easy cleanup

## 📚 Additional Resources

### Documentation
- [Project Overview](./project-overview.md)
- [Core Components](./core-components.md)
- [Contributing Guide](./contributing.md)

### External Resources
- [Node.js Documentation](https://nodejs.org/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Git Documentation](https://git-scm.com/doc)

### Community
- [GitHub Issues](https://github.com/suryanshvermaa/create-express-mongo-prod/issues)
- [GitHub Discussions](https://github.com/suryanshvermaa/create-express-mongo-prod/discussions)

---

**Next Guide**: [Code Style Guide](./code-style.md) 