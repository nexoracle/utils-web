# ENV

## Environment Variable Loader

Lightweight Module for loading environment variables from a `.env` file. 
This module supports parsing key-value pairs, handles quoted values, and transforms escaped characters.
Designed to be imported and used at the very beginning of your application before any other code accesses environment variables.

**This** module provides a simple loader function to populate `process.env` from a local `.env` file.
It's a standalone implementation with no external dependencies, using only built-in Node.js modules.

### Environment Loader

Loads environment variables from a `.env` file into `process.env`.

#### Parameters:

- **customPath** (`String`, Optional) - Custom path to the `.env` file. Default: `.env` in the current working directory.

#### Returns:

`void` - Doesn't return any value, but populates `process.env` with variables from the `.env` file.

#### Key Features:

- Supports comments (lines starting with #)
- Handles quoted values (both single and double quotes)
- Processes common escape sequences (\n, \r, \t, etc.)
- Silently skips invalid lines

#### Usage Example:

```js
// Import the module
const { env } = require("@nexoracle/utils"); // CJS
import { env } from "@nexoracle/utils"; // ESM

// Load environment variables at the top of your entry file
env.load();

// Now you can access environment variables
console.log(process.env.API_KEY);
console.log(process.env.DATABASE_URL);

// You can also specify a custom path
env.load('./config/.env.production');
```

### Sample .env File:

```
# API Configuration
API_KEY=your-secret-key
API_URL=https://api.example.com

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASS="complex@password"

# Multi-line value example
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1c4CyR...
...
-----END RSA PRIVATE KEY-----"

# Escaped characters
MESSAGE="Hello\nWorld"
```

### Important Notes:

- Always load environment variables **before** importing any modules that might use them
- The `.env` file should not be committed to version control
- For security-sensitive applications, consider using a more robust solution with encryption support