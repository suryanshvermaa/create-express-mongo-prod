# Quick Start Guide for Contributors

This guide will help you get up and running with `create-express-mongo-prod` development in under 10 minutes.

## 🚀 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v14 or higher)
- **npm**, **yarn**, or **pnpm**
- **Git**
- A code editor (VS Code recommended)

## ⚡ Quick Setup

### 1. Clone the Repository

```bash
git clone https://github.com/suryanshvermaa/create-express-mongo-prod.git
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

### 3. Link the Package Locally

```bash
npm link
```

### 4. Test the CLI

```bash
create-express-mongo-prod
```

You should see the interactive CLI prompts. Test with a simple configuration:
- Project name: `test-project`
- Package manager: `npm`
- Language: `javascript`
- ORM: `mongoose with MongoDB`
- Features: (none selected)

### 5. Verify Generated Project

```bash
cd test-project
npm install
npm run dev
```

The server should start on port 3000. Visit `http://localhost:3000/health` to verify it's working.

## 🔧 Development Workflow

### Making Changes

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** to the relevant files

3. **Test your changes**:
   ```bash
   npm link
   create-express-mongo-prod
   # Test with different configurations
   npm unlink
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/your-feature-name
   ```

### Testing Different Configurations

Test these common combinations:

```bash
# TypeScript + MongoDB + GraphQL
create-express-mongo-prod
# Select: typescript, mongoose, GraphQL

# JavaScript + PostgreSQL + AWS S3
create-express-mongo-prod
# Select: javascript, prisma, AWS S3

# TypeScript + MongoDB + All Features
create-express-mongo-prod
# Select: typescript, mongoose, all features
```

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `bin/index.js` | CLI entry point |
| `prompts/index.js` | User interaction prompts |
| `functions/index.js` | Core business logic |
| `mapping/index.js` | Template selection logic |
| `constants/index.js` | Application constants |
| `repos/index.js` | Template repository configs |

## 🐛 Common Issues & Solutions

### Issue: "Command not found: create-express-mongo-prod"
**Solution**: Make sure you ran `npm link` in the project directory.

### Issue: Template repository not found
**Solution**: Check your internet connection and verify the repository URLs in `repos/index.js`.

### Issue: Dependencies fail to install
**Solution**: Try using a different package manager or check Node.js version compatibility.

### Issue: Generated project doesn't work
**Solution**: Check the template repository for issues or try a different feature combination.

## 🎯 Next Steps

After completing this quick start:

1. **Read the [Project Overview](./project-overview.md)** to understand the architecture
2. **Review [Development Setup](./development-setup.md)** for detailed setup instructions
3. **Check [Contributing Guide](./contributing.md)** for contribution guidelines
4. **Explore [Core Components](./core-components.md)** to understand the codebase

## 🆘 Need Help?

- **GitHub Issues**: Report bugs or request features
- **GitHub Discussions**: Ask questions and get help
- **Documentation**: Check other guides in this folder
- **Code Examples**: Look at the `examples/` directory

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Next Guide**: [Project Overview](./project-overview.md) 