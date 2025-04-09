# Core Validators

## Has Emoji

Check if the string contains emoji.

**Browser Support: ✅ Yes**

#### Parameter:

- **str** (String) - A string having emoji.

#### Returns:

`Boolean` - `true` if the string contains emoji otherwise `false`.

#### Example Usage:

```js
// Import the function
const { hasEmoji } = require("@nexoracle/utils"); // CJS
import { hasEmoji } from "@nexoracle/utils"; // ESM

console.log(hasEmoji("🙈")); // Output: true
console.log(hasEmoji("no emoji")); // Output: false
```

---

## Is Image URL

It makes `HEAD | GET` Request to the URL and validates whether its Image URL or Not.

#### Parameter:

- **str** (String) - Image URL.

#### Returns:

`Promise<boolean>` - `true` if the URL points to an image, otherwise `false.`

#### Example Usage:

```js
// Import the function
const { isImageURL } = require("@nexoracle/utils"); // CJS
import { isImageURL } from "@nexoracle/utils"; // ESM

isImageURL("https://i.pinimg.com/474x/45/03/67/4503673607b5e121ab172c229db010f3.jpg").then((result) => console.log(result)); // Output: true
isImageURL("https://example.com/not-an-image").then((result) => console.log(result)); // Output: false
```

---

## Null Input

check if the input is null or not.

**Browser Support: ✅ Yes**

#### Parameter:

- **null** - Null value.

#### Returns:

`true` if the input is null otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isNull } = require("@nexoracle/utils"); // CJS
import { isNull } from "@nexoracle/utils"; // ESM

console.log(isNull(null)); // Output: true
console.log(isNull("not null")); // Output: false
```

---

## Is Symbol

check if the input is symbol or not.

**Browser Support: ✅ Yes**

#### Parameter:

- **symbol** - Symbol value.

#### Returns:

`true` if the input is symbol otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isSymbol } = require("@nexoracle/utils"); // CJS
import { isSymbol } from "@nexoracle/utils"; // ESM

console.log(isSymbol(Symbol("test"))); // Output: true
console.log(isSymbol("not a symbol")); // Output: false
```

---

## Undefined Input

check if the input is undefined or defined.

**Browser Support: ✅ Yes**

#### Parameter:

- **undefined** - Undefined value.

#### Returns:

`true` if the input is undefined otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isUndefined } = require("@nexoracle/utils"); // CJS
import { isUndefined } from "@nexoracle/utils"; // ESM

console.log(isUndefined(undefined)); // Output: true
console.log(isUndefined("defined")); // Output: false
```

---

## Is Big Integer

check if the input is big init or not.

**Browser Support: ✅ Yes**

#### Parameter:

- **BigInt** - BigInt value.

#### Returns:

`true` if the input is big init otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isBigInt } = require("@nexoracle/utils"); // CJS
import { isBigInt } from "@nexoracle/utils"; // ESM

console.log(isBigInt(BigInt(123))); // Output: true
console.log(isBigInt(123)); // Output: false
```

---

## Is Function

check if the input is function.

**Browser Support: ✅ Yes**

#### Parameter:

- **function** - Function value.

#### Returns:

`true` if the input is function otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isFunction } = require("@nexoracle/utils"); // CJS
import { isFunction } from "@nexoracle/utils"; // ESM

console.log(isFunction(() => {})); // Output: true
console.log(isFunction("not a function")); // Output: false
```

---

## Is Boolean

check if the input is boolean or not.

**Browser Support: ✅ Yes**

#### Parameter:

- **Boolean** - Boolean value.

#### Returns:

`true` if the input is boolean otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isBool } = require("@nexoracle/utils"); // CJS
import { isBool } from "@nexoracle/utils"; // ESM

console.log(isBool(true)); // Output: true
console.log(isBool("true")); // Output: false
```

---

## isString

check if the input is valid string.

**Browser Support: ✅ Yes**

#### Parameter:

- **String** - String value.

#### Returns:

`true` if the input is string otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isString } = require("@nexoracle/utils"); // CJS
import { isString } from "@nexoracle/utils"; // ESM

console.log(isString("test")); // Output: true
console.log(isString(123)); // Output: false
```

---

## Array Input

check if the input is array or not.

**Browser Support: ✅ Yes**

#### Parameter:

- **Array** - Value in array.

#### Returns:

`true` if the input is array otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isArray } = require("@nexoracle/utils"); // CJS
import { isArray } from "@nexoracle/utils"; // ESM

console.log(isArray([1, 2, 3])); // Output: true
console.log(isArray("not an array")); // Output: false
```

---

## Is Equal Objects

Compare 2 Objects and check if they Equal or not.

**Browser Support: ✅ Yes**

#### Parameters:

- **obj1** (Object) - First object.
- **obj2** (Object) - Second object.

#### Returns:

`true` if the input is both objects are equal otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isEqualObj } = require("@nexoracle/utils"); // CJS
import { isEqualObj } from "@nexoracle/utils"; // ESM

console.log(isEqualObj({ key: "value" }, { key: "value" })); // Output: true
console.log(isEqualObj({ key: "value" }, { key: "different" })); // Output: false
```

---

## Empty Object

check if the input object is empty.

**Browser Support: ✅ Yes**

#### Parameter:

- **obj** (object) - Input object.

#### Returns:

`true` if the input is object is empty otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isEmptyObject } = require("@nexoracle/utils"); // CJS
import { isEmptyObject } from "@nexoracle/utils"; // ESM

console.log(isEmptyObject({})); // Output: true
console.log(isEmptyObject({ key: "value" })); // Output: false
```

---

## Is Object

check if the input is object or not.

**Browser Support: ✅ Yes**

#### Parameter:

- **value** (Object) - Input value.

#### Returns:

`true` if the input is object otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isObject } = require("@nexoracle/utils"); // CJS
import { isObject } from "@nexoracle/utils"; // ESM

console.log(isObject({ key: "value" })); // Output: true
console.log(isObject("not an object")); // Output: false
```

---

## Is Number

check if the input is number or not.

**Browser Support: ✅ Yes**

#### Parameter:

- **input** (Number) - String or Number.

#### Returns:

`true` if the input is number otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isNumber } = require("@nexoracle/utils"); // CJS
import { isNumber } from "@nexoracle/utils"; // ESM

console.log(isNumber(123)); // Output: true
console.log(isNumber("123")); // Output: true
console.log(isNumber("abc")); // Output: false
```

---

## Is Gmail

Check if a string is a valid Gmail address.

**Browser Support: ✅ Yes**

#### Parameter:

- **gmail** (string) - Input email.

#### Returns:

`boolean` - `true` if the email is a valid Gmail address, otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isGmail } = require("@nexoracle/utils"); // CJS
import { isGmail } from "@nexoracle/utils"; // ESM

console.log(isGmail("test@gmail.com")); // Output: true
console.log(isGmail("test@example.com")); // Output: false
```

---

## Is Email

Check if a string is a valid Email address.

**Browser Support: ✅ Yes**

#### Parameter:

- **email** (string) - Input email.

#### Returns:

`boolean` - `true` if the string is a valid Email address, otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isEmail } = require("@nexoracle/utils"); // CJS
import { isEmail } from "@nexoracle/utils"; // ESM

console.log(isEmail("test@example.com")); // Output: true
console.log(isEmail("invalid-email")); // Output: false
```

---

## To Boolean

Convert a string to a boolean or string representation of a boolean.

**Browser Support: ✅ Yes**

#### Parameters:

- **str** (string) - Input string options (true|yes|ok|act|sure|enable).
- **returnBool** (boolean, optional) - If true, returns a boolean; otherwise, returns a string. default: `true`

#### Returns:

`boolean | string` - Boolean or string representation of the `boolean`.

#### Example Usage:

```js
// Import the function
const { toBool } = require("@nexoracle/utils"); // CJS
import { toBool } from "@nexoracle/utils"; // ESM

console.log(toBool("true")); // Output: true
console.log(toBool("false", false)); // Output: "false"
```

---
