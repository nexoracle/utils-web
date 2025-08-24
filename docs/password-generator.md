---
sidebar_position: 4
title: Password Generator
---

# Password Generator

## Overview

A comprehensive TypeScript/JavaScript utility for generating secure, customizable passwords with multiple character set options and validation features. It uses Node.js crypto module for cryptographically secure random number generation and provides extensive customization for password requirements.

## Features

### Character Set Options

- **Numbers**: Include/exclude numeric characters (0-9)
- **Symbols**: Include/exclude special characters (`!@#$%^&\*()\_+-=[]{}|;:,.<>?`)
- **Uppercase**: Include/exclude uppercase letters (A-Z)
- **Lowercase**: Include/exclude lowercase letters (a-z)
- **Exclude Similar**: Option to exclude visually similar characters (i, l, 1, I, L, O, 0)
- **Custom Include**: Specify additional characters to include
- **Custom Exclude**: Specify characters to exclude from generation

### Generation Features

- **Length Control**: Customizable password length (default: 16 characters)
- **Validation**: Ensures required characters are included when specified
- **Batch Generation**: Generate multiple passwords in a single call
- **Cryptographically Secure**: Uses Node.js crypto.randomBytes()

## Installation

```js
// Import the function
const { passwordGenerator } = require("@nexoracle/utils"); // CJS
import { passwordGenerator } from "@nexoracle/utils"; // ESM
```

---

## Usage Examples

The function provides flexible password generation with comprehensive customization options for different security requirements.

### Quick Start

```js
// Generate a password with default options (16 chars, all character types)
const password = passwordGenerator.generate();
console.log(password); // Output: "pA7$kL9@mQ2#rT5!"

// Generate multiple passwords with default options
const passwords = passwordGenerator.generateMultiple(3);
console.log(passwords);
// Output: ["xY3@kP8!qL2#mN9$", "bT7%jM4^vK1&nR6*", "wZ5$hJ9@pL3#cV8!"]
```

---

### Basic Password Generation

Generate passwords with different character set combinations.

#### Options

| Args             | Type        | Default | Description                                      |
| ---------------- | ----------- | ------- | ------------------------------------------------ |
| `length`         | **Number**  | `16`    | Length of the password to generate               |
| `numbers`        | **Boolean** | `true`  | Include numbers (0-9)                            |
| `symbols`        | **Boolean** | `true`  | Include symbols (!@#$%^&\*()\_+-=[]{})           |
| `uppercase`      | **Boolean** | `true`  | Include uppercase letters (A-Z)                  |
| `lowercase`      | **Boolean** | `true`  | Include lowercase letters (a-z)                  |
| `excludeSimilar` | **Boolean** | `true`  | Exclude similar characters (i, l, 1, I, L, O, 0) |
| `include`        | **String**  | `""`    | Additional characters to include                 |
| `exclude`        | **String**  | `""`    | Characters to exclude from generation            |

#### Examples:

```js
// Generate a simple password with default options
console.log(passwordGenerator.generate());
// Output: "kP8@mQ2#rT5!xY3$"

// Generate a longer password
console.log(passwordGenerator.generate({ length: 20 }));
// Output: "pA7$kL9@mQ2#rT5!xY3@vB6"

// Generate a password with only letters and numbers
console.log(
  passwordGenerator.generate({
    symbols: false,
    uppercase: true,
    lowercase: true,
    numbers: true,
  })
);
// Output: "xY3kP8qL2mN9bT7jM4"

// Generate a numbers-only password (PIN code)
console.log(
  passwordGenerator.generate({
    numbers: true,
    symbols: false,
    uppercase: false,
    lowercase: false,
  })
);
// Output: "7294058136"

// Generate a letters-only password
console.log(
  passwordGenerator.generate({
    numbers: false,
    symbols: false,
    uppercase: true,
    lowercase: true,
  })
);
// Output: "xYkPqLmNbTjMvKwZ"
```

---

### Advanced Options

Use advanced features for specific password requirements.

#### Exclude Similar Characters

```js
// Exclude similar characters (default behavior)
console.log(passwordGenerator.generate({ excludeSimilar: true }));
// Output: "pA7$kL9@mQ2#rT5!" (no i, l, 1, I, L, O, 0)

// Include similar characters
console.log(passwordGenerator.generate({ excludeSimilar: false }));
// Output: "pA7$kL9@mQ2#rT5!1lO0" (may include i, l, 1, I, L, O, 0)
```

#### Custom Include Characters

```js
// Include specific additional characters
console.log(
  passwordGenerator.generate({
    include: "αβγ©®™",
    length: 12,
  })
);
// Output: "pA7$kαβ©®™"

// Include only specific character sets with custom additions
console.log(
  passwordGenerator.generate({
    numbers: false,
    symbols: false,
    include: "!@",
    length: 10,
  })
);
// Output: "xYkPqLmN!@"
```

#### Custom Exclude Characters

```js
// Exclude specific characters
console.log(
  passwordGenerator.generate({
    exclude: "aeiouAEIOU", // exclude all vowels
    length: 12,
  })
);
// Output: "p7$kL9@mQ2#"

// Exclude confusing characters
console.log(
  passwordGenerator.generate({
    exclude: "lI1O0", // exclude easily confused characters
    length: 12,
  })
);
// Output: "pA7$k9@mQ2#rT"
```

---

### Batch Generation

Generate multiple passwords at once for different users or applications.

```js
// Generate 5 passwords with default options
const passwords = passwordGenerator.generateMultiple(5);
console.log(passwords);
// Output: ["xY3@kP8!qL2#mN9$", "bT7%jM4^vK1&nR6*", "wZ5$hJ9@pL3#cV8!", "rF2&kD6#mL9@nT4$", "qG1%jH8^pK3&mR7*"]

// Generate 3 passwords with custom options
const customPasswords = passwordGenerator.generateMultiple(3, {
  length: 12,
  numbers: true,
  symbols: false,
  uppercase: true,
  lowercase: true,
});
console.log(customPasswords);
// Output: ["xY3kP8qL2mN9", "bT7jM4vK1nR6", "wZ5hJ9pL3cV8"]
```

---

### Complex Password Requirements

Create passwords that meet specific security policies or application requirements.

```js
// Complex security policy requirements
const complexPassword = passwordGenerator.generate({
  length: 18,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
  excludeSimilar: true,
  include: "!@",
  exclude: "aeiou",
});
console.log(complexPassword);
// Output: "p7$kL9@mQ2#rT5!xY3@"

// Website password requirements
const websitePassword = passwordGenerator.generate({
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
  excludeSimilar: true, // avoid confusing characters
});
console.log(websitePassword);
// Output: "pA7$kL9@mQ2#"

// Memorable but secure password
const memorablePassword = passwordGenerator.generate({
  length: 20,
  numbers: false,
  symbols: false,
  uppercase: true,
  lowercase: true,
});
console.log(memorablePassword);
// Output: "xYkPqLmNbTjMvKwZhJpLcV"
```

---

## Practical Use Cases

Examples of how to use the password generator in real-world scenarios.

```js
// Generate passwords for multiple users
const userPasswords = passwordGenerator.generateMultiple(5, {
  length: 16,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
});
console.log("User passwords:", userPasswords);

// Generate different password types for different security levels
const passwordTypes = [
  { name: "Strong", options: { length: 20, numbers: true, symbols: true } },
  { name: "Medium", options: { length: 12, numbers: true, symbols: false } },
  { name: "Weak", options: { length: 8, numbers: false, symbols: false } },
];

passwordTypes.forEach((type) => {
  const password = passwordGenerator.generate(type.options);
  console.log(`${type.name} security: ${password}`);
});

// Generate PIN codes
const pinCodes = passwordGenerator.generateMultiple(5, {
  numbers: true,
  symbols: false,
  uppercase: false,
  lowercase: false,
  length: 6,
});
console.log("PIN codes:", pinCodes);
```

---

## Security Considerations

When using this password generator, consider the following security aspects:

1. **Password Length**: Longer passwords are more secure. For critical applications, use at least 16 characters.

2. **Character Diversity**: Include multiple character types (uppercase, lowercase, numbers, symbols) to increase entropy.

3. **Exclude Similar Characters**: Helps prevent user confusion and input errors.

4. **Cryptographic Security**: The generator uses Node.js `crypto.randomBytes()` which is cryptographically secure.

5. **Custom Exclusions**: Use the exclude option to remove characters that might be problematic for specific systems.

6. **Password Rotation**: Implement password rotation policies for sensitive applications.

7. **Storage**: Never store passwords in plain text. Use secure hashing algorithms with salt.

8. **Transmission**: Always transmit passwords over secure encrypted channels.

---

## API Reference

### generate([options])

Generates a single password with the specified options.

**Parameters:**

- `options` (Object): Optional configuration object
  - `length` (Number): Password length (default: 16)
  - `numbers` (Boolean): Include numbers (default: true)
  - `symbols` (Boolean): Include symbols (default: true)
  - `uppercase` (Boolean): Include uppercase letters (default: true)
  - `lowercase` (Boolean): Include lowercase letters (default: true)
  - `excludeSimilar` (Boolean): Exclude similar characters (default: true)
  - `include` (String): Additional characters to include (default: "")
  - `exclude` (String): Characters to exclude (default: "")

**Returns:** (String) Generated password

**Throws:** Error if no characters are available for generation

### generateMultiple(count[, options])

Generates multiple passwords with the specified options.

**Parameters:**

- `count` (Number): Number of passwords to generate
- `options` (Object): Optional configuration object (same as generate method)

**Returns:** (Array) Array of generated passwords
