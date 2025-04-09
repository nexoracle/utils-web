# Format Functions

## Query to String

The `toQueryString` function converts an object to a URL query string.

**Browser Support: ✅ Yes**

#### Parameters:

- **params** (`object`): Query parameters.

#### Returns:

A `string` representing the URL-encoded query string.

#### Example Usage:

```js
// Import the function
const { toQueryString } = require("@nexoracle/utils"); // CJS
import { toQueryString } from "@nexoracle/utils"; // ESM

console.log(toQueryString({ name: "John", age: 30 })); // Output: 'name=John&age=30'

console.log(toQueryString({ search: "hello world", limit: 10 })); // Output: 'search=hello+world&limit=10'

console.log(toQueryString({ tags: ["javascript", "nodejs"], page: 1 }));
// Output: 'tags=javascript&tags=nodejs&page=1'
```

---

## Format Number

The `formatNumber` function formats a number with commas.

**Browser Support: ✅ Yes**

#### Parameters:

- **num** (`number`): The input number.

#### Returns:

A `string` representing the formatted number.

#### Example Usage:

```js
// Import the function
const { formatNumber } = require("@nexoracle/utils"); // CJS
import { formatNumber } from "@nexoracle/utils"; // ESM

console.log(formatNumber(1234567890)); // Output: '1,234,567,890'

console.log(formatNumber(1234.56)); // Output: '1,234.56'
```

---

## Format Bytes

The `formatBytes` function converts bytes into human-readable units.

**Browser Support: ✅ Yes**

#### Parameters:

- **bytes** (`number`): The input size in bytes.
- **decimals** (`number`, optional): Decimal places, default: `2`.

#### Returns:

A `string` representing the formatted size.

#### Example Usage:

```js
// Import the function
const { formatBytes } = require("@nexoracle/utils"); // CJS
import { formatBytes } from "@nexoracle/utils"; // ESM

console.log(formatBytes(1024)); // Output: '1.00 KB'

console.log(formatBytes(1048576)); // Output: '1.00 MB'

console.log(formatBytes(1073741824, 1)); // Output: '1.0 GB'
```

---

## Format JSON

The `formatJSON` function pretty-prints JSON with specified indentation.

**Browser Support: ✅ Yes**

#### Parameters:

- **data** (`unknown`): Data to format as JSON.
- **spaces** (`number`, optional): Indentation spaces, default: `2`.

#### Returns:

A `string` representing the formatted JSON or `null` if an error occurs.

#### Example Usage:

```js
// Import the function
const { formatJSON } = require("@nexoracle/utils"); // CJS
import { formatJSON } from "@nexoracle/utils"; // ESM

const user = { name: "John", age: 30, hobbies: ["reading", "coding"] };
console.log(formatJSON(user));
/* Output:
{
  "name": "John",
  "age": 30,
  "hobbies": [
    "reading",
    "coding"
  ]
}
*/

// Format with custom spacing (4)
console.log(formatJSON(user, 4));
/* Output:
{
    "name": "John",
    "age": 30,
    "hobbies": [
        "reading",
        "coding"
    ]
}
*/

// Format nested object
const nestedObj = { person: { name: "John", address: { city: "New York", zip: "10001" } } };
console.log(formatJSON(nestedObj));
/* Output:
{
  "person": {
    "name": "John",
    "address": {
      "city": "New York",
      "zip": "10001"
    }
  }
}
*/
```

---

## Runtime

The `runtime` function converts seconds into a human-readable duration.

**Browser Support: ✅ Yes**

#### Parameters:

- **seconds** (`number`): The duration in seconds.
- **capitalize** (`boolean`, optional): Whether to capitalize units, default is `false`.
- **day/hour/minute/second** (`string`, optional): Custom unit names.

#### Returns:

A `string` representing the formatted duration.

#### Example Usage:

```js
// Import the function
const { runtime } = require("@nexoracle/utils"); // CJS
import { runtime } from "@nexoracle/utils"; // ESM

console.log(runtime(90061));
// Output: "1 day, 1 hour, 1 minute, 1 second"

console.log(runtime(90061, true));
// Output: "1 Day, 1 Hour, 1 Minute, 1 Second"

console.log(runtime(90061, false, "día", "hora", "minuto", "segundo"));
// Output: "1 día, 1 hora, 1 minuto, 1 segundo"

console.log(runtime(45)); // Output: "45 seconds"

console.log(runtime(125)); // Output: "2 minutes, 5 seconds"
```
