# Contributing Guide

Thank you for your interest in contributing to `create-express-mongo-prod`! This guide will help you understand how to contribute effectively to the project.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **🐛 Bug Reports**: Report issues you encounter
- **✨ Feature Requests**: Suggest new features or improvements
- **📝 Documentation**: Improve or add documentation
- **🔧 Code Contributions**: Submit code changes
- **🧪 Testing**: Help improve test coverage
- **🌐 Translations**: Help with internationalization
- **💡 Ideas**: Share ideas for project improvement

## 🚀 Getting Started

### Before You Start

1. **Check Existing Issues**: Search for similar issues before creating new ones
2. **Read Documentation**: Familiarize yourself with the project structure
3. **Set Up Development Environment**: Follow the [Development Setup Guide](./development-setup.md)
4. **Join the Community**: Participate in discussions and ask questions

### Quick Contribution Steps

1. **Fork the Repository**
2. **Create a Feature Branch**
3. **Make Your Changes**
4. **Test Your Changes**
5. **Submit a Pull Request**

## 📋 Issue Reporting

### Before Creating an Issue

- [ ] **Search existing issues** to avoid duplicates
- [ ] **Check the documentation** for solutions
- [ ] **Try the latest version** of the package
- [ ] **Reproduce the issue** in a clean environment

### Issue Template

When creating an issue, please use this template:

```markdown
## Bug Report / Feature Request

### Description
A clear and concise description of the issue or feature request.

### Steps to Reproduce (for bugs)
1. Run command '...'
2. Select option '...'
3. See error

### Expected Behavior
A clear description of what you expected to happen.

### Actual Behavior (for bugs)
A clear description of what actually happened.

### Environment
- OS: [e.g. macOS, Windows, Linux]
- Node.js version: [e.g. 16.14.0]
- Package manager: [e.g. npm, yarn, pnpm]
- create-express-mongo-prod version: [e.g. 4.2.0]

### Additional Context
Add any other context, screenshots, or logs about the issue.
```

## 🔧 Code Contributions

### Development Workflow

1. **Fork the Repository**
   ```bash
   # Fork on GitHub first, then:
   git clone https://github.com/YOUR_USERNAME/create-express-mongo-prod.git
   cd create-express-mongo-prod
   ```

2. **Set Up Development Environment**
   ```bash
   npm install
   npm link
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make Your Changes**
   - Follow the [Code Style Guide](./code-style.md)
   - Add tests for new functionality
   - Update documentation if needed

5. **Test Your Changes**
   ```bash
   # Test the CLI
   create-express-mongo-prod
   # Test with different configurations
   
   # Test generated projects
   cd generated-project
   npm install
   npm run dev
   ```

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

7. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   # Create PR on GitHub
   ```

### Branch Naming Convention

Use descriptive branch names:

- `feature/redis-integration` - New features
- `fix/template-cloning-issue` - Bug fixes
- `docs/update-contributing-guide` - Documentation updates
- `refactor/improve-error-handling` - Code refactoring
- `test/add-integration-tests` - Test additions

### Commit Message Format

Follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(prompts): add new database option
fix(mapping): resolve branch selection logic
docs(readme): update installation instructions
test(functions): add unit tests for cloneRepo
```

## 🧪 Testing Guidelines

### Testing Requirements

Before submitting code, ensure:

- [ ] **Unit Tests**: Add tests for new functions
- [ ] **Integration Tests**: Test feature combinations
- [ ] **Manual Testing**: Test CLI with various configurations
- [ ] **Cross-platform**: Test on different operating systems

### Testing Checklist

Test these configurations:

- [ ] **TypeScript + MongoDB** (no features)
- [ ] **JavaScript + PostgreSQL** (no features)
- [ ] **TypeScript + MongoDB + GraphQL**
- [ ] **JavaScript + PostgreSQL + AWS S3**
- [ ] **All features combined**
- [ ] **Different package managers** (npm, yarn, pnpm)

### Testing Commands

```bash
# Test basic functionality
create-express-mongo-prod

# Test generated project
cd generated-project
npm install
npm run dev

# Test service integrations
docker-compose up -d
npm run test:services
```

## 📝 Documentation Contributions

### Documentation Standards

- **Clear and Concise**: Write in simple, understandable language
- **Complete**: Cover all aspects of the topic
- **Accurate**: Keep information up-to-date
- **Well-structured**: Use proper headings and formatting
- **Examples**: Include practical code examples

### Documentation Types

1. **User Documentation**: Guides for end users
2. **Developer Documentation**: Technical implementation details
3. **API Documentation**: Function and module documentation
4. **Tutorials**: Step-by-step guides
5. **Examples**: Code examples and use cases

### Documentation Checklist

- [ ] **Grammar and Spelling**: Check for errors
- [ ] **Links**: Verify all links work
- [ ] **Code Examples**: Test all code snippets
- [ ] **Screenshots**: Update if UI changes
- [ ] **Cross-references**: Link to related documentation

## 🔍 Code Review Process

### Pull Request Guidelines

1. **Clear Title**: Descriptive PR title
2. **Detailed Description**: Explain what and why
3. **Testing Steps**: How to test the changes
4. **Screenshots**: For UI changes
5. **Related Issues**: Link to relevant issues

### PR Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Test addition

## Testing
- [ ] Manual testing completed
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Cross-platform testing done

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] No breaking changes (unless intentional)
- [ ] Commit messages follow conventional format

## Related Issues
Closes #123
```

### Review Process

1. **Automated Checks**: CI/CD pipeline runs tests
2. **Code Review**: Maintainers review the code
3. **Feedback**: Address any review comments
4. **Approval**: Get approval from maintainers
5. **Merge**: Code is merged to main branch

## 🎯 Contribution Areas

### High Priority Areas

- **Bug Fixes**: Critical issues affecting functionality
- **Security Issues**: Security vulnerabilities
- **Documentation**: Missing or outdated documentation
- **Testing**: Improving test coverage
- **Performance**: Performance optimizations

### Feature Development

- **New Services**: Additional service integrations
- **Database Support**: New database options
- **Development Tools**: Enhanced development experience
- **CLI Improvements**: Better user experience
- **Template Enhancements**: Improved project templates

### Good First Issues

Look for issues labeled:
- `good first issue` - Beginner-friendly
- `help wanted` - Community help needed
- `documentation` - Documentation improvements
- `bug` - Bug fixes

## 🤝 Community Guidelines

### Code of Conduct

- **Be Respectful**: Treat all contributors with respect
- **Be Inclusive**: Welcome contributors from all backgrounds
- **Be Helpful**: Help others learn and grow
- **Be Patient**: Understand that everyone learns at their own pace

### Communication

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Pull Requests**: For code contributions
- **Documentation**: For guides and tutorials

### Getting Help

- **Read Documentation**: Check existing guides first
- **Search Issues**: Look for similar problems
- **Ask Questions**: Use GitHub Discussions
- **Join Community**: Participate in discussions

## 🏆 Recognition

### Contributor Recognition

- **Contributors List**: All contributors listed in README
- **Release Notes**: Contributors credited in releases
- **Special Thanks**: Significant contributions acknowledged
- **Badges**: Contributor badges for profiles

### Contribution Levels

- **Contributor**: Any contribution to the project
- **Maintainer**: Regular contributor with merge rights
- **Core Team**: Long-term contributor with project vision

## 📞 Contact

### Questions and Support

- **GitHub Issues**: [Create an issue](https://github.com/suryanshvermaa/create-express-mongo-prod/issues)
- **GitHub Discussions**: [Join discussions](https://github.com/suryanshvermaa/create-express-mongo-prod/discussions)
- **Email**: For private or sensitive matters

### Maintainers

- **Suryansh Verma**: Project maintainer and creator
- **Community Maintainers**: Active contributors with merge rights

---

**Thank you for contributing to create-express-mongo-prod!** 🚀

Your contributions help make this project better for everyone in the community. 