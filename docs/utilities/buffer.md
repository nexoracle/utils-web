# Buffer Functions

## Buffer to JSON

The `buffertoJson` function converts a buffer containing JSON data into a JavaScript object.

#### Parameters:

- **buffer** (`Buffer`): A buffer containing valid JSON data.

#### Returns:

A `JavaScript object` parsed from the buffer.

#### Example Usage:

```js
// Import the function
const { buffertoJson } = require("@nexoracle/utils"); // CJS
import { buffertoJson } from "@nexoracle/utils"; // ESM

console.log(buffertoJson(Buffer.from('{"name": "NexOracle"}'))); // Output: { name: 'NexOracle' }
```

---

## JSON to Buffer

The `jsontoBuffer` function converts a JSON object into a buffer.

#### Parameters:

- **json** (`Object`): A JavaScript object to be converted into a buffer.

#### Returns:

A `Buffer` containing the JSON string representation.

#### Example Usage:

```js
// Import the function
const { jsontoBuffer } = require("@nexoracle/utils"); // CJS
import { jsontoBuffer } from "@nexoracle/utils"; // ESM

console.log(jsontoBuffer({ name: "NexOracle" }));
// Output: <Buffer 7b 22 6e 61 6d 65 22 3a 22 4e 65 78 4f 72 61 63 6c 65 22 7d>
```

---

## Transform the Buffer

The `transformBuffer` function applies a transformation function to modify the buffer.

#### Parameters:

- **buffer** (`Buffer`): The input buffer.
- **transformFn** (`Function`): A function that modifies the buffer.

#### Returns:

A `Buffer` after transformation.

#### Example Usage:

```js
// Import the function
const { transformBuffer } = require("@nexoracle/utils"); // CJS
import { transformBuffer } from "@nexoracle/utils"; // ESM

const transformbuffer = Buffer.from("Hello");
const transformed = transformBuffer(transformbuffer, (data) => Buffer.from(data).reverse());

console.log(transformed.toString()); // Output: olleH
```

---

## Write Buffer to File

The `bufferToFile` function writes a buffer's contents to a file.

#### Parameters:

- **buffer** (`Buffer`): The data to be written to the file.
- **filename** (`String`): The name of the output file.

#### Returns:

`file` (Writes data to the given filename).

#### Example Usage:

```js
// Import the function
const { bufferToFile } = require("@nexoracle/utils"); // CJS
import { bufferToFile } from "@nexoracle/utils"; // ESM

const writeBuffer = Buffer.from("Hello, World!");
bufferToFile(writeBuffer, "Output.txt"); // File saved as: Output.txt
```

---

## Convert to Buffer

The `toBuffer` function converts a string, object, or buffer into a buffer.

#### Parameters:

- **data** (`String | Object | Buffer`): The data to convert.

#### Returns:

A `Buffer` representation of the input data.

#### Example Usage:

```js
// Import the function
const { toBuffer } = require("@nexoracle/utils"); // CJS
import { toBuffer } from "@nexoracle/utils"; // ESM

console.log(toBuffer("hello")); // Output: <Buffer 68 65 6c 6c 6f>
```

---

## Get Buffer From Stream

The `getBufferFromStream` function reads data from a stream and returns it as a buffer.

#### Parameters:

- **stream** (`ReadableStream`): The stream containing data.

#### Returns:

A `Promise<Buffer>` resolving to the buffer containing the stream's data.

#### Example Usage:

```js
// Import the function
const { getBufferFromStream } = require("@nexoracle/utils"); // CJS
import { getBufferFromStream } from "@nexoracle/utils"; // ESM

const { Readable } = require("stream");
const stringStream = new Readable();
stringStream.push("Hello World");
stringStream.push(null);

getBufferFromStream(stringStream).then((buffer) => {
  console.log(buffer);
  // Output: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
});
```

---

## Get Stream From Buffer

The `getStreamFromBuffer` function creates a readable stream from a buffer.

#### Parameters:

- **buffer** (`Buffer`): The buffer to be converted into a stream.

#### Returns:

A `ReadableStream` containing the buffer data.

#### Example Usage:

```js
// Import the function
const { getStreamFromBuffer } = require("@nexoracle/utils"); // CJS
import { getStreamFromBuffer } from "@nexoracle/utils"; // ESM

const { Readable } = require("stream");
const buffer = Buffer.from("hello");
const stream = getStreamFromBuffer(buffer);

stream.on("data", (chunk) => console.log(chunk.toString())); // Output: hello
```
