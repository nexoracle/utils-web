# Mime

## MimeType Detector

This returns all available mimetypes. You can also get a mimetype of file by providing the file extension.

### Get MimeType

Get Mimetype of any file by file extension.

#### Parameters:

- **extname** (`String`) - Extension of file.

#### Returns:

`String` - Mimetype of file.

#### Usage Example:

```js
// Import the function
const { mime } = require("@nexoracle/utils"); // CJS
import { mime } from "@nexoracle/utils"; // ESM

console.log(mime.get("ico")); // Output: image/x-icon
```

---

### Get All MimeTypes

Get All Available Mimetypes.

#### Returns:

`Object` - Object having all Mimetypes.

#### Usage Example:

```js
// Import the function
const { mime } = require("@nexoracle/utils"); // CJS
import { mime } from "@nexoracle/utils"; // ESM

console.log(mime.all()); // Output: Object of all mimes
```
