# Crypto

## Cryptography Toolkit

This module provides various cryptographic operations, including hashing (SHA-256, SHA-512, MD5), AES encryption/decryption, HMAC generation, and password-based key derivation (PBKDF2). It supports RSA key pair generation, encryption/decryption, and digital signatures. Additionally, it includes random byte generation and UUID creation for secure identification.

**These** are some basic but refined functions made using built-in **node:crypto**.
Please visit [**node:crypto**](https://nodejs.org/api/crypto.html) for more detailed documentation and usage.

### SHA-256 Hash

Creates a SHA-256 hash of the input string.

#### Parameters:

- **data** (`String`) - The data to hash.

#### Returns:

`String` - The `SHA-256` hash in hexadecimal format.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

const hash = crypto.sha256("hello world");
console.log("SHA-256 Hash:", hash);
// Output: b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

---

### SHA-512 Hash

Creates a SHA-512 hash of the input string.

#### Parameters:

- **data** (`String`) - The data to hash.

#### Returns:

`String` - The `SHA-512` hash in hexadecimal format.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

const hash = crypto.sha512("hello world");
console.log("SHA-512 Hash:", hash);
// Output: SHA-512 Hash: 309ecc489c12d6eb4cc40f5..........
```

---

### MD5 Hash

Creates an MD5 hash of the input string.

#### Parameters:

- **data** (`String`) - The data to hash.

#### Returns:

`String` - The `MD5` hash in hexadecimal format.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

const hash = crypto.md5("hello world");
console.log("MD5 Hash:", hash);
// Output: MD5 Hash: 5eb63bbbe01eeed093cb22bb8f5acdc3
```

---

### Generate Random Bytes

Generates a random hex string of a given length.

#### Parameters:

- **length** (`Number`, Optional) - Number of bytes to generate (`default: 16`).

#### Returns:

`String` - Random `hex` string.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

const randomString = crypto.randomBytes(32);
console.log("Random Bytes:", randomString);
// Output: Random Bytes: 98daf4270a51a0c1b3bf06c2f15e7934......
```

---

### Generate UUID

Generates a UUID (Universally Unique Identifier).

#### Returns:

`String` - A `UUID`.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

const uuid = crypto.generateUUID();
console.log("Generated UUID:", uuid);
// Output: Generated UUID: 067ab2b7-0b02-41dc-8d45-89a35252c0d2
```

---

### AES Encryption & Decryption

Encrypts and decrypts text using AES-256-CBC.

#### Parameters (Encryption):

- **text** (`String`) - The plaintext to encrypt.
- **key** (`String`) - The encryption key (must be 32 bytes in hex).
- **iv** (`String`, Optional) - The IV (Initialization Vector) in hex. Default is 16 zero bytes.

#### Returns:

`String` - The `encrypted` data in hexadecimal.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

const key = crypto.randomBytes(32); // Generate a secure key
const iv = crypto.randomBytes(16); // Generate an IV

const encrypted = crypto.encryptAES("Hello, world!", key, iv);
console.log("Encrypted:", encrypted);
// Output: Encrypted: a7e6adceb6e8d96b36b16d4bca2b457e

const decrypted = crypto.decryptAES(encrypted, key, iv);
console.log("Decrypted:", decrypted);
// Output: Decrypted: Hello, world!
```

---

### HMAC

Computes an HMAC (Hash-Based Message Authentication Code) using SHA-256 or SHA-512.

#### Parameters:

- **data** (`String`) - The data to sign.
- **secret** (`String`) - The secret key.

#### Returns:

`String` - The `HMAC` hash in hexadecimal.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

const secret = "supersecretkey";
const hmac = crypto.hmacSHA256("message", secret);

console.log("HMAC SHA-256:", hmac);
// Output: HMAC SHA-256: 1e46048d8b12509a93f36.......
```

---

### PBKDF2

Derives a cryptographic (Password-Based Key Derivation Function) key from a password and salt.

#### Parameters:

- **password** (`String`) - The password to hash.
- **salt** (`String`) - The salt value.
- **iterations** (`Number`, Optional) - The number of iterations (default: 10000).
- **keylen** (`Number`, Optional) - Length of the derived key (default: 64).
- **digest** (`String`, Optional) - The hashing algorithm (default: sha512).

#### Returns:

`String` - The derived `key` in hexadecimal.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

const derivedKey = crypto.pbkdf2("mypassword", "randomsalt");
console.log("Derived Key:", derivedKey);
// Output: Derived Key: 482c7393597d305185a9e8c9b1f4cf8.......
```

---

### Key Pair Generation

Generates cryptographic key pairs for RSA, EC, etc. These key pairs can be used for encryption, signing, or secure communications.

#### Parameters:

- **type** (`String`, Optional) – The type of key to generate. `Default: "rsa"`.
  - **type** (Optional) - (`"rsa", "ec", "ed25519", "ed448", "x25519", "x448"`)
- **options** (Object, Optional) – Custom options for key generation.
  - For `"rsa"`: Can include modulusLength, publicKeyEncoding, and privateKeyEncoding.
  - For `"ec"`: Can include namedCurve, publicKeyEncoding, and privateKeyEncoding.
  - For `Other`: Can include publicKeyEncoding, and privateKeyEncoding.
  - publicKeyEncoding and privateKeyEncoding Include Below Options in Object.
    - `publicKeyEncoding`: **type**: `"spki"`, **format**: `"pem"`
    - `privateKeyEncoding`: **type**: `"pkcs8"`, **format**:` "pem"`
- **saveToFile** (`Boolean`, Optional) - Saves both public and private keys into `public.pem`, `private.pem` files. (`default: false`)

#### Returns:

An object or file containing:

- `publicKey` – The generated `public` key in PEM format.
- `privateKey` – The generated `private` key in PEM format.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

// Generate an RSA key pair: default
const { publicKey, privateKey } = crypto.generateKeyPair("rsa");
console.log("RSA Public Key:", publicKey);
console.log("RSA Private Key:", privateKey);

// Generate an EC key pair and save to file
const ecKeys = crypto.generateKeyPair("ec", undefined, true); // Pass undefined to escape options
console.log("EC Public Key:", ecKeys.publicKey);
console.log("EC Private Key:", ecKeys.privateKey);

// Generate an Ed25519 key pair
const edKeyPair = crypto.generateKeyPair("ed25519");
console.log("Ed25519 Public Key:", edKeyPair.publicKey);
console.log("Ed25519 Private Key:", edKeyPair.privateKey);

// Generate an x25519 key pair
const x25519Keys = crypto.generateKeyPair("x25519");
console.log("X25519 Public Key:", x25519Keys.publicKey);
console.log("X25519 Private Key:", x25519Keys.privateKey);

// Generate an x448 key pair
const x448Keys = crypto.generateKeyPair("x448");
console.log("x448 Public Key:", x448Keys.publicKey);
console.log("x448 Private Key:", x448Keys.privateKey);

// Generate an RSA key pair with custom options
const rsKeyPair = crypto.generateKeyPair("rsa", {
  modulusLength: 4096, // default length: 2048
  publicKeyEncoding: { type: "pkcs1", format: "pem" }, // default type: spki
  privateKeyEncoding: { type: "pkcs1", format: "pem" }, // default type: pkcs8
});
console.log("RSA Public Key:", rsKeyPair.publicKey);
console.log("RSA Private Key:", rsKeyPair.privateKey);

// Generate an RSA key pair with custom options
const ecKeyPair = crypto.generateKeyPair(
  "ec",
  {
    namedCurve: "P-521", // default curve: secp256k1
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "sec1", format: "pem" }, // default type: pkcs8
  },
  true
); // save keys into files
console.log("EC Public Key:", ecKeyPair.publicKey);
console.log("EC Private Key:", ecKeyPair.privateKey);
```

---

### RSA Encryption & Decryption

Encrypts a plaintext message using an RSA public key and Decrypts an RSA-encrypted message using a private key.

#### Parameters:

- For Encryption:

  - **text** (`String`) – The `plaintext` message to encrypt.
  - **publicKey** (`String`) – The RSA public key in `PEM` format.

- For Decryption:
  - **encrypted** (`String`) – The Base64-encoded `encrypted` message.
  - **privateKey** (`String`) – The RSA private key in `PEM` format.

#### Returns:

Encryption:

- `String` – The `encrypted` message in `Base64` format.

Decryption:

- `String` – The `decrypted` plaintext message.

#### Example Usage:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

// Generate an RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPair("rsa");

const encrypted = crypto.encryptRSA("Hello, World!", publicKey);
console.log("Encrypted Message:", encrypted);

const decrypted = crypto.decryptRSA(encrypted, privateKey);
console.log("Decrypted Message:", decrypted);
```

---

### Signing & Signature Verification

Generates a cryptographic signature for a given message using a private key and Verifies if a given signature matches a message using the corresponding public key.

#### Parameters:

- For Digital Signing:
  - **data** (`String`) – The `message` to sign.
  - **privateKey** (`String`) – The private key in `PEM` format.
  - **algorithm** (`String`, Optional) – The signature algorithm (`Default: "RSA-SHA256"`).
- For Signature Verfication
  - **data** (String) – The original `message`.
  - **signature** (String) – The `signature` to verify (`hex format`).
  - **publicKey** (String) – The public key in `PEM` format.
  - **algorithm** (String, Optional) – The `algorithm` used (`Default: "RSA-SHA256"`).

#### Returns:

Signing

- `String` – The `signature` in hexadecimal format.

Verifying

- `Boolean` – `true` if the signature is valid, otherwise `false`.

#### Usage Examples:

```js
// Import the function
const { crypto } = require("@nexoracle/utils"); // CJS
import { crypto } from "@nexoracle/utils"; // ESM

// Generate an RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPair("rsa");

const signature = crypto.sign("Important Data", privateKey);
console.log("Digital Signature:", signature);

const isValid = crypto.verify("Important Data", signature, publicKey);
console.log("Signature Valid:", isValid);
```
