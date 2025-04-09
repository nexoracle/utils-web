# Array Functions

## Randomize Array

The `randomizeArray` function shuffles the elements of an array in random order.

**Browser Support: ✅ Yes**

#### Parameters:

- **arr** (`Array`): The input array to be shuffled.

#### Returns:

A `shuffled array` with elements rearranged randomly.

#### Example Usage:

```js
// Import the function
const { randomizeArray } = require("@nexoracle/utils"); // CJS
import { randomizeArray } from "@nexoracle/utils"; // ESM

console.log(randomizeArray([1, 2, 3, 4, 5])); // Output: [3, 1, 5, 2, 4]
```

---

## Unique Array

The `uniqueArray` function removes duplicate values from an array, returning only unique elements.

**Browser Support: ✅ Yes**

#### Parameters:

- **arr** (`Array`): The input array containing duplicate values.

#### Returns:

An `array` with unique values.

#### Example Usage:

```js
// Import the function
const { uniqueArray } = require("@nexoracle/utils"); // CJS
import { uniqueArray } from "@nexoracle/utils"; // ESM

console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
```

---

## Flatten the Array

The `flattenArray` function flattens nested arrays into a single-level array.

**Browser Support: ✅ Yes**

#### Parameters:

- **arr** (`Array`): The input array that may contain nested arrays.

#### Returns:

A `flattened array` with all nested elements combined into one array.

#### Example Usage:

```js
// Import the function
const { flattenArray } = require("@nexoracle/utils"); // CJS
import { flattenArray } from "@nexoracle/utils"; // ESM

console.log(flattenArray([1, [2, [3, [4, 5]]], 6])); // Output: [1, 2, 3, 4, 5, 6]

console.log(flattenArray([1, [], 2, [3, []], 4])); // Output: [1, 2, 3, 4]
```

---

## Random Element from Array

The `randomElement` function selects a random element from an array.

**Browser Support: ✅ Yes**

#### Parameters:

- **arr** (`Array`): The input array.

#### Returns:

A `random element` from the array.

#### Example Usage:

```js
// Import the function
const { randomElement } = require("@nexoracle/utils"); // CJS
import { randomElement } from "@nexoracle/utils"; // ESM

console.log(randomElement(["apple", "banana", "orange", "grape"])); // Output: "grape"
```
