# Perf Hooks

## Performance Monitoring Functions

Node.js performance measurement utilities with nanosecond precision.
Track execution times, event loop delays, and runtime metrics with automatic error handling.
Designed for both real-time monitoring and benchmarking scenarios.

**These** are some basic but refined functions made using built-in **node:perf_hooks**.
Please visit [**node:perf_hooks**](https://nodejs.org/api/perf_hooks.html) for more detailed documentation and usage.

### Now

Gets high-resolution millisecond timestamp.

#### Returns:

`Number` - Current `timestamp` in ms, `-1` on error.

#### Basic Usage:

```js
// Import the function
const { perf_hooks } = require("@nexoracle/utils"); // CJS
import { perf_hooks } from "@nexoracle/utils"; // ESM

console.log(perf_hooks.now()); // Output: 139.9343
```

---

### Get Time Origin

Gets Node.js process start timestamp.

#### Returns:

`Number` - Unix `timestamp` in ms.

#### Basic Usage:

```js
// Import the function
const { perf_hooks } = require("@nexoracle/utils"); // CJS
import { perf_hooks } from "@nexoracle/utils"; // ESM

console.log(`Node.js started at: ${new Date(perf_hooks.getTimeOrigin()).toISOString()}`);
// Output: Node.js started at: 2025-03-25T14:42:48.856Z
```

---

### Measure Execution Time

Measures function execution duration.

#### Parameters:

- **fn** (Function) - Function to measure.
- **args** (Any) - Arguments to pass to function.

#### Returns:

`Number` - Execution time of function in ms.

#### Basic Usage:

```js
// Import the function
const { perf_hooks } = require("@nexoracle/utils"); // CJS
import { perf_hooks } from "@nexoracle/utils"; // ESM

const hashTime = perf_hooks.measureExecutionTime(() => {
  fetch("https://api.nexoracle.com");
});
console.log(`fetching took ${hashTime.toFixed(3)}ms`); // Output: fetching took 156.442ms
```

---

### Monitor Event Loop Delay

Tracks event loop latency with histogram statistics.

#### Returns:

`{Object}` - Histogram with enable/disable methods.

#### Basic Example:

```js
// Import the function
const { perf_hooks } = require("@nexoracle/utils"); // CJS
import { perf_hooks } from "@nexoracle/utils"; // ESM

const histogram = perf_hooks.monitorEventLoopDelay();
histogram.enable();

setTimeout(() => {
  console.log("Event Loop Delay Metrics:");
  console.log(`Min: ${histogram.min}ms`);
  console.log(`Max: ${histogram.max}ms`);
  console.log(`Mean: ${histogram.mean.toFixed(2)}ms`);
  histogram.disable();
}, 3000);

// Output:
/*
Event Loop Delay Metrics:
Min: 9420800ms
Max: 37584895ms
Mean: 16475102.24ms
*/
```

---

### Node Performance Timing

Gets Node.js bootstrap timings.

#### Returns:

`{Object}` - Node.js performance timing object.

#### Basic Example:

```js
// Import the function
const { perf_hooks } = require("@nexoracle/utils"); // CJS
import { perf_hooks } from "@nexoracle/utils"; // ESM

const timings = perf_hooks.getNodePerformanceTiming();
console.log("Node.js Performance Timings:");
console.log(`- Startup: ${timings.bootstrapComplete}ms`);
console.log(`- V8 initialized: ${timings.v8Start}ms`);
console.log(`- Event loop started: ${timings.loopStart}ms`);
// Output:

/*
Node.js Performance Timings:
- Startup: 41.23440000042319ms
- V8 initialized: 10.038199998438358ms
- Event loop started: -1ms
*/
```

---
