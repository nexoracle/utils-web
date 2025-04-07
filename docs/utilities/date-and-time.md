# Date and Time

## Date

The `getDate` function returns a formatted date string from a given date or the current date if no input is provided.

#### Parameters:

- **date** (optional): A `Date` object, string, number (timestamp), or options object.
- **options** (optional): An object with formatting options:
  - **format** (`String`, default: `DD-MM-YY`) - Defines the output format of the date.
  - **utc** (`Boolean`, default: `false`) - If `true`, returns the date in UTC.
  - **timezone** (`String`, default: `null`) - Specifies a timezone.

#### Returns:

A `string` representing the formatted date.

#### Example Usage:

```js
// Import the function
const { getDate } = require("@nexoracle/utils"); // CJS
import { getDate } from "@nexoracle/utils"; // ESM

console.log(getDate()); // Current date (default YYYY-MM-DD). Output: '23-03-2025'
console.log(getDate({ format: "YYYY-MM-DD" })); // Output: "2025-03-23"
console.log(getDate("2023-10-01")); // Output: "01-10-2023"
console.log(getDate({ utc: true })); // Output: "23-03-2025" (UTC date)
console.log(getDate({ timezone: "Asia/Karachi" })); // Output: "23-03-2025" (Pakistan Standard Time)
console.log(getDate(1696156800000)); // Output: "01-10-2023"
console.log(getDate({ format: "MM/DD/YYYY" })); // Output: "10/01/2023"
console.log(getDate({ format: "YYYY/MM/DD" })); // Output: "2025/03/23"
```

---

## Time

The `getTime` function returns a formatted time string based on the given date or current time.

#### Parameters:

- **date** (optional): A `Date` object, string, number (timestamp), or options object.
- **options** (optional): An object with formatting options:
  - **utc** (`Boolean`, default: `false`) - If `true`, returns time in UTC.
  - **timezone** (`String`, default: `null`) - Specifies a timezone.
  - **format12Hour** (`Boolean`, default: `true`) - If `true`, returns 12-hour format; otherwise, 24-hour format.

#### Returns:

A `string` representing the formatted time.

#### Example Usage:

```js
// Import the function
const { getTime } = require("@nexoracle/utils"); // CJS
import { getTime } from "@nexoracle/utils"; // ESM

console.log(getTime()); // Current time (default 12-hour). Output: "03:47:28 PM"
console.log(getTime({ format12Hour: false })); // 24-hour format, current time. Output: "15:47:28"
console.log(getTime({ utc: true })); // UTC time. Output: "10:47:28 AM"
console.log(getTime({ timezone: "Asia/Karachi" })); // Timezone time. Output: "03:47:28 PM"
console.log(getTime({ format12Hour: false, timezone: "Asia/Karachi" })); // 24-hour format, timezone time. Output: "15:47:28"
console.log(getTime("2025-12-25T10:00:00Z")); // Specific date. Output: "03:00:00 PM"
console.log(getTime(1735428000000)); // Timestamp format. Output: "04:20:00 AM"
```

---

## Time Ago

The `timeAgo` function converts a date to a human-readable relative time format.

#### Parameters:

- **date** (`Date`): The input date.

#### Returns:

A `string` representing the relative time from the given date.

#### Example Usage:

```js
// Import the function
const { timeAgo } = require("@nexoracle/utils"); // CJS
import { timeAgo } from "@nexoracle/utils"; // ESM

console.log(timeAgo(new Date())); // Output: Just now
console.log(timeAgo(new Date(Date.now() - 5 * 60 * 1000))); // Output: 5 minutes ago
console.log(timeAgo(new Date(Date.now() - 3 * 60 * 60 * 1000))); // Output: 3 hours ago
console.log(timeAgo(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000))); // Output: 2 days ago
console.log(timeAgo(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))); // Output: 1 month ago
```

---

## TimeZone
The `getTimeZone` one function retrieves the `IANA` timezone from the system’s locale settings using the `Intl` API.

#### Returns:
- `String` - Returns the IANA timezone string (e.g., "Asia/Karachi").

#### Example Usage:

```js
// Import the function
const { getTimeZone } = require("@nexoracle/utils"); // CJS
import { getTimeZone } from "@nexoracle/utils"; // ESM

console.log(getTimeZone()) // Output: Your current timezone
```