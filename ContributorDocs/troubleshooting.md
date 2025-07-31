# Troubleshooting Guide

This guide helps you resolve common issues you might encounter while contributing to `create-express-mongo-prod`.

## 🚨 Common Issues

### CLI Issues

#### Issue: "Command not found: create-express-mongo-prod"

**Symptoms:**
```bash
$ create-express-mongo-prod
bash: create-express-mongo-prod: command not found
```

**Causes:**
- Package not linked properly
- npm link not executed
- Global installation issues

**Solutions:**
```bash
# 1. Check if package is linked
npm list -g | grep create-express-mongo-prod

# 2. Link the package
cd /path/to/create-express-mongo-prod
npm link

# 3. Verify installation
create-express-mongo-prod --version

# 4. If still not working, try unlink and relink
npm unlink
npm link
```

#### Issue: CLI prompts not working

**Symptoms:**
- Prompts freeze or don't respond
- Invalid input handling
- Unexpected behavior

**Solutions:**
```bash
# 1. Check Node.js version
node --version  # Should be >= 14.0.0

# 2. Clear npm cache
npm cache clean --force

# 3. Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# 4. Check for conflicting global packages
npm list -g
```

### Template Repository Issues

#### Issue: Repository cloning fails

**Symptoms:**
```bash
Error: Repository not found
Error: Branch not found
Error: Network timeout
```

**Causes:**
- Repository URL is incorrect
- Branch doesn't exist
- Network connectivity issues
- Repository is private

**Solutions:**
```bash
# 1. Check repository URLs in repos/index.js
cat repos/index.js

# 2. Verify repository exists
curl -I https://github.com/suryanshvermaa/nodeMongoTsTemplate.git

# 3. Check branch names
git ls-remote --heads https://github.com/suryanshvermaa/nodeMongoTsTemplate.git

# 4. Test with different network
# Try from different location or use VPN
```

#### Issue: Template mapping errors

**Symptoms:**
```bash
Error: This orm is not exists.
Error: Repo not exists
Error: Error in language selecting
```

**Causes:**
- Invalid language/ORM combination
- Missing mapping logic
- State management issues

**Solutions:**
```javascript
// 1. Check constants/index.js for valid values
console.log('Available languages:', languages);
console.log('Available ORMs:', orms);

// 2. Verify mapping logic in mapping/index.js
// Add debug logging:
console.log('Debug: Language:', values.language);
console.log('Debug: ORM:', values.databaseORM);
console.log('Debug: Features:', values.features);
```

### Dependency Installation Issues

#### Issue: Package installation fails

**Symptoms:**
```bash
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /path/to/package.json
npm ERR! errno -2
npm ERR! enoent ENOENT: no such file or directory, open 'package.json'
```

**Causes:**
- Project directory not created properly
- Package manager issues
- Permission problems

**Solutions:**
```bash
# 1. Check if project directory exists
ls -la

# 2. Verify package.json exists
cat package.json

# 3. Check permissions
ls -la package.json

# 4. Try different package manager
yarn install
# or
pnpm install

# 5. Clear package manager cache
npm cache clean --force
# or
yarn cache clean
# or
pnpm store prune
```

#### Issue: Service dependencies not installed

**Symptoms:**
```bash
Error: Cannot find module 'ioredis'
Error: Cannot find module 'kafkajs'
Error: Cannot find module 'socket.io'
```

**Causes:**
- Service integration failed
- Dependency installation skipped
- Package manager issues

**Solutions:**
```bash
# 1. Check if service was added
ls -la src/services/

# 2. Manually install dependencies
npm install ioredis kafkajs socket.io bullmq

# 3. Check functions/index.js resolveExtraDependencies
# Verify the service installation logic

# 4. Re-run the CLI with the same configuration
```

### Generated Project Issues

#### Issue: Generated project doesn't start

**Symptoms:**
```bash
npm run dev
Error: Cannot find module './config/db'
Error: Cannot find module './routes'
```

**Causes:**
- Template repository issues
- Missing files in template
- Incorrect file structure

**Solutions:**
```bash
# 1. Check template repository
git clone https://github.com/suryanshvermaa/nodeMongoTsTemplate.git
cd nodeMongoTsTemplate
git checkout main
ls -la src/

# 2. Verify template structure
tree src/ -I node_modules

# 3. Check if template is up-to-date
git pull origin main

# 4. Report template issues
# Create issue on template repository
```

#### Issue: Database connection fails

**Symptoms:**
```bash
MongoDB connection error
PostgreSQL connection error
```

**Causes:**
- Database not running
- Incorrect connection string
- Missing environment variables

**Solutions:**
```bash
# 1. Check environment variables
cat .env

# 2. Start database services
docker-compose up -d

# 3. Test database connection
# For MongoDB:
mongosh "mongodb://localhost:27017/your-database"

# For PostgreSQL:
psql -h localhost -U postgres -d your-database

# 4. Verify connection strings in config/db.js
```

### Service Integration Issues

#### Issue: Redis connection fails

**Symptoms:**
```bash
Redis connection error
Error: Redis connection refused
```

**Solutions:**
```bash
# 1. Start Redis with Docker
docker-compose up -d redis

# 2. Check Redis configuration
cat docker-compose.yml | grep redis

# 3. Verify environment variables
echo $REDIS_PASSWORD

# 4. Test Redis connection
redis-cli -h localhost -p 6379 -a your-password ping
```

#### Issue: Kafka connection fails

**Symptoms:**
```bash
Kafka connection error
Error: Cannot connect to Kafka broker
```

**Solutions:**
```bash
# 1. Start Kafka with Docker
docker-compose up -d kafka

# 2. Check Kafka logs
docker-compose logs kafka

# 3. Verify Kafka configuration
cat docker-compose.yml | grep kafka

# 4. Test Kafka connection
# Use kafka-console-producer/consumer tools
```

#### Issue: Socket.IO not working

**Symptoms:**
```bash
WebSocket connection failed
Socket.IO connection error
```

**Solutions:**
```bash
# 1. Check Socket.IO server setup
cat src/services/socket.io/index.js

# 2. Verify client connection
# Check browser console for errors

# 3. Test Socket.IO manually
# Use Socket.IO client tools
```

## 🔧 Debugging Techniques

### Enable Debug Logging

Add debug statements to functions:

```javascript
// functions/index.js
exports.cloneRepo = async (repo, branch) => {
    console.log(`Debug: Cloning ${repo}#${branch}`);
    console.log(`Debug: Project name: ${values.projectName}`);
    console.log(`Debug: Current directory: ${process.cwd()}`);
    
    try {
        await degit(`${repo}#${branch}`).clone(values.projectName);
        console.log(`Debug: Clone successful`);
    } catch (error) {
        console.error(`Debug: Clone failed:`, error);
        throw error;
    }
};
```

### Check Application State

```javascript
// Add to any function to debug state
console.log('Debug: Current state:', {
    projectName: values.projectName,
    packageManager: values.packageManager,
    language: values.language,
    databaseORM: values.databaseORM,
    features: values.features
});
```

### Verify File Operations

```javascript
// Check if files exist
const fs = require('fs');
const path = require('path');

const filePath = path.join(values.projectName, 'package.json');
console.log(`Debug: Checking file: ${filePath}`);
console.log(`Debug: File exists: ${fs.existsSync(filePath)}`);
```

## 🐛 Environment-Specific Issues

### Windows Issues

#### Issue: Path separator problems

**Symptoms:**
```bash
Error: ENOENT: no such file or directory
```

**Solutions:**
```javascript
// Use path.join() for cross-platform compatibility
const path = require('path');
const filePath = path.join(__dirname, '..', 'services', serviceName);
```

#### Issue: Permission denied

**Solutions:**
```bash
# Run as Administrator
# Or use WSL (Windows Subsystem for Linux)

# Check file permissions
icacls filename

# Change permissions if needed
icacls filename /grant Everyone:F
```

### macOS Issues

#### Issue: Permission problems with npm link

**Solutions:**
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Or use nvm to manage Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
nvm use node
```

### Linux Issues

#### Issue: Missing dependencies

**Solutions:**
```bash
# Install build tools
sudo apt-get update
sudo apt-get install build-essential python3

# Fix npm permissions
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
```

## 📊 Performance Issues

### Slow Template Cloning

**Symptoms:**
- Template cloning takes too long
- Network timeouts

**Solutions:**
```bash
# 1. Use faster network connection
# 2. Try different Git providers
# 3. Use shallow clone
git clone --depth 1 https://github.com/user/repo.git

# 4. Cache templates locally
# Consider implementing template caching
```

### Memory Issues

**Symptoms:**
- Node.js runs out of memory
- Process crashes

**Solutions:**
```bash
# Increase Node.js memory limit
node --max-old-space-size=4096 bin/index.js

# Or set environment variable
export NODE_OPTIONS="--max-old-space-size=4096"
```

## 🔍 Getting Help

### Before Asking for Help

1. **Check this troubleshooting guide**
2. **Search existing issues** on GitHub
3. **Try the solutions above**
4. **Gather relevant information**

### Information to Include

When reporting issues, include:

- **Operating System**: Windows/macOS/Linux version
- **Node.js Version**: `node --version`
- **Package Manager**: `npm --version` or `yarn --version`
- **Error Messages**: Complete error output
- **Steps to Reproduce**: Detailed steps
- **Expected vs Actual Behavior**: Clear description
- **Environment**: Development/production, network, etc.

### Where to Get Help

- **GitHub Issues**: [Create an issue](https://github.com/suryanshvermaa/create-express-mongo-prod/issues)
- **GitHub Discussions**: [Join discussions](https://github.com/suryanshvermaa/create-express-mongo-prod/discussions)
- **Documentation**: Check other guides in this folder
- **Community**: Ask in community channels

## 📚 Additional Resources

### Useful Commands

```bash
# Check system information
node --version
npm --version
git --version
docker --version

# Check project status
git status
npm list
npm outdated

# Debug npm issues
npm config list
npm cache verify

# Check disk space
df -h
du -sh node_modules/
```

### Log Files

Check these locations for logs:
- **npm logs**: `~/.npm/_logs/`
- **Node.js logs**: Application-specific
- **Docker logs**: `docker-compose logs`
- **System logs**: `/var/log/` (Linux)

---

**Need more help?** Check the [Contributing Guide](./contributing.md) or create an issue on GitHub. 