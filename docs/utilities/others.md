# Core Utilities

## Random String

The `getRandom` function generates a random string with customizable options.

**Browser Support: ✅ Yes**

#### Parameters:

- **options** (optional): An object with the following properties:
  - **Alphabets** (`Boolean`, default: `true`) - Include alphabets.
  - **Numbers** (`Boolean`, default: `true`) - Include numbers.
  - **Symbols** (`Boolean`, default: `false`) - Include symbols.
  - **DateNow** (`Boolean`, default: `false`) - Include timestamp.
  - **length** (`Number`, default: `20`) - Length of the string.
  - **fileExtension** (`String`, default: `".png"`) - File extension if `attachFileExtension` is true.
  - **attachFileExtension** (`Boolean`, default: `false`) - Append file extension.

#### Returns:

A `string` representing the generated random string.

#### Example Usage:

```js
// Import the function
const { getRandom } = require("@nexoracle/utils"); // CJS
import { getRandom } from "@nexoracle/utils"; // ESM

console.log(getRandom());
// Random string with default options. Output: qDiSZn5rW1omJtRwKD9i

console.log(getRandom({ Alphabets: false, Numbers: true }));
// Only numbers. Output: 56405613431739365573

console.log(getRandom({ Alphabets: true, Numbers: true, Symbols: true, DateNow: true, length: 30 }));
// Random string of alphabets, numbers, symbols and datenow for uniqueness, length 30
// Output: aUtqI!Ot7PZt,624^i+lp>xgg8p,dm

console.log(getRandom({ Alphabets: true, fileExtension: ".txt", attachFileExtension: true }));
// Random string as filename with .txt extension. Output: wmqfeVq0gosEF1K38eO1.txt
```

---

## Invisible Long String

The `ReadMore` function generates an invisible long string (for chat tricks, etc.).

**Browser Support: ✅ Yes**

#### Parameters:

- **length** (`Number`, default: `4001`) - Length of the string.

#### Returns:

A `string` representing the invisible character repeated for the specified length.

#### Example Usage:

```js
// Import the function
const { ReadMore } = require("@nexoracle/utils"); // CJS
import { ReadMore } from "@nexoracle/utils"; // ESM

console.log(ReadMore(10)); // Output: Invisible characters
```

---

## Delay Execution

The `sleep` function delays execution for a given time.

**Browser Support: ✅ Yes**

#### Parameters:

- **ms** (`Number`, default: `3000`) - Delay time in milliseconds.

#### Returns:

A `Promise<void>` - Output after given ms delay.

#### Example Usage:

```js
// Import the function
const { sleep } = require("@nexoracle/utils"); // CJS
import { sleep } from "@nexoracle/utils"; // ESM

(async function () {
  console.log("Start");
  await sleep(); //  e.g await sleep(5000) for 5 sec delay
  console.log("End"); // Output: End (after 3s delay)
})();

async function demo() {
  console.log("Starting...");

  await sleep(2000); // Pauses for 2 seconds

  console.log("This appears after 2 seconds");
}

demo();
```

---

## Random Integer

The `randomInt` function generates a random integer in a range.

**Browser Support: ✅ Yes**

#### Parameters:

- **min** (`Number`) - Minimum value.
- **max** (`Number`) - Maximum value.

#### Returns:

A `number` representing a random integer between min and max.

#### Example Usage:

```js
// Import the function
const { randomInt } = require("@nexoracle/utils"); // CJS
import { randomInt } from "@nexoracle/utils"; // ESM

console.log(randomInt(1, 10)); // Output: 8
```

---

## Truncate String

The `truncate` function truncates a string to a maximum length.

**Browser Support: ✅ Yes**

#### Parameters:

- **text** (`String`) - Input text.
- **maxLength** (`Number`) - Maximum length.

#### Returns:

A `string` representing the truncated text with "..." if exceeded.

#### Example Usage:

```js
// Import the function
const { truncate } = require("@nexoracle/utils"); // CJS
import { truncate } from "@nexoracle/utils"; // ESM

console.log(truncate("This is a long story", 10)); // Output: This is a...
```

---

## Random Hex Color

The `randomHexColor` function generates a random hex color code.

**Browser Support: ✅ Yes**

#### Returns:

A `string` representing a hex color.

#### Example Usage:

```js
// Import the function
const { randomHexColor } = require("@nexoracle/utils"); // CJS
import { randomHexColor } from "@nexoracle/utils"; // ESM

console.log(randomHexColor()); // Output: '#3a8f2c' (random hex color)
```

---

## File Size

The `getFileSize` function retrieves formatted file size from a path, buffer, or URL.

#### Parameters:

- **path** (`String | Buffer`) - File path, URL, or Buffer.

#### Returns:

A `Promise<string>` representing the formatted file size.

#### Example Usage:

```js
// Import the function
const { getFileSize } = require("@nexoracle/utils"); // CJS
import { getFileSize } from "@nexoracle/utils"; // ESM

getFileSize("./Output.txt").then((size) => {
  console.log(size); // Output: "13.000 Bytes"
});

getFileSize("https://i.pinimg.com/474x/f6/39/66/f639663a7107b26ba08b7a98f8c84448.jpg").then((size) => {
  console.log(size); // Output: "77.206 KB"
});

const bufferSize = Buffer.from("Hello World");
getFileSize(bufferSize).then((size) => {
  console.log(size); // Output: "11.00 Bytes"
});
```

---

## Ensure Package

The `ensurePackage` function ensures a package is installed and imported. It will automatically install and use the package if not available.

#### Parameters:

- **packageName** (`String`) - Name of the package to import.
- **packageManager** (`String`, default: `"npm"`) - `'npm'` , `'yarn'`, `'bun'`, or `'pnpm'`.
- **shouldInstall** (`Boolean`, default: `true`) - Auto-install if missing.

#### Returns:

Uses the imported package if installed or installs it if not available then uses it.

#### Example Usage:

```js
// Import the function
const { ensurePackage } = require("@nexoracle/utils"); // CJS
import { ensurePackage } from "@nexoracle/utils"; // ESM

const packageName = "axios";
const packageManager = "npm";
const shouldInstall = true;

const axios = ensurePackage(packageName, packageManager, shouldInstall);
const { get } = ensurePackage("axios"); // Short

get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
  console.log(response.data.id); // Output: 1
});
```

---

## Download File

It downloads any file over https connection.

#### Parameters:

- **url** (`String`) - Url of the file to download.
- **destination** (`String`) - Destination path to save file.

#### Returns:

`Promise<void>` - Saves the file into given destination.

#### Example Usage:

```js
// Import the function
const { downloadFile } = require("@nexoracle/utils"); // CJS
import { downloadFile } from "@nexoracle/utils"; // ESM

(async () => {
  console.log(await downloadFile("https://i.pinimg.com/474x/f6/39/66/f639663a7107b26ba08b7a98f8c84448.jpg", "./image.jpg"));
  // Output: saves file with name image.png
})();
```

---

Here's the **HTML-style documentation** for both `escapeHTML` and `isValidIP`, written in the same format as your `ensurePackage` example:

---

## Escape HTML

The `escapeHTML` function escapes special characters in a string to prevent HTML injection or XSS attacks.

#### Parameters:

- **str** (`String`) – The string to escape.

#### Returns:

A new string with HTML-sensitive characters converted to their corresponding HTML entities.

#### Example Usage:

```js
// Import the function
const { escapeHTML } = require("@nexoracle/utils"); // CJS
import { escapeHTML } from "@nexoracle/utils"; // ESM

const input = `<script>alert("XSS")</script>`;
const safe = escapeHTML(input);

console.log(safe);
// Output: &lt;script&gt;alert(&quot;XSS&quot;)&lt;&#x2F;script&gt;
```
