---
sidebar_position: 3
title: Password Validator
---

# Password Validator

## Overview
A flexible and customizable password validation function for JavaScript and TypeScript applications. This function allows you to create rules for password validation with a fluent, chainable API.

## Installation

```js
// Import the function
const { passwordValidator } = require("@nexoracle/utils"); // CJS
import { passwordValidator } from "@nexoracle/utils"; // ESM
```

## Basic Usage

```javascript

// Create a validation schema
const schema = new passwordValidator();

// Add validation rules
schema
  .min(8)                                    // Minimum length 8
  .max(100)                                  // Maximum length 100
  .uppercase(1)                              // Must have at least 1 uppercase letter
  .lowercase(1)                              // Must have at least 1 lowercase letter
  .digits(1)                                 // Must have at least 1 digit
  .symbols(1)                                // Must have at least 1 symbol
  .not(/[\s]/)                               // Should not contain spaces
  .not('password');                          // Should not contain the word "password"

// Validate the password
const isValid = schema.validate('YourPassword123!');
console.log(isValid); // true or false
```

## API Reference

### Constructor

```javascript
const schema = new passwordValidator();
```

Creates a new password validation schema with no rules.

### Methods

All methods return the schema instance for chaining.

#### Basic Rules

##### `min(length[, description])`

- **Purpose**: Sets a minimum length requirement
- **Arguments**:
  - `length`: Number (positive integer)
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.min(8, 'Password must be at least 8 characters long');
```

##### `max(length[, description])`

- **Purpose**: Sets a maximum length requirement
- **Arguments**:
  - `length`: Number (positive integer)
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.max(100, 'Password should not exceed 100 characters');
```

#### Character Types

##### `letters([count][, description])`

- **Purpose**: Requires the password to contain letters (a-z, A-Z)
- **Arguments**:
  - `count`: Optional number of required letters
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.letters(1, 'Password must contain at least one letter');
```

##### `digits([count][, description])`

- **Purpose**: Requires the password to contain digits (0-9)
- **Arguments**:
  - `count`: Optional number of required digits
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.digits(2, 'Password must contain at least 2 digits');
```

##### `symbols([count][, description])`

- **Purpose**: Requires the password to contain symbols
- **Arguments**:
  - `count`: Optional number of required symbols
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.symbols(1, 'Password must contain at least 1 special character');
```

##### `uppercase([count][, description])`

- **Purpose**: Requires the password to contain uppercase letters
- **Arguments**:
  - `count`: Optional number of required uppercase letters
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.uppercase(1, 'Password must contain at least 1 uppercase letter');
```

##### `lowercase([count][, description])`

- **Purpose**: Requires the password to contain lowercase letters
- **Arguments**:
  - `count`: Optional number of required lowercase letters
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.lowercase(1, 'Password must contain at least 1 lowercase letter');
```

##### `spaces([count][, description])`

- **Purpose**: Requires the password to contain spaces
- **Arguments**:
  - `count`: Optional number of required spaces
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.spaces(1, 'Password must contain at least 1 space');
```

#### Pattern Matching

##### `has(pattern[, description])`

- **Purpose**: Requires the password to match a regular expression pattern
- **Arguments**:
  - `pattern`: String or RegExp object
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.has(/[!@#$%^&*]/, 'Password must contain at least one special character');
// or
schema.has('special', 'Password must contain the word "special"');
```

##### `not(pattern[, description])`

- **Purpose**: Requires the password to NOT match a pattern
- **Arguments**:
  - `pattern`: String or RegExp object
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.not(/[\s]/, 'Password must not contain spaces');
// or
schema.not('password', 'Password must not contain the word "password"');
```

#### Special Rules

##### `oneOf(list[, description])`

- **Purpose**: Restricts passwords to a specific list of allowed values
- **Arguments**:
  - `list`: Array of strings
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.oneOf(['allowedPass1', 'allowedPass2'], 'Password must be from the approved list');
```

##### `is()`

- **Purpose**: Helper method that can be used with chaining
- **Arguments**: None
- **Example**:
```javascript
schema.is().min(8).uppercase(1);
```

##### `usingPlugin(fn[, description])`

- **Purpose**: Extends validation with a custom function
- **Arguments**:
  - `fn`: Function that takes a password string and returns a boolean
  - `description`: Optional custom error message
- **Example**:
```javascript
schema.usingPlugin((password) => {
  // Custom validation logic
  return password.charAt(0) !== password.charAt(0).toLowerCase();
}, 'Password must start with an uppercase letter');
```

### Validation Methods

#### `validate(password[, options])`

- **Purpose**: Validates a password against all defined rules
- **Arguments**:
  - `password`: String to validate
  - `options`: Optional object with settings
    - `list`: Boolean, returns array of failed validations
    - `details`: Boolean, returns detailed information about failed validations
- **Returns**: 
  - Boolean (by default) - true if valid, false if invalid
  - String array (with `list: true`) - List of failed validation method names
  - Object array (with `details: true`) - Detailed information about failed validations
- **Examples**:

Basic validation (returns boolean):
```javascript
const isValid = schema.validate('YourPassword123!');
console.log(isValid); // true
```

Get list of failed validations:
```javascript
const failures = schema.validate('weak', { list: true });
console.log(failures); 
// ['min', 'uppercase', 'digits', 'symbols']
```

Get detailed validation failures:
```javascript
const details = schema.validate('weak', { details: true });
console.log(details);
// [
//   { 
//     validation: 'min',
//     arguments: 8,
//     message: 'The string should have a minimum length of 8 characters'
//   },
//   { 
//     validation: 'uppercase',
//     arguments: 1,
//     message: 'The string should have a minimum of 1 uppercase letter'
//   },
//   ...
// ]
```

## Examples

### Complex Password Validation

```javascript
const schema = new passwordValidator();

schema
  .min(8, 'Password must be at least 8 characters long')
  .max(100, 'Password should not exceed 100 characters')
  .uppercase(1, 'Include at least 1 uppercase letter')
  .lowercase(1, 'Include at least 1 lowercase letter')
  .digits(1, 'Include at least 1 number')
  .symbols(1, 'Include at least 1 special character')
  .not('password', 'Password should not contain the word "password"')
  .not(/\s/, 'Password should not contain spaces');

// Validate with details
const validationResult = schema.validate('weakpw', { details: true });
console.log(validationResult);
// Returns detailed error information
```

### Custom Validation with Plugin

```javascript
const schema = new passwordValidator();

// Custom validator to check for sequential characters
schema.usingPlugin((password) => {
  for (let i = 0; i < password.length - 2; i++) {
    // Check for three sequential characters (like "abc" or "123")
    if (
      password.charCodeAt(i + 1) === password.charCodeAt(i) + 1 &&
      password.charCodeAt(i + 2) === password.charCodeAt(i) + 2
    ) {
      return false;
    }
  }
  return true;
}, 'Password should not contain sequential characters like "abc" or "123"');

console.log(schema.validate('password123')); // false
console.log(schema.validate('p@ssw0rd!')); // true
```

### Creating a Password Strength Meter

```javascript
function checkPasswordStrength(password) {
  const weak = new passwordValidator();
  weak.min(6).max(50);
  
  const medium = new passwordValidator();
  medium.min(8).lowercase(1).uppercase(1).digits(1);
  
  const strong = new passwordValidator();
  strong.min(10).lowercase(1).uppercase(1).digits(1).symbols(1);
  
  if (strong.validate(password)) {
    return 'strong';
  } else if (medium.validate(password)) {
    return 'medium';
  } else if (weak.validate(password)) {
    return 'weak';
  } else {
    return 'very weak';
  }
}

console.log(checkPasswordStrength('pass')); // 'very weak'
console.log(checkPasswordStrength('password')); // 'weak'
console.log(checkPasswordStrength('Password123')); // 'medium'
console.log(checkPasswordStrength('P@su878sw0rd!')); // 'strong'
```

### Form Validation Integration

```javascript
document.getElementById('signupForm').addEventListener('submit', function(event) {
  const password = document.getElementById('password').value;
  
  const schema = new passwordValidator();
  schema
    .min(8, 'Password must be at least 8 characters long')
    .uppercase(1, 'Include at least 1 uppercase letter')
    .digits(1, 'Include at least 1 number');
  
  const validationErrors = schema.validate(password, { details: true });
  
  if (validationErrors.length > 0) {
    event.preventDefault();
    
    const errorContainer = document.getElementById('passwordErrors');
    errorContainer.innerHTML = '';
    
    validationErrors.forEach(error => {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = error.message;
      errorContainer.appendChild(errorMsg);
    });
  }
});
```

## Advanced Usage

### Combining Multiple Schemas

```javascript
function validatePassword(password) {
  // Basic requirements for all passwords
  const baseSchema = new passwordValidator();
  baseSchema
    .min(8)
    .max(100)
    .not('password')
    .not(username); // Assuming username is defined elsewhere
  
  // Additional requirements for admin passwords
  const adminSchema = new passwordValidator();
  adminSchema
    .min(12)
    .uppercase(2)
    .digits(2)
    .symbols(2);
  
  const isBasicValid = baseSchema.validate(password);
  const isAdminValid = isAdminUser ? adminSchema.validate(password) : true;
  
  return isBasicValid && isAdminValid;
}
```

### Custom Error Handling

```javascript
function validateWithCustomErrors(password) {
  const schema = new passwordValidator();
  schema
    .min(8, 'Password is too short (minimum 8 characters)')
    .uppercase(1, 'Add at least one UPPERCASE letter')
    .digits(1, 'Add at least one number')
    .symbols(1, 'Add at least one special character (!@#$, etc)');
  
  const errors = schema.validate(password, { details: true });
  
  if (errors.length > 0) {
    return {
      valid: false,
      errors: errors.map(e => e.message)
    };
  }
  
  return { valid: true };
}

// Example usage
const result = validateWithCustomErrors('weakpw');
if (!result.valid) {
  console.log('Password validation failed:');
  result.errors.forEach(err => console.log(' - ' + err));
}
```


## Error Messages

The function provides default error messages for each validation rule. These can be overridden by providing a custom description as the last parameter to each rule method.

Default error messages include:

| Rule | Default Message Example |
|------|-------------------------|
| min | "The string should have a minimum length of 8 characters" |
| max | "The string should have a maximum length of 100 characters" |
| uppercase | "The string should have a minimum of 1 uppercase letter" |
| lowercase | "The string should have a minimum of 1 lowercase letter" |
| digits | "The string should have a minimum of 2 digits" |
| symbols | "The string should have a minimum of 1 symbol" |
| has | "The string should have pattern '...'" |
| not | "The string should not have pattern '...'" |
