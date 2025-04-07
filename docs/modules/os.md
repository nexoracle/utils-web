# OS

## System and Hardware Information

This module provides various utility functions to retrieve system information, manage processes, and access OS-level details in Node.js. It leverages the built-in os module to fetch data such as CPU details, memory usage, network interfaces, uptime, and process priorities.

**These** are some basic but refined functions made using built-in **node:os**.
Please visit [**node:os**](https://nodejs.org/api/os.html) for more detailed documentation and usage.

### System Information

Fetches general system details including OS type, CPU, memory, and architecture.

#### Returns:

`Object` - A detailed object containing `system` information.

#### Example:

```js
// Import the function
const { getSystemInfo } = require("@nexoracle/utils"); // CJS
import { getSystemInfo } from "@nexoracle/utils"; // ESM

console.log(getSystemInfo()); // Output: Object having the system details
```

---

### CPU Load Average

Retrieves the system's load average over 1, 5, and 15 minutes.

#### Returns:

`Array<number>` - Load average for 1, 5, and 15 minutes.

#### Example:

```js
// Import the function
const { getCpuLoad } = require("@nexoracle/utils"); // CJS
import { getCpuLoad } from "@nexoracle/utils"; // ESM

console.log(getCpuLoad()); // Example: [0.5, 0.6, 0.4]
```

---

### Network Interfaces

Returns details of network interfaces available on the system.

#### Returns:

`Object` - A mapping of `interface` names to their details.

#### Example:

```js
// Import the function
const { getNetworkInterfaces } = require("@nexoracle/utils"); // CJS
import { getNetworkInterfaces } from "@nexoracle/utils"; // ESM

console.log(getNetworkInterfaces()); // Output: Object having Network Interfaces details
```

---

### User Information

Fetches details of the current user.

#### Returns:

`Object` - Contains username, home directory, and other user-related info.

#### Example:

```js
// Import the function
const { getUserInfo } = require("@nexoracle/utils"); // CJS
import { getUserInfo } from "@nexoracle/utils"; // ESM

console.log(getUserInfo()); // Output: Object having User details
```

---

### System Uptime

Gets the system uptime in seconds.

#### Returns:

`Number` - System uptime in seconds.

#### Example:

```js
// Import the function
const { getUptime, runtime } = require("@nexoracle/utils"); // CJS
import { getUptime, runtime } from "@nexoracle/utils"; // ESM

console.log(getUptime()); // Output: 36453.718
// format the seconds into runtime
console.log(runtime(getUptime())); // Output: 10 hours, 7 minutes, 33 seconds
```

---

### Temporary Directory

Retrieves the system's default temporary directory path.

#### Returns:

`String` - Path to the temporary `directory`.

#### Example:

```js
// Import the function
const { getTempDirectory } = require("@nexoracle/utils"); // CJS
import { getTempDirectory } from "@nexoracle/utils"; // ESM

console.log(getTempDirectory()); // Output: C:\Users\Username\AppData\Local\Temp
```

---

### Get Process Priority

Retrieves the priority of a specific process.

#### Parameters:

- **pid** (`Number`, Optional) - Process ID default: 0.

#### Returns:

`Number` - The priority of the given process.

#### Example:

```js
// Import the function
const { getProcessPriority } = require("@nexoracle/utils"); // CJS
import { getProcessPriority } from "@nexoracle/utils"; // ESM

console.log(getProcessPriority()); // Output: 0
```

---

### Set Process Priority

Sets the priority of a specific process.

#### Parameters:

- **pid** (`Number`, Optional) - Process ID default: 0.
- **priority** (`Number`) - The priority value to set.

#### Returns:

`String` - Success or failure message.

#### Example:

```js
// Import the function
const { setProcessPriority } = require("@nexoracle/utils"); // CJS
import { setProcessPriority } from "@nexoracle/utils"; // ESM

console.log(setProcessPriority(0, 10)); // Output: Priority of process 0 set to 10
```
