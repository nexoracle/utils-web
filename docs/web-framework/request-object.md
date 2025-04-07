---
sidebar_position: 5
title: Request Object
---

## Request Object in Apex

The Request object in Apex is an extension of Node.js's built-in IncomingMessage class. It provides additional properties and methods to make working with HTTP requests easier.

## Basic Properties

```javascript
router.get("/demo", (req, res) => {
  console.log(req.method); // HTTP method (GET, POST, etc.)
  console.log(req.path); // URL path without query string
  console.log(req.query); // Parsed query parameters
  console.log(req.params); // Route parameters
  console.log(req.headers); // HTTP headers
  console.log(req.body); // Parsed request body (requires bodyParser middleware)
  console.log(req.originalUrl); // Original URL requested
  console.log(req.baseUrl); // Base URL
});
```

## Client Information

```javascript
router.get("/info", (req, res) => {
  // Client IP address
  console.log(req.ip); // Client IP address based on trust proxy setting
  console.log(req.ips); // Array of forwarded IPs if behind reverse proxy
  console.log(req.remoteAddress); // Raw remote address

  // Headers for proxies
  console.log(req.xForwardedFor); // X-Forwarded-For header value
  console.log(req.cfConnectingIP); // Cloudflare-specific header
  console.log(req.trueClientIP); // True-Client-IP header

  // Connection properties
  console.log(req.protocol); // 'http' or 'https'
  console.log(req.secure); // Whether connection is secure (HTTPS)
  console.log(req.hostname); // Host without port number
});
```

## Working with Headers

```javascript
router.get("/headers", (req, res) => {
  // Get a specific header (case-insensitive)
  const contentType = req.get("content-type");

  // Check if the request was made via AJAX
  const isAjax = req.xhr;

  res.json({
    contentType,
    isAjax,
    allHeaders: req.headers,
  });
});
```

## Content Negotiation

```javascript
router.get("/content", (req, res) => {
  // Check if client accepts a specific content type
  const acceptsJson = req.accepts("application/json");
  const acceptsHtml = req.accepts("text/html");

  // Check if content is of specific type
  const isJson = req.is("json");
  const isForm = req.is("urlencoded");

  // Check if response cache is still fresh
  const isFresh = req.fresh;
  const isStale = req.stale;

  res.json({
    acceptsJson,
    acceptsHtml,
    isJson,
    isForm,
    isFresh,
    isStale,
  });
});
```

## Complete Request Object Example

```javascript
const { apex } = require("@nexoracle/utils");
const router = new apex.Router();

router.use(apex.bodyParser());

router.post("/profile", (req, res) => {
  console.log("Request Information:");
  console.log("-------------------");
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  console.log(`Query Parameters: ${JSON.stringify(req.query)}`);
  console.log(`Body: ${JSON.stringify(req.body)}`);
  console.log(`IP Address: ${req.ip}`);
  console.log(`User Agent: ${req.get("user-agent")}`);
  console.log(`Content Type: ${req.get("content-type")}`);
  console.log(`Protocol: ${req.protocol}`);
  console.log(`Secure: ${req.secure}`);
  console.log(`XHR Request: ${req.xhr}`);

  res.json({
    received: {
      method: req.method,
      path: req.path,
      query: req.query,
      body: req.body,
    },
  });
});

const server = apex.createServer(router);
server.listen(3000);
```
