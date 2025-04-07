---
sidebar_position: 4
title: ApiKey Generator
---

# API Key Generator

## Overview

A comprehensive TypeScript/JavaScript function for generating various types of API keys with multiple generation methods and customization options. It uses nodejs backend to generate apikeys.IT also supports string, bytes, base, UUID generation methods with prefixing and batch generation capabilities.

## Features

### Methods

- **String**: Generate keys using a customizable character pool with flexible length options
- **Bytes**: Create high-entropy keys using cryptographically secure random bytes
- **Base32**: Produce human-readable keys with good uniqueness based on UUID encoding
- **Base64**: Generate compact, URL-safe Base64 encoded keys
- **UUIDv4**: Create standard random UUIDs with or without dashes
- **UUIDv5**: Generate deterministic, name-based UUIDs for consistent key generation

### Customization

- **Length Control**: Fixed or variable length keys with min/max boundaries
- **Character Pools**: Customize the character set used for string-based keys
- **Formatting**: Control dashes inclusion for UUID and Base32 methods
- **Prefixing**: Add descriptive prefixes to keys (Output: "prod.xxxx" or "dev.xxxx")
- **Batch Generation**: Generate multiple keys in a single call

## Installation

```js
// Import the function
const { generateApiKey } = require("@nexoracle/utils"); // CJS
import { generateApiKey } from "@nexoracle/utils"; // ESM
```

---

## Usage Exmaples

The library provides six different methods for generating API keys, each with its own characteristics and security properties.

### Quick Start

```js
// Generate a simple API key with default options
const apiKey = generateApiKey();
console.log(apiKey); // Output: "8f7d3b2a1c5e9f0g4h6i"

// Generate a UUIDv4 based API key
const uuidKey = generateApiKey({ method: "uuidv4" });
console.log(uuidKey); // Output: "550e8400-e29b-41d4-a716-446655440000"

// Generate a batch of 5 API keys with a prefix
const keys = generateApiKey({
  method: "base64",
  prefix: "prod",
  batch: 5,
});
console.log(keys);
// [
//   "prod.dGhpcyBpcyBhIHRlc3Qgc3RyaW5n",
//   "prod.YW5vdGhlciB0ZXN0IHN0cmluZw",
//   "prod.eWV0IGFub3RoZXIgdGVzdA",
//   "prod.c29tZSByYW5kb20gZGF0YQ",
//   "prod.bW9yZSByYW5kb20gZGF0YQ"
// ]
```

---

### String Method

The default method. Generates a random string using a specified character pool.

#### Options

| Args     | Type       | Default                                                                                | Description                                              |
| -------- | ---------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `method` | **String** | `string`                                                                               | string method to generate apikeys                        |
| `min`    | **Number** | `16`                                                                                   | Minimum length when generating apikey                    |
| `max`    | **Number** | `32`                                                                                   | Maximum length when generating apikey                    |
| `length` | **Number** | `undefined`                                                                            | Fixed length (overrides min/max if specified)            |
| `pool`   | **String** | `abcdefghijklmnopqrstuvwxyz`<br />`ABCDEFGHIJKLMNOPQRSTUVWXYZ`<br />`0123456789-._~+/` | The characters to use when generating the key generation |
| `prefix` | **String** | `undefined`                                                                            | An optional prefix to add to the generated key           |
| `batch`  | **Number** | `undefined`                                                                            | If specified, generates multiple keys                    |

#### Examples:

```js
// Uses string method with default options
console.log(generateApiKey({ method: "string" })); // Output: nD6ao+/smhRp/y~+AATug

// Generate apikey with a certain length
console.log(generateApiKey({ method: "string", length: 10 })); // Output: MwSAKFekF3

// Generates apikey between two random numbers length
console.log(generateApiKey({ method: "string", min: 10, max: 30 })); // Output: qnaPRrZP0nn5FPDSq

// Custom character pool
console.log(generateApiKey({ method: "string", pool: "ABCDEFGHIJKLMNOPqrstuvwxzy" })); // Output: AzqJGzIPOGxzNDJBHqHyNAGOw

// Generates apikey with a prefix
console.log(generateApiKey({ method: "string", prefix: "nex" })); // Output: nex.qW2BOTdfbVR-2KG-O_3Fo

// Generate certian amount of apikeys
console.log(generateApiKey({ method: "string", batch: 5 }));

// Output:

/*
[
  '/XtssY90qT0c_E.XkquywDTl6',
  'NmD_AbWDydAqGtSLZoBtf4pM+rZ',
  'hzxg1bEIP1VIWbLwTNcJK2vgR',
  'TtDju~yMKAi1iF9/SVep6SjSA',
  '-45xqnfASWyXz.n~h3'
]
*/
```

---

### Bytes Method

Generates random bytes and returns them as a hexadecimal string. This provides high entropy.

#### Options

| Args     | Type       | Default     | Description                                    |
| -------- | ---------- | ----------- | ---------------------------------------------- |
| `method` | **String** | `bytes`     | use bytes method to generate apikeys           |
| `min`    | **Number** | `16`        | Minimum length when generating apikey          |
| `max`    | **Number** | `32`        | Maximum length when generating apikey          |
| `length` | **Number** | `undefined` | Fixed length (overrides min/max if specified)  |
| `prefix` | **String** | `undefined` | An optional prefix to add to the generated key |
| `batch`  | **Number** | `undefined` | If specified, generates multiple keys          |

#### Examples:

```js
// Uses bytes method with default options
console.log(generateApiKey({ method: "bytes" })); // Output: 2e060bbf30cd7d4f810

// Generate apikey with a certain length
console.log(generateApiKey({ method: "bytes", length: 10 })); // Output: 5b33c8887a

// Generates apikey between two random numbers length
console.log(generateApiKey({ method: "bytes", min: 10, max: 30 })); // Output: 06f9f0e0390fe560e423fdd92

// Generates apikey with a prefix
console.log(generateApiKey({ method: "bytes", prefix: "nex" })); // Output: nex.60c688d913100c1648a60847f99

// Generate certian amount of apikeys
console.log(generateApiKey({ method: "bytes", batch: 5 }));

// Output:

/*
[
  '03cfb3cbb6acee271e',
  'cb678f5ad21da463',
  'a1dbed93a7a83d21144b6b80',
  '34be0276863ab2146dc932708bfa9e06',
  '1fe4621ca6a09c04cd399d'
]
*/
```

---

### Base32 Method

Generates a Base32 encoded string derived from a UUID. This provides human-readable keys with good uniqueness.

#### Options

| Args     | Type        | Default     | Description                                    |
| -------- | ----------- | ----------- | ---------------------------------------------- |
| `method` | **String**  | `base32`    | use base32 method to generate apikeys          |
| `dashes` | **Boolean** | `true`      | Adds dashes (-) between apikey                 |
| `prefix` | **String**  | `undefined` | An optional prefix to add to the generated key |
| `batch`  | **Number**  | `undefined` | If specified, generates multiple keys          |

#### Examples:

```js
// Uses base32 method with default options
console.log(generateApiKey({ method: "base32" }));
// Output: F330-F60A-E249-4C45-A220-9930-8C43-7757

// Generate apikey without dashes
console.log(generateApiKey({ method: "base32", dashes: false }));
// Output: D17783162D514BDEAA312B6CA8C3132C

// Generates apikey with a prefix
console.log(generateApiKey({ method: "base32", prefix: "nex" }));
// Output: nex.6098-D32C-9EB7-40B2-B917-67DE-765F-349C

// Generate certian amount of apikeys
console.log(generateApiKey({ method: "base32", batch: 5 }));

// Output:

/*
[
  'DA17-DB5F-8826-4BC1-B303-8F9A-AB16-448D',
  '5635-6173-1C3C-458F-94DE-C7F8-D6D1-65C5',
  '7B5A-8879-0DF2-4263-9D13-3ABA-ADA7-008C',
  'CECF-D40E-0143-41E6-8539-9BBE-4B86-B27A',
  '5BF0-A534-EBC2-4B64-9CAE-BD54-04AC-E294'
]
*/
```

---

### Base64 Method

Generates a URL-safe Base64 encoded string derived from random bytes. This provides compact, efficient keys.

#### Options

| Args     | Type       | Default     | Description                                    |
| -------- | ---------- | ----------- | ---------------------------------------------- |
| `method` | **String** | `base64`    | use base64 method to generate apikeys          |
| `prefix` | **String** | `undefined` | An optional prefix to add to the generated key |
| `batch`  | **Number** | `undefined` | If specified, generates multiple keys          |

#### Examples:

```js
// Uses base64 method with default options
console.log(generateApiKey({ method: "base64" }));
// Output: WXXeqzIs4hA8tr43k5gNfga8JyB_tFaA

// Generates apikey with a prefix
console.log(generateApiKey({ method: "base64", prefix: "nex" }));
// Output: nex.840YI9apBy-NZy09eAYARD8K21sjwxCW

// Generate certian amount of apikeys
console.log(generateApiKey({ method: "base64", batch: 5 }));

// Output:

/*
[
  'x1P8PT9c3VDytS0taojALtjBDGKet62t',
  'SwGoZ-fliO6MBb9uYJHkICIewZgz-uQG',
  'gLF7SyV8ITJhC35kiUy5fQ8zZGhSubui',
  'bhImVgdW_IWBzVaFgAXwbcMzofq0RAYb',
  'y8DK3wTjYLmHbeNQADWPGgP9yCp6PQlI'
]
*/
```

---

### UUIDv4 Method

Generates a standard UUIDv4 (random-based) identifier.

#### Options

| Args     | Type        | Default     | Description                                    |
| -------- | ----------- | ----------- | ---------------------------------------------- |
| `method` | **String**  | `uuidv4`    | use uuidv4 method to generate apikeys          |
| `dashes` | **Boolean** | `true`      | Adds dashes (-) between apikey                 |
| `prefix` | **String**  | `undefined` | An optional prefix to add to the generated key |
| `batch`  | **Number**  | `undefined` | If specified, generates multiple keys          |

#### Examples:

```js
// Uses uuidv4 method with default options
console.log(generateApiKey({ method: "uuidv4" }));
// Output: 29c2bd61-f93b-4ae2-8872-2ab099b74abd

// Generate apikey without dashes
console.log(generateApiKey({ method: "uuidv4", dashes: false }));
// Output: 0e6dd38a6afc4515b5d21b05aed277f7

// Generates apikey with a prefix
console.log(generateApiKey({ method: "uuidv4", prefix: "nex" }));
// Output: nex.286636b6-d756-48bb-8599-5136cbb1e48b

// Generate certian amount of apikeys
console.log(generateApiKey({ method: "uuidv4", batch: 5 }));

// Output:

/*
[
  'b9c4aa58-ce03-435a-8e78-b1e71f73224c',
  '69fb215d-0f33-4ddb-a884-e20717d63fd9',
  'b2cd5064-58aa-4e5c-9404-01480482a9d9',
  '7afc7451-8e28-438f-914f-fcfe2c60dada',
  'e7dd447e-9619-4ed8-9147-3d8a7c15b682'
]
*/
```

---

### UUIDv5 Method

Generates a UUIDv5 (name-based) identifier using SHA-1 hashing. Useful for creating deterministic IDs based on a name within a namespace.

#### Options

| Args        | Type        | Default     | Description                                                         |
| ----------- | ----------- | ----------- | ------------------------------------------------------------------- |
| `method`    | **String**  | `uuidv5`    | use uuidv5 method to generate apikeys                               |
| `name`      | **String**  | `undefined` | A unique name to use for the generation                             |
| `namespace` | **String**  | `undefined` | The UUID to use for the generation (skipped if `batch` is provided) |
| `dashes`    | **Boolean** | `true`      | Adds dashes (-) between apikey                                      |
| `prefix`    | **String**  | `undefined` | An optional prefix to add to the generated key                      |
| `batch`     | **Number**  | `undefined` | If specified, generates multiple keys                               |

#### Examples:

```js
// Uses uuidv5 method with default options
console.log(generateApiKey({ method: "uuidv5", name: "my app", namespace: "7afc7451-8e28-438f-914f-fcfe2c60dada" }));
// Output: f95a1fbd-00c1-5da0-aecb-d91235d39136

// Generate apikey without dashes
console.log(generateApiKey({ method: "uuidv5", name: "my app", namespace: "b9c4aa58-ce03-435a-8e78-b1e71f73224c", dashes: false }));
// Output: 7a13b8cba6ca518e9c0a810903d8aa17

// Generates apikey with a prefix
console.log(generateApiKey({ method: "uuidv5", name: "my app", namespace: "e7dd447e-9619-4ed8-9147-3d8a7c15b682", prefix: "nex" }));
// Output: nex.161eaa53-8012-571a-98c6-8043d43aaaaa

// Generate certian amount of apikeys, auto-generates the namespace
console.log(generateApiKey({ method: "uuidv5", name: "my app", batch: 5 }));

// Output:

/*
[
  'ab2c0cc8-f85b-59ff-a37a-b5cba7a46023',
  'fdea47eb-85fc-5164-b466-7c10c515dd02',
  '5283332a-b9ca-52ec-869c-d4b91b62f5fb',
  'ed08f75c-a70d-5174-8ce6-aeae74d3afe1',
  '922128ff-516e-5720-97e8-ede24bba9f3a'
]
*/
```

---

## Batch Generation

You can generate multiple API keys at once using the `batch` option:

```js
// Generate 5 API keys
const keys = generateApiKey({
  method: "string",
  batch: 5,
});

console.log(keys);
// Returns an array of 5 keys

// Generate 10 UUIDv4 keys without dashes
const uuidKeys = generateApiKey({
  method: "uuidv4",
  dashes: false,
  batch: 10,
});

console.log(uuidKeys);
```

## Using Prefixes

You can add a prefix to your API keys, which is useful for indicating their purpose or environment:

```js
// Generate a key with "prod" prefix
const productionKey = generateApiKey({
  method: "base64",
  prefix: "prod",
});

console.log(productionKey);
// Output: "prod.dGhpcyBpcyBhIHRlc3Qgc3RyaW5n"

// Generate dev keys in batch
const devKeys = generateApiKey({
  method: "uuidv4",
  prefix: "dev",
  batch: 3,
});

console.log(devKeys);
// Output:  ["dev.550e8400-e29b-41d4-a716-446655440000", "dev.13a7b6cd-e29b-41d4-a716-446655440000", "dev.983fde45-e29b-41d4-a716-446655440000"]
```

---

## Security Considerations

When using this function, consider the following security aspects:

1. **Key Length**: Longer keys provide better security. For critical applications, use at least 24-32 characters.

2. **Method Selection**:

   - `bytes` and `base64` provide the highest entropy
   - `uuidv4` offers good randomness with a standard format
   - `string` with a custom pool allows the most flexibility

3. **Storage**: Never store API keys in plain text. Use secure hashing algorithms with salt.

4. **Rotation**: Implement key rotation policies to periodically refresh keys.

5. **Rate Limiting**: Implement rate limiting to prevent brute force attacks.
