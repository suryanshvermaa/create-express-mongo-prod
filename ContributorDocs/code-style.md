# Code Style Guide

This guide establishes coding standards and conventions for the `create-express-mongo-prod` project to ensure consistency, readability, and maintainability.

## 🎯 General Principles

### Code Quality Standards
- **Readability**: Code should be self-documenting and easy to understand
- **Consistency**: Follow established patterns throughout the codebase
- **Maintainability**: Write code that's easy to modify and extend
- **Performance**: Consider efficiency without sacrificing readability
- **Security**: Follow security best practices

### Documentation Standards
- **JSDoc**: Use JSDoc comments for all functions and classes
- **Inline Comments**: Add comments for complex logic
- **README Updates**: Keep documentation in sync with code changes

## 📝 JavaScript/Node.js Style Guide

### Formatting

#### Indentation and Spacing
```javascript
// ✅ Correct: 2 spaces for indentation
function example() {
  const value = 'test';
  if (condition) {
    return value;
  }
}

// ❌ Incorrect: 4 spaces or tabs
function example() {
    const value = 'test';
    if (condition) {
        return value;
    }
}
```

#### Line Length
- **Maximum**: 80 characters per line
- **Break long lines**: At logical points (operators, commas)
- **Use line breaks**: For better readability

```javascript
// ✅ Correct: Break long lines
const longString = 'This is a very long string that should be ' +
  'broken into multiple lines for better readability';

// ✅ Correct: Break function calls
const result = someFunction(
  param1,
  param2,
  param3
);
```

### Naming Conventions

#### Variables and Functions
```javascript
// ✅ Correct: camelCase for variables and functions
const userName = 'john';
const isActive = true;
const getUserData = () => {};

// ❌ Incorrect: snake_case or PascalCase
const user_name = 'john';
const IsActive = true;
const GetUserData = () => {};
```

#### Constants
```javascript
// ✅ Correct: UPPER_SNAKE_CASE for constants
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_ATTEMPTS = 3;

// ✅ Correct: PascalCase for exported constants
export const Packages = {
  NPM: 'npm',
  YARN: 'yarn',
  PNPM: 'pnpm'
};
```

#### Classes and Constructors
```javascript
// ✅ Correct: PascalCase for classes
class UserService {
  constructor() {
    this.users = [];
  }
}

// ✅ Correct: PascalCase for constructor functions
function DatabaseConnection() {
  this.connected = false;
}
```

### Quotes and Strings

#### String Quotes
```javascript
// ✅ Correct: Single quotes for strings
const message = 'Hello, world!';
const template = `User: ${userName}`;

// ❌ Incorrect: Double quotes (unless needed for escaping)
const message = "Hello, world!";
```

#### Template Literals
```javascript
// ✅ Correct: Use template literals for string interpolation
const greeting = `Hello, ${userName}!`;
const url = `${baseUrl}/api/users/${userId}`;

// ❌ Incorrect: String concatenation
const greeting = 'Hello, ' + userName + '!';
```

### Semicolons

```javascript
// ✅ Correct: Always use semicolons
const value = 'test';
function example() {
  return value;
}

// ❌ Incorrect: Missing semicolons
const value = 'test'
function example() {
  return value
}
```

### Functions

#### Function Declarations
```javascript
// ✅ Correct: Function declarations
function processData(data) {
  return data.map(item => item.id);
}

// ✅ Correct: Arrow functions for callbacks
const users = data.filter(user => user.active);

// ✅ Correct: Named function expressions
const processUser = function(user) {
  return user.name;
};
```

#### Function Parameters
```javascript
// ✅ Correct: Default parameters
function createUser(name, email, isActive = true) {
  return { name, email, isActive };
}

// ✅ Correct: Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

### Objects and Arrays

#### Object Literals
```javascript
// ✅ Correct: Shorthand properties
const name = 'John';
const age = 30;
const user = { name, age };

// ✅ Correct: Method shorthand
const userService = {
  getUser(id) {
    return users.find(user => user.id === id);
  }
};

// ✅ Correct: Computed properties
const propertyName = 'email';
const user = {
  [propertyName]: 'john@example.com'
};
```

#### Array Methods
```javascript
// ✅ Correct: Use array methods appropriately
const activeUsers = users.filter(user => user.active);
const userNames = users.map(user => user.name);
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// ✅ Correct: Destructuring
const [firstUser, secondUser] = users;
const { name, email } = user;
```

### Error Handling

#### Try-Catch Blocks
```javascript
// ✅ Correct: Proper error handling
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}
```

#### Error Messages
```javascript
// ✅ Correct: Descriptive error messages
if (!userId) {
  throw new Error('User ID is required');
}

if (users.length === 0) {
  throw new Error('No users found in the database');
}
```

## 📚 JSDoc Documentation

### Function Documentation
```javascript
/**
 * Clones a template repository to the specified project directory
 * @param {string} repo - The repository URL to clone
 * @param {string} branch - The branch name to checkout
 * @returns {Promise<void>} A promise that resolves when cloning is complete
 * @throws {Error} When repository cloning fails
 */
exports.cloneRepo = async (repo, branch) => {
  console.log(`\n📦 Cloning starter template...`);
  await degit(`${repo}#${branch}`).clone(values.projectName);
  console.log(`📦 Cloning template successful.\n`);
};
```

### Class Documentation
```javascript
/**
 * Manages user authentication and authorization
 * @class UserAuthService
 */
class UserAuthService {
  /**
   * Creates a new UserAuthService instance
   * @param {Object} config - Configuration options
   * @param {string} config.secretKey - JWT secret key
   * @param {number} config.expiresIn - Token expiration time in seconds
   */
  constructor(config) {
    this.secretKey = config.secretKey;
    this.expiresIn = config.expiresIn;
  }

  /**
   * Generates a JWT token for a user
   * @param {Object} user - User object
   * @param {string} user.id - User ID
   * @param {string} user.email - User email
   * @returns {string} JWT token
   */
  generateToken(user) {
    return jwt.sign(
      { id: user.id, email: user.email },
      this.secretKey,
      { expiresIn: this.expiresIn }
    );
  }
}
```

### Type Definitions
```javascript
/**
 * @typedef {Object} User
 * @property {string} id - Unique user identifier
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {boolean} active - Whether the user account is active
 * @property {Date} createdAt - Account creation timestamp
 */

/**
 * Creates a new user in the system
 * @param {User} userData - User data to create
 * @returns {Promise<User>} Created user object
 */
async function createUser(userData) {
  // Implementation
}
```

## 🔧 Project-Specific Conventions

### File Organization

#### Directory Structure
```
src/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── middlewares/     # Express middlewares
├── models/          # Data models
├── routes/          # Route definitions
├── services/        # Business logic services
├── utils/           # Utility functions
└── types/           # TypeScript type definitions
```

#### File Naming
```javascript
// ✅ Correct: kebab-case for files
user-controller.js
auth-middleware.js
database-connection.js

// ✅ Correct: camelCase for directories
controllers/
middlewares/
databaseConnection/
```

### Import/Export Patterns

#### ES6 Modules
```javascript
// ✅ Correct: Named exports
export const API_BASE_URL = 'https://api.example.com';
export function processData(data) {
  return data.map(item => item.id);
}

// ✅ Correct: Default exports
export default class UserService {
  // Implementation
}

// ✅ Correct: Import statements
import { API_BASE_URL, processData } from './utils';
import UserService from './services/user-service';
```

#### CommonJS (for Node.js)
```javascript
// ✅ Correct: Module exports
const API_BASE_URL = 'https://api.example.com';

function processData(data) {
  return data.map(item => item.id);
}

module.exports = {
  API_BASE_URL,
  processData
};

// ✅ Correct: Require statements
const { API_BASE_URL, processData } = require('./utils');
```

### CLI-Specific Conventions

#### Prompt Definitions
```javascript
// ✅ Correct: Clear prompt structure
exports.projectPrompt = {
  type: 'text',
  name: 'projectName',
  message: 'Project name: ',
  initial: 'express-app'
};

exports.languagePrompt = {
  type: 'select',
  name: 'language',
  message: 'Language: ',
  choices: [
    { title: 'JavaScript', value: languages.JAVASCRIPT },
    { title: 'TypeScript', value: languages.TYPESCRIPT }
  ],
  initial: 0
};
```

#### Function Organization
```javascript
// ✅ Correct: Group related functions
// Repository operations
exports.cloneRepo = async (repo, branch) => { /* ... */ };
exports.renameProject = async (projectName) => { /* ... */ };

// Dependency management
exports.installDependencies = (projectName, packageManager) => { /* ... */ };
exports.resolveExtraDependencies = async () => { /* ... */ };

// Service integration
exports.addService = async (serviceName) => { /* ... */ };
```

## 🧪 Testing Conventions

### Test File Organization
```javascript
// ✅ Correct: Test file naming
user-service.test.js
auth-middleware.test.js
database-connection.test.js

// ✅ Correct: Test structure
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user successfully', async () => {
      // Test implementation
    });

    it('should throw error for invalid user data', async () => {
      // Test implementation
    });
  });
});
```

### Test Naming
```javascript
// ✅ Correct: Descriptive test names
it('should return user when valid ID is provided');
it('should throw error when user ID is invalid');
it('should filter users by active status');
it('should update user email successfully');
```

## 🔍 Code Review Checklist

### Before Submitting Code
- [ ] **Formatting**: Code follows style guide
- [ ] **Naming**: Variables and functions have clear names
- [ ] **Documentation**: JSDoc comments for functions
- [ ] **Error Handling**: Proper error handling implemented
- [ ] **Testing**: Tests written for new functionality
- [ ] **Performance**: No obvious performance issues
- [ ] **Security**: No security vulnerabilities
- [ ] **Compatibility**: Works across different environments

### During Code Review
- [ ] **Readability**: Code is easy to understand
- [ ] **Maintainability**: Code is easy to modify
- [ ] **Consistency**: Follows established patterns
- [ ] **Completeness**: All requirements met
- [ ] **Edge Cases**: Handles edge cases properly

## 🛠️ Tools and Configuration

### ESLint Configuration
```json
{
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "camelcase": ["error", { "properties": "always" }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
```

### Prettier Configuration
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

## 📚 Additional Resources

### Style Guides
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Standard JS](https://standardjs.com/)

### Tools
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [JSDoc](https://jsdoc.app/) - Documentation generation

---

**Next Guide**: [Testing Guide](./testing.md) 