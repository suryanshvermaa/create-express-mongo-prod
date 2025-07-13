# Contributing to create-express-mongo-prod

Thank you for your interest in contributing to `create-express-mongo-prod`! This document provides guidelines and information for contributors.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Code Style](#code-style)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Feature Requests](#feature-requests)
- [Template Development](#template-development)

## Project Overview

`create-express-mongo-prod` is a CLI tool that scaffolds production-ready Express.js applications with multiple database options, advanced features, and modern development tools. The tool supports:

- **Languages**: TypeScript and JavaScript
- **Databases**: MongoDB (with Mongoose) and PostgreSQL (with Prisma)
- **Features**: GraphQL, AWS S3 integration
- **Package Managers**: npm, yarn, pnpm
- **Development Tools**: ESLint, Prettier, Docker, Husky

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm, yarn, or pnpm
- Git

### Installation

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/create-express-mongo-prod.git
   cd create-express-mongo-prod
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## Project Structure

```
create-express-mongo-prod/
├── bin/
│   └── index.js              # CLI entry point
├── constants/
│   └── index.js              # Application constants
├── functions/
│   └── index.js              # Core functionality
├── mapping/
│   └── index.js              # Template mapping logic
├── prompts/
│   └── index.js              # CLI prompts configuration
├── repos/
│   └── index.js              # Repository configurations
├── state/
│   └── values.js             # Application state
├── package.json
└── README.md
```

### Key Components

- **`bin/index.js`**: Main CLI entry point that orchestrates the project creation process
- **`prompts/index.js`**: Defines interactive prompts for user input
- **`constants/index.js`**: Centralized constants for packages, languages, ORMs, features, and tools
- **`functions/index.js`**: Core functions for cloning repos, renaming projects, and installing dependencies
- **`mapping/index.js`**: Logic for mapping user selections to appropriate repository branches
- **`repos/index.js`**: Repository configurations for different template combinations
- **`state/values.js`**: Application state management

## Development Setup

### Local Development

1. **Link the package locally**:
   ```bash
   npm link
   ```

2. **Test the CLI locally**:
   ```bash
   create-express-mongo-prod
   ```

3. **Unlink when done**:
   ```bash
   npm unlink
   ```

### Development Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test your changes:
   ```bash
   # Test the CLI locally
   npm link
   create-express-mongo-prod
   npm unlink
   ```

4. Commit your changes with a descriptive message

## Contributing Guidelines

### General Guidelines

- **Be respectful**: Treat all contributors with respect and kindness
- **Follow existing patterns**: Maintain consistency with existing code style and architecture
- **Write clear commit messages**: Use conventional commit format
- **Test your changes**: Ensure your changes work as expected
- **Document changes**: Update documentation when adding new features

### Code Style

- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Use **camelCase** for variables and functions
- Use **PascalCase** for classes and constants
- Add **JSDoc comments** for functions
- Keep functions small and focused

### Commit Message Format

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(prompts): add new database option
fix(mapping): resolve branch selection logic
docs(readme): update installation instructions
```

## Testing

### Manual Testing

1. **Test all language combinations**:
   - TypeScript + MongoDB
   - TypeScript + PostgreSQL
   - JavaScript + MongoDB
   - JavaScript + PostgreSQL

2. **Test all feature combinations**:
   - No features
   - GraphQL only
   - AWS S3 only
   - GraphQL + AWS S3

3. **Test all package managers**:
   - npm
   - yarn
   - pnpm

### Testing Checklist

- [ ] CLI prompts work correctly
- [ ] Repository cloning succeeds
- [ ] Project renaming works
- [ ] Package.json name is updated
- [ ] Dependencies install correctly
- [ ] Generated project structure is correct
- [ ] All features are properly integrated

## Pull Request Process

1. **Fork the repository**

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following the coding guidelines

4. **Test your changes** thoroughly

5. **Update documentation** if needed

6. **Commit your changes** with clear commit messages

7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** with:
   - Clear title and description
   - List of changes made
   - Testing steps
   - Screenshots (if UI changes)

9. **Wait for review** and address any feedback

### PR Review Checklist

- [ ] Code follows project style guidelines
- [ ] Changes are properly tested
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No breaking changes (unless intentional)
- [ ] All CI checks pass

## Issue Reporting

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Check the documentation** for solutions
3. **Try the latest version** of the package

### Issue Template

When creating an issue, please include:

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Run command '...'
2. Select option '...'
3. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Environment:**
- OS: [e.g. macOS, Windows, Linux]
- Node.js version: [e.g. 16.14.0]
- Package manager: [e.g. npm, yarn, pnpm]
- create-express-mongo-prod version: [e.g. 4.2.0]

**Additional context**
Add any other context about the problem here.
```

## Feature Requests

### Before Submitting a Feature Request

1. **Check if the feature already exists**
2. **Consider the scope** and complexity
3. **Think about backward compatibility**

### Feature Request Template

```markdown
**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions.

**Additional context**
Add any other context or screenshots about the feature request.
```

## Template Development

### Adding New Templates

If you want to add new template repositories:

1. **Update `repos/index.js`** with new repository information
2. **Update `mapping/index.js`** to handle new template combinations
3. **Test the new templates** thoroughly
4. **Update documentation** to reflect new options

### Template Repository Requirements

Template repositories should:

- Have a clear branch structure
- Include comprehensive documentation
- Follow best practices for the target language/framework
- Include proper error handling
- Have working examples
- Include development tools configuration

### Branch Naming Convention

Use descriptive branch names:
- `main` - Basic Express setup
- `express-awsS3` - Express with AWS S3
- `graphqlWithMongo` - GraphQL with MongoDB
- `express-mongoose-graphql-awsS3` - Full feature set

## Getting Help

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Documentation**: Check the README.md for usage instructions

## Code of Conduct

This project is committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and considerate in all interactions.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to `create-express-mongo-prod`! 🚀 