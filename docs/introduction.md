---
sidebar_position: 1
title: Introduction
---

## Overview

`@nexoracle/utils` is a TypeScript utility library that offers a wide range of helper functions, modules, and tools to streamline your development process. Whether you're working on a small project or a large-scale application, this library provides essential utilities to enhance productivity and reduce boilerplate code.

:::note
This library is written in TypeScript and is fully compatible with JavaScript projects. If you're not familiar with TypeScript or JavaScript, it is recommended to learn the basics before using this library.
:::

## Features

- **Dependency-Free**: No external dependencies, ensuring fast performance and minimal overhead.
- **Lightweight**: Optimized for efficiency with minimal bundle size.
- **Comprehensive Utilities**: Includes a wide range of helper functions and modules.
- **CommonJS & ESM Support**: Fully compatible with both module systems.
- **TypeScript Native**: Written in TypeScript for full type safety and enhanced developer experience.
- **Cross-Platform**: Works seamlessly in Node.js and browser environments.
- **Browser Compatible**: Many functions and modules are optimized for browser usage.

## Installation

### Node.js

Adding `@nexoracle/utils` to your project is straightforward. Simply run the following command:

```bash npm2yarn
npm install @nexoracle/utils
```

Since `@nexoracle/utils` is actively maintained, updates are released regularly on **npm**. However, if you want to use the latest features or contribute to the development, you can install the package directly from the GitHub repository:

```bash
npm install git+https://github.com/nexoracle/utils.git
```

### Browser

For browser environments, you can include the library via CDN:

#### ES Module (ESM)

```html
<script type="module">
  import { getRandom } from "https://cdn.jsdelivr.net/npm/@nexoracle/utils@1.1.17/dist/browser/index.mjs";

  console.log(getRandom());
</script>
```

#### Global Script

```html
<script src="https://cdn.jsdelivr.net/npm/@nexoracle/utils@1.1.17/dist/browser/index.global.js"></script>
<script>
  // Access utilities through the global 'utils' object
  const { getRandom } = utils;

  console.log(getRandom());
</script>
```

#### CommonJS (CJS)

For reference, the CommonJS version is also available at:

```
https://cdn.jsdelivr.net/npm/@nexoracle/utils@1.1.17/dist/browser/index.cjs
```

#### Things to Consider

- Functions and modules that are browser compatible will be marked with **Browser Support: ✅ Yes**.
- Code examples remain consistent across environments - the functionality works the same way whether in Node.js or browser.
- When using in browsers, simply replace the import source with the appropriate CDN URL shown above.

## Module Support

`@nexoracle/utils` supports both **CommonJS (CJS)** and **ECMAScript Modules (ESM)**. You can use it in both modern JavaScript projects and legacy Node.js applications without compatibility issues. Additionally, browser-compatible builds ensure you can leverage the same powerful utilities across all your web applications.

## Why Choose @nexoracle/utils?

1. **Zero Dependencies** - No bloat, no unnecessary packages.
2. **Optimized for TypeScript** - Provides full typings for a better development experience.
3. **Actively Maintained** - Regular updates and improvements.
4. **Performance-Focused** - Designed to run efficiently with minimal performance impact.
5. **Versatile** - Suitable for both frontend and backend applications.
6. **Cross-Platform** - Unified API that works consistently across Node.js and modern browsers.

## License

`@nexoracle/utils` is licensed under the **[Apache-2.0 License](https://github.com/nexoracle/utils/blob/main/LICENSE)**, making it free for both personal and commercial use.
