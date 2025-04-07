# Child Process

## Process Management Functions

These functions provide utilities for executing and managing child processes in Node.js, utilizing the built-in **node:child_process** module.

**These** are refined functions for running commands synchronously, asynchronously, and interactively.
Please visit [**node:child_process**](https://nodejs.org/api/child_process.html) for more detailed documentation and usage.

---

### Run Command (Async)

Executes a shell command asynchronously and returns its output.

#### Parameters:

- **command** (`String`) - The shell command to execute.
- **cwd** (`String`, Optional) - The working directory for the command.
- **timeout** (`Number`, Optional) - Timeout in milliseconds (default: `5000ms`).

#### Returns:

`Promise<string>` - The command output.

#### Example Usage:

```js
const { runCommand } = require("@nexoracle/utils"); // CJS
import { runCommand } from "@nexoracle/utils"; // ESM

runCommand("ls")
  .then((output) => console.log(output)) // Output: provide your directory files
  .catch((err) => console.error("Error:", err));
```

---

### Run Command (Sync)

Executes a shell command synchronously and returns its output.

#### Parameters:

- **command** (`String`) - The shell command to execute.
- **cwd** (`String`, Optional) - The working directory for the command.

#### Returns:

`String | null` - The command output or `null` if an error occurs.

#### Example Usage:

```js
// Import the function
const { runCommandSync } = require("@nexoracle/utils"); // CJS
import { runCommandSync } from "@nexoracle/utils"; // ESM

const output = runCommandSync("ls");
console.log(output); // Output: provide your directory files
```

---

### Run Command (Spawn)

Executes a shell command using `spawn` and returns its output.

#### Parameters:

- **command** (`String`) - The shell command to execute.
- **args** (`String[]`) - Arguments for the command.
- **cwd** (`String`, Optional) - The working directory for the command.
- **timeout** (`Number`, Optional) - Timeout in milliseconds (default: `5000ms`).

#### Returns:

`Promise<string>` - The command output.

#### Example Usage:

```js
// Import the function
const { runSpawn } = require("@nexoracle/utils"); // CJS
import { runSpawn } from "@nexoracle/utils"; // ESM

runSpawn("node", ["-v"])
  .then((output) => console.log(output)) // Output: gives you the nodejs version if installed
  .catch((err) => console.error("Error:", err));
```

---

### Run Command (Detached)

Executes a shell command in a detached process.

#### Parameters:

- **command** (`String`) - The shell command to execute.
- **args** (`String[]`) - Arguments for the command.
- **cwd** (`String`, Optional) - The working directory for the command.

#### Example Usage:

```js
// Import the function
const { runCommandDetached } = require("@nexoracle/utils"); // CJS
import { runCommandDetached } from "@nexoracle/utils"; // ESM

runCommandDetached("node", ["server.js"]); // Output: runs this file in dettached mode
```

---

### Run Command (Interactive)

Executes a command interactively, inheriting `stdio`.

#### Parameters:

- **command** (`String`) - The shell command to execute.
- **args** (`String[]`) - Arguments for the command.
- **cwd** (`String`, Optional) - The working directory for the command.

#### Example Usage:

```js
// Import the function
const { runCommandInteractive } = require("@nexoracle/utils"); // CJS
import { runCommandInteractive } from "@nexoracle/utils"; // ESM

runCommandInteractive("npm", ["init"]); // Output: runs this command and initialize npm
```

---

### Check Command Exists

Checks if a command exists on the system.

#### Parameters:

- **command** (`String`) - The shell command to check.

#### Returns:

`Boolean` - `true` if the command exists, `false` otherwise.

#### Example Usage:

```js
// Import the function
const { checkCommandExists } = require("@nexoracle/utils"); // CJS
import { checkCommandExists } from "@nexoracle/utils"; // ESM

console.log(checkCommandExists("node")); // true or false
```

---

### Kill Process

Kills a process by its PID.

#### Parameters:

- **pid** (`Number`) - The process ID to kill.
- **signal** (`String`, Optional) - The signal to send (default: `SIGTERM`).

#### Returns:

`Boolean` - `true` if the process was killed successfully, `false` otherwise.

#### Example Usage:

```js
// Import the function
const { killProcess } = require("@nexoracle/utils"); // CJS
import { killProcess } from "@nexoracle/utils"; // ESM

killProcess(12345); // Output: kills the process with this id
```
