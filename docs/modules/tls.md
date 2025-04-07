# TLS

## TLS/SSL Certificate Toolkit

Lightweight utilities for real-time TLS certificate inspection and validation.
Performs handshake checks, extracts full certificate details, and verifies expiry status -
handling both raw domains and protocol-prefixed URLs automatically.

**These** are some basic but refined functions made using built-in **node:tls**.
Please visit [**node:tls**](https://nodejs.org/api/tls.html) for more detailed documentation and usage.

### TLS Handshake

Performs basic TLS handshake to verify server support TLS.

#### Parameters:

- **hostname** (`String`) - Domain name (with or without protocol).
- **port** (`Number`, Optional) - Port to connect to, default: `443`.

#### Returns:

`Promise<boolean>` - `true` if TLS handshake succeeds, otherwise `false`.

#### Usage Example:

```js
// Import the function
const { checkTLSHandshake } = require("@nexoracle/utils"); // CJS
import { checkTLSHandshake } from "@nexoracle/utils"; // ESM

(async () => {
  console.log(await checkTLSHandshake("maher-xubair.is-a.dev"));
  // Output: true if host supports TLS
})();
```

---

### Get SSL Certificate

Retrieves complete certificate details from TLS connection.

#### Parameters:

- **hostname** (`String`) - Domain name (protocol optional).
- **port** (`Number`, Optional) - Target port number.

#### Returns:

`Promise<tls.PeerCertificate|null>` - Certificate `object` or `null` if failed.

#### Usage Example:

```js
// Import the function
const { getSSLCertificate } = require("@nexoracle/utils"); // CJS
import { getSSLCertificate } from "@nexoracle/utils"; // ESM

(async () => {
  console.log(await getSSLCertificate("maher-xubair.is-a.dev"));
  // Output: Object containing SSL Certificate
})();
```

---

### Is Valid TLS

Checks if a domain's TLS certificate is valid.

#### Parameters:

- **hostname** (`String`) - Domain name (protocol optional).
- **port** (`Number`, Optional) - Target port number.

#### Returns:

`Promise<boolean>` - `true` if certificate is valid, `false` otherwise.

#### Usage Example:

```js
// Import the function
const { isTLSValid } = require("@nexoracle/utils"); // CJS
import { isTLSValid } from "@nexoracle/utils"; // ESM

(async () => {
  console.log(await isTLSValid("maher-xubair.is-a.dev"));
  // Output: true is TLS is valid
})();
```
