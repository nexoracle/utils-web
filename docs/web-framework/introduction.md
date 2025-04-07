---
sidebar_position: 1
title: Introduction
---

## Apex Web Framework

**Apex** is a lightweight, Express-like web framework for Node.js applications, built on top of the native `http` module. Built with TypeScript, Apex provides essential functionality for creating web servers and APIs with minimal overhead, making it perfect for small to medium applications.

## Overview

Apex delivers core web server functionality including:

- HTTP server creation
- Routing with path parameters
- Middleware support
- Request and response enhancement
- Static file serving
- Rate limiting
- Cors
- Body parsing
- View rendering (basic EJS support)

## Key Features

- **Lightweight & Fast**: Built on Node.js's native HTTP module for minimal overhead
- **Express-like API**: Familiar routing and middleware patterns for Express users
- **TypeScript Support**: Full TypeScript integration with enhanced type definitions
- **Middleware System**: Robust middleware chain for request processing
- **Route Parameters**: Support for dynamic routes with named parameters
- **Static File Serving**: Built-in middleware for serving static files
- **Body Parsing**: Parse JSON, URL-encoded, and plain text request bodies
- **Rate Limiting**: Protect your API with configurable rate limiting
- **View Rendering**: Basic template rendering support with customizable engines
- **Request/Response Extensions**: Enhanced request and response objects with utility methods

## Installation

```js
// Import the function
const { apex } = require("@nexoracle/utils"); // CJS
import { apex } from "@nexoracle/utils"; // ESM
```

## Quick Start

```js
// Create a new router
const router = new apex.Router();

// Add middleware
router.use(apex.bodyParser());

// Define a route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to Apex!" });
});

// Create and start server
const server = apex.createServer(router);
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

## Core Components

Apex consists of several core components:

1. **Router**: Handles route definitions and request processing
2. **Request/Response**: Enhanced HTTP objects with additional functionality
3. **Middleware**: Functions that process requests before reaching route handlers
4. **Server**: HTTP server that handles incoming connections

## When to Use Apex

Apex is ideal for:

- Small to medium web applications
- APIs with straightforward requirements
- Projects where minimizing dependencies is important
- Learning web framework concepts
- Prototyping and quick projects

For more complex applications with advanced requirements, you might consider using more feature-rich frameworks like Express or NestJS.

## Documentation Structure

The following documentation sections provide detailed information about using Apex:

1. [Router](./router.md) - Creating and configuring routers
2. [Request Object](./request-object.md) - Working with incoming request data
3. [Response Object](./response-object.md) - Sending responses to clients
4. [Middleware](./middleware.md) - Using and creating middleware
5. [Static Files](./serving-static.md) - Serving static content
6. [Views Rendering](./views-and-rendering.md) - Rendering templates
