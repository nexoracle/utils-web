# URL Components

## Validating URL Components

This sections allows you to Validate different URL components. Such as extracting urls, url components(domain, path, query, etc) and length of url.

## Extracting URL from String

This allows you to extract the first URL from a string.

**Browser Support: ✅ Yes**

#### Parameter:

- **str** (String) - A String containing URL

#### Returns:

First `URL` from the String or `null` if no URL found.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.extractUrlFromString("Visit https://nexoracle.com for more info")); // Output: "https://nexoracle.com"
console.log(urlValidator.extractUrlFromString("No URL here")); // Output: null
```

---

## Extract All URLs from String

This allows you to extract the all available URLs from a string.

**Browser Support: ✅ Yes**

#### Parameter:

- **str** (String) - A String containing URLs.

#### Returns:

`Array` of extracted URLs or `null` if no URLs are found.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.extractAllUrlFromString("Visit https://nexoracle.com and https://api.nexoracle.com")); // Output: ["https://nexoracle.com", "https://apinexoracle.com"]
console.log(urlValidator.extractAllUrlFromString("No URLs here")); // Output: null
```

---

## Checking Protocol

Check if the given URL contains specific Protocol or not.

**Browser Support: ✅ Yes**

#### Parameters:

- **url** (String) - A string containing URL with specific protocol.
- **protocol** (String) - Protocol to check (e.g., "https").

#### Returns:

`boolean` indicating whether the URL contains specific protocol (`true`) or not (`false`).

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.hasProtocol("https://example.com", "https")); // Output: true
console.log(urlValidator.hasProtocol("http://example.com", "https")); // Output: false
```

---

## Check Domain

Check if the given URL contains Domain or not.

**Browser Support: ✅ Yes**

#### Parameters:

- **url** (String) - A string containing URL domain.
- **domain** (String) - Domain to check (e.g., "nexoracle.com").

#### Returns:

`boolean` - `true` if the URL has the specified domain, otherwise `false`.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.hasDomain("https://nexoracle.com", "nexoracle.com")); // Output: true
console.log(urlValidator.hasDomain("http://nexoracle.ai", "nexoracle.com")); // Output: false
```

---

## Has Path

Check if the given URL contains specific path or not.

**Browser Support: ✅ Yes**

#### Parameters:

- **url** (String) - A string containing URL with specific protocol.
- **path** (String) - Protocol to check.

#### Returns:

`boolean` indicating whether the URL contains specific path (`true`) or not (`false`).

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.hasPath("https://nexoracle.com/features", "features")); // Output: true
console.log(urlValidator.hasPath("https://example.com", "path/to/resource")); // Output: false
```

---

## Check Query Parameters

Check if the given URL contains specific Query Params or not.

**Browser Support: ✅ Yes**

#### Parameters:

- **url** (String) - A string containing URL with query params.
- **param** (String) - Query Parameter to check.

#### Returns:

`boolean` indicating whether the URL contains query parameter (`true`) or not (`false`).

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.hasQueryParam("https://nexoracle.com?param=value", "param")); // Output: true
console.log(urlValidator.hasQueryParam("https://example.com", "param")); // Output: false
```

---

## Has Fragment

Check if a URL has a specific fragment.

**Browser Support: ✅ Yes**

#### Parameters:

- **url** (String) - A string containing URL with fragment.
- **fragment** (String) - Fragment to check.

#### Returns:

`boolean` indicating whether the URL contains specific fragment (`true`) or not (`false`).

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.hasFragment("https://api.nexoracle.com#contact", "contact")); // Output: true
console.log(urlValidator.hasFragment("https://example.com", "section")); // Output: false
```

---

## Extract Components

Extract components (protocol, domain, path, query, fragment) from a URL.

**Browser Support: ✅ Yes**

#### Parameter:

- **url** (String) - A string containing URL with components.

#### Returns:

`object` - Object containing URL components or `null` if the URL is invalid.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.extractComponents("https://api.nexoracle.com/downloader/yt-play?apikey=your_key&quality=480&q=295"));
// Output: { protocol: 'https', domain: 'api.nexoracle.com', path: '/downloader/yt-play', query: 'apikey=your_key&quality=480&q=295', fragment: '' }
console.log(urlValidator.extractComponents("invalid-url")); // Output: null
```

---

## Check Length

Check if a URL is within a specified maximum length.

**Browser Support: ✅ Yes**

#### Parameters:

- **url** (String) - A string containing URL.
- **maxLength** (Number) - Maximum allowed length.

#### Returns:

`boolean` - `true` if the URL is within the specified length, otherwise `false`.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

cconsole.log(urlValidator.isWithinLength("https://nexoracle.com", 25)); // Output: true
console.log(urlValidator.isWithinLength("https://example.com/very/long/url", 20)); // Output: false
```

---

## Has Valid Characters

Check if a URL contains only valid characters.

**Browser Support: ✅ Yes**

#### Parameters:

- **url** (String) - A string containing valid URL.

#### Returns:

`boolean` indicating whether the URL is valid (`true`) or not (`false`).

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

console.log(urlValidator.hasValidCharacters("https://nexoracle.com")); // Output: true
console.log(urlValidator.hasValidCharacters("https://example.com/with spaces")); // Output: false
```

---

## Is URL Accessible

This checks if the URL is accessible or not. It makes https request to the given URL, depending on its status code it determines that the URL is valid or not.

#### Parameter:

- **url** (String) - A String containing a valid URL.

#### Returns:

`Promise<Boolean>` - `true` if the url is valid and acessible or `false` if the url isn't accessible.

#### Examples Usage:

```js
const { isURLAccessible } = require("@nexoracle/utils"); // CJS
import { isURLAccessible } from "@nexoracle/utils"; // ESM

isURLAccessible("https://nexoracle.com").then((res) => {
  console.log(res); // Output: { success: true, status: 200, statusText: 'OK' }
});
isURLAccessible("https://example.com").then((res) => {
  console.log(res); // Output: { success: false, error: 'read ECONNRESET' }
});
```

---

## Build URL

Build URL with path, query, fragment.

#### Parameters:

- **baseUrl** (String) - A Valid URL.
- **options** - `Object` containing path, query, fragment.

#### Returns:

Full built `URL` from path, query, fragment.

#### Example Usage:

```js
// Import the function
const { buildUrl } = require("@nexoracle/utils"); // CJS
import { buildUrl } from "@nexoracle/utils"; // ESM

console.log(buildUrl("https://example.com", { query: { page: 1, sort: "desc" } }));
// Returns: "https://example.com/?page=1&sort=desc"

console.log(buildUrl("https://example.com", { path: "products", query: { category: "books", available: true } }));
// Returns: "https://example.com/products?category=books&available=true"

console.log(buildUrl("https://example.com/about", { hash: "contact" }));
// Returns: "https://example.com/about#contact"

console.log(buildUrl("https://example.com", { path: "dashboard", query: { view: "compact", refresh: 30 }, fragment: "settings" }));
// Returns: "https://example.com/dashboard?view=compact&refresh=30#settings"
```

## Parse URL

Parse given URL into its components.

#### Parameter:

- **url** (String) - A Valid URL.

#### Returns:

`Object` containg all components of URL.

#### Example Usage:

```js
// Import the function
const { parseURL } = require("@nexoracle/utils"); // CJS
import { parseURL } from "@nexoracle/utils"; // ESM

console.log(parseURL("https://user:pass@api.example.com:8080/data?q=ts&limit=10#results"));
/*
{
  href: 'https://user:pass@api.example.com:8080/data?q=ts&limit=10#results',
  origin: 'https://api.example.com:8080',
  protocol: 'https',
  username: 'user',
  password: 'pass',
  host: 'api.example.com:8080',
  hostname: 'api.example.com',
  port: '8080',
  pathname: '/data',
  search: '?q=ts&limit=10',
  hash: '#results',
  query: { q: 'ts', limit: '10' },
  searchParams: URLSearchParams { 'q' => 'ts', 'limit' => '10' },
  fragment: 'results',
  isSecure: true,
  isLocal: false,
  isAbsolute: true,
  hasAuth: true
}
*/
```
