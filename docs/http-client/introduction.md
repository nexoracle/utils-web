---
sidebar_position: 1
title: Introduction
---

## Axium

Axium is a lightweight, dependency-free HTTP client for JavaScript and TypeScript applications, inspired by Axios. It provides a simple and powerful interface for making HTTP requests using the native Fetch API. Built with modern JavaScript practices, Axium offers a promise-based architecture that simplifies asynchronous operations while maintaining a familiar API for developers accustomed to other HTTP clients.

At its core, Axium leverages the browser's built-in Fetch API rather than XMLHttpRequest, resulting in a smaller footprint and better performance. This design choice eliminates external dependencies while providing enhanced features like request/response interceptors, automatic content-type detection, and sophisticated error handling.

## Features

- **Promise-based API**: Clean, chainable syntax for handling asynchronous operations
- **Zero Dependencies**: Built entirely on the native Fetch API with no external libraries
- **Request and Response Interceptors**: Modify requests and responses globally or per-instance
- **Automatic Request/Response Transforms**: JSON serialization/parsing handled automatically
- **XSRF Protection**: Built-in client-side protection against cross-site request forgery
- **Progress Tracking**: Monitor upload and download progress in real-time
- **Request Timeout**: Automatically cancel requests that take too long
- **Request Cancellation**: Cancel requests using the standard AbortController API
- **Retry Mechanism**: Configurable retry logic for failed requests with delay options
- **Content-Type Detection**: Automatic response parsing based on Content-Type headers
- **Parallel Requests**: Execute and manage multiple concurrent requests easily
- **Form Data Support**: Simple APIs for form data and URL-encoded submissions
- **Buffer Support**: Handle binary data with ease
- **TypeScript Support**: First-class TypeScript definitions for enhanced developer experience
- **Browser and Node.js Compatible**: Works seamlessly in both environments

## Installation

```js
// Import the function
const { axium } = require("@nexoracle/utils"); // CJS
import { axium } from "@nexoracle/utils"; // ESM
```

## Why Axium?

- **Modern**: Built with the latest JavaScript features and best practices
- **Lightweight**: Minimal footprint compared to other HTTP clients
- **Flexible**: Powerful interceptor system allows for easy customization
- **Type-Safe**: First-class TypeScript support for better developer experience
- **Familiar API**: Similar to Axios, making it easy to adopt if you're coming from Axios

## Documentation

For more detailed documentation, see:

- [Core Concepts](./core-concepts.md)
- [API Reference](./api-reference.md)
- [Examples](./examples.md)
