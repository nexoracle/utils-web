# Common URLs

## Validating Common URLs

The `urlValidator.isURL` function validates different types of URLs, including general URLs (http, https, file), IP addresses (IPv4, IPv6), and localhost.

#### Parameters:

- **url** (`string`): The input URL to be validated.

#### Returns:

A `boolean` indicating whether the URL is valid (`true`) or not (`false`).

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Common URLs
console.log(urlValidator.isURL("http://example.com")); // true
console.log(urlValidator.isURL("https://www.example.com")); // true
console.log(urlValidator.isURL("http://example.com:8080")); // true
console.log(urlValidator.isURL("https://www.example.com/path/to/resource")); // true
console.log(urlValidator.isURL("http://example.com/path/to/resource?query=param")); // true
console.log(urlValidator.isURL("https://www.example.com/path/to/resource?query=param#section")); // true
```

---

## IPv4 URLs

This function also supports IPv4 address-based URLs.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// IPv4 URLs
console.log(urlValidator.isURL("http://192.168.1.1")); // true
console.log(urlValidator.isURL("https://192.168.1.1:8080")); // true
console.log(urlValidator.isURL("http://192.168.1.1/path/to/resource")); // true
console.log(urlValidator.isURL("https://192.168.1.1/path/to/resource?query=param")); // true
console.log(urlValidator.isURL("http://192.168.1.1/path/to/resource?query=param#section")); // true
```

---

## IPv6 URLs

It supports IPv6 address-based URLs, enclosed in square brackets.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// IPv6 URLs
console.log(urlValidator.isURL("http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]")); // true
console.log(urlValidator.isURL("https://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]:8080")); // true
console.log(urlValidator.isURL("http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]/path/to/resource")); // true
console.log(urlValidator.isURL("https://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]/path/to/resource?query=param")); // true
console.log(urlValidator.isURL("http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]/path/to/resource?query=param#section")); // true
```

---

## Localhost URLs

`urlValidator.isURL` allows you to validate `localhost` URLs with or without ports and paths.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Localhost URLs
console.log(urlValidator.isURL("http://localhost")); // true
console.log(urlValidator.isURL("https://localhost:8080")); // true
console.log(urlValidator.isURL("http://localhost/path/to/resource")); // true
console.log(urlValidator.isURL("https://localhost/path/to/resource?query=param")); // true
console.log(urlValidator.isURL("http://localhost/path/to/resource?query=param#section")); // true
```

---

## File URLs

You can also validate `file://` URLs for local file access.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// File URLs
console.log(urlValidator.isURL("file:///path/to/file")); // true
console.log(urlValidator.isURL("file:///C:/path/to/file")); // true
console.log(urlValidator.isURL("file:///path/to/file.txt")); // true
```

---
