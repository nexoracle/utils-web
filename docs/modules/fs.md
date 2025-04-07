# Fs

## Basic File System Functions

These functions provide an easy way to interact with the filesystem, including reading, writing, deleting files, managing directories, and monitoring file changes.

**These** are some basic but refined functions made using built-in **node:fs**.
Please visit [**node:fs**](https://nodejs.org/api/fs.html) for more detailed documentation and usage.

### Read File

Reads the content of a file synchronously.

#### Parameters:

- **filePath** (`String`) - Path to the file.

#### Returns:

`String | null` - The file content if successful, otherwise null.

#### Example Usage:

```js
// Import the function
const { readFile } = require("@nexoracle/utils"); // CJS
import { readFile } from "@nexoracle/utils"; // ESM

console.log(readFile("output.txt")); // Output: some data or null
```

---

### Write File

Writes data to a file synchronously.

#### Parameters:

- **filePath** (`String`) - Path to the file.
- **data** (`String`) - Content to write.

#### Returns:

`void`

#### Example Usage:

```js
// Import the function
const { writeFile } = require("@nexoracle/utils"); // CJS
import { writeFile } from "@nexoracle/utils"; // ESM

writeFile("example.txt", "Hello, world!");
console.log("file saved with given data"); // Output: saves file with given data
```

---

### Append to File

Adds data at the end of an existing file.

#### Parameters:

- **filePath** (`String`) - Path to the file.
- **data** (`String`) - Content to append.

#### Returns:

`void`

#### Example Usage:

```js
// Import the function
const { appendToFile } = require("@nexoracle/utils"); // CJS
import { appendToFile } from "@nexoracle/utils"; // ESM

appendToFile("example.txt", "some new  data");
console.log("file over written"); // Output: over writes the file content with given data
```

---

### Delete File

Removes a file from the filesystem.

#### Parameters:

- **filePath** (`String`) - Path to the file.

#### Returns:

`void`

#### Example Usage:

```js
// Import the function
const { deleteFile } = require("@nexoracle/utils"); // CJS
import { deleteFile } from "@nexoracle/utils"; // ESM

deleteFile("example.txt"); // Output: deletes file
console.log("File deleted!");
```

---

### Check If File Exists

Verifies if a file exists at a given path.

#### Parameters:

- **filePath** (`String`) - Path to the file.

#### Returns:

`Boolean` - `true` if file exists, otherwise `false`.

#### Example Usage:

```js
// Import the function
const { fileExists } = require("@nexoracle/utils"); // CJS
import { fileExists } from "@nexoracle/utils"; // ESM

if (fileExists("example.txt")) {
  console.log("File exists!");
} else {
  console.log("File not found!");
}
```

---

### Create Directory

Creates a new directory, including nested ones.

#### Parameters:

- **dirPath** (`String`) - Path of the directory.

#### Returns:

`void`

#### Example Usage:

```js
// Import the function
const { createDirectory } = require("@nexoracle/utils"); // CJS
import { createDirectory } from "@nexoracle/utils"; // ESM

createDirectory("new-folder"); // Output: create folder with given name
console.log("Directory created!");
```

---

### Remove Directory

Deletes an empty directory.

#### Parameters:

- **dirPath** (`String`) - Path of the directory.

#### Returns:

`void`

#### Example Usage:

```js
// Import the function
const { removeDirectory } = require("@nexoracle/utils"); // CJS
import { removeDirectory } from "@nexoracle/utils"; // ESM

removeDirectory("new-folder"); // Output: removes folder
console.log("Directory removed!");
```

---

### List Files in Directory

Gets a list of files in a directory.

#### Parameters:

- **dirPath** (`String`) - Path of the directory.

#### Returns:

`String[] | null` - `Array` of file names or `null` if an error occurs.

#### Example Usage:

```js
// Import the function
const { listFiles } = require("@nexoracle/utils"); // CJS
import { listFiles } from "@nexoracle/utils"; // ESM

console.log(listFiles("assets")); // Output: list of all files of folder
```

### Get File Stats

Fetches details about a file (size, created date, etc.).

#### Parameters:

- **filePath** (`String`) - Path of the file.

#### Returns:

`fs.Stats | null` - File stats object.

#### Example Usage:

```js
// Import the function
const { getFileStats } = require("@nexoracle/utils"); // CJS
import { getFileStats } from "@nexoracle/utils"; // ESM

console.log(getFileStats("output.txt")); // Output: object having file states
```

---

### Rename or Move File

Renames or moves a file to a new location.

#### Parameters:

- **oldPath** (`String`) - Current file path.
- **newPath** (`String`) - New file path.

#### Returns:

`void`

#### Example Usage:

```js
// Import the function
const { renameFile } = require("@nexoracle/utils"); // CJS
import { renameFile } from "@nexoracle/utils"; // ESM

renameFile("output.txt", "renamed.txt");
console.log("File renamed!"); // Output: rename of moves the file
```

---

### Copy File

Creates a duplicate of a file.

#### Parameters:

- **source** (`String`) - Path of the original file.
- **destination** (`String`) - Path where the file should be copied.

#### Returns:

`void`

#### Example Usage:

```js
// Import the function
const { copyFile } = require("@nexoracle/utils"); // CJS
import { copyFile } from "@nexoracle/utils"; // ESM

copyFile("renamed.txt", "destination.txt");
console.log("File copied!"); // Output: copy the content of file and make its copy
```

---

### Watch File

Monitors a file and triggers a callback when it changes.

#### Parameters:

- **filePath** (`String`) - Path to the file.
- **callback** (`Function`) - Function executed when file changes.

#### Returns:

`void`

#### Example Usage:

##### Refer to [this page](/docs/utilities/date-and-time.md) for the date & time format.

```js
// Import the function
const { watchFile, getDate, getTime } = require("@nexoracle/utils"); // CJS
import { watchFile, getDate, getTime } from "@nexoracle/utils"; // ESM

watchFile("renamed.txt", (curr, prev) => {
  console.log("File modified:", curr.mtime);
  // Output: ISO date when the file is modified
});

// format the ISO date to human readable
watchFile("renamed.txt", (curr, prev) => {
  console.log("File modified:", getDate(curr.mtime), getTime(curr.mtime));
  // Output:formated date & time when the file is modified
});
```

---

### Stop Watching a File

Stops monitoring a file.

#### Parameters:

- **filePath** (`String`) - Path to the file.

#### Returns:

`void`

#### Example Usage:

```js
// Import the function
const { unwatchFile } = require("@nexoracle/utils"); // CJS
import { unwatchFile } from "@nexoracle/utils"; // ESM

unwatchFile("example.txt"); // Output: stop watching a file
console.log("Stopped watching file!");
```

---

### Get Absolute Path

Returns the absolute path of a file.

#### Parameters:

- **relativePath** (`String`) - Relative path of the file.

#### Returns:

`String` - Absolute file path.

#### Example Usage:

```js
// Import the function
const { getAbsolutePath } = require("@nexoracle/utils"); // CJS
import { getAbsolutePath } from "@nexoracle/utils"; // ESM

console.log(getAbsolutePath("example.txt")); // Output: full path of file
```
