---
sidebar_position: 6
title: Response Object
---

## Response Object in Apex

The Response object in Apex extends Node.js's built-in ServerResponse class, providing convenient methods for sending different types of HTTP responses.

## Setting Status Code

```javascript
router.get("/status-demo", (req, res) => {
  // Set status code
  res.status(201);

  // Set status and send response
  res.status(201).json({ created: true });

  // Common status codes:
  // 200 - OK
  // 201 - Created
  // 204 - No Content
  // 400 - Bad Request
  // 401 - Unauthorized
  // 403 - Forbidden
  // 404 - Not Found
  // 500 - Internal Server Error
});
```

## Sending Responses

```javascript
router.get("/response-types", (req, res) => {
  // Choose one of these response methods:

  // Send JSON
  res.json({ message: "This is JSON" });

  // Send HTML
  res.html("<h1>This is HTML</h1>");

  // Send plain text
  res.text("This is plain text");

  // Generic send (auto-detects content type)
  res.send("Auto-detected as text");
  res.send({ object: "Auto-detected as JSON" });
  res.send(Buffer.from("Binary data"));

  // Send a file
  res.sendFile("/path/to/file.pdf");
});
```

## Working with Headers

```javascript
router.get("/headers-demo", (req, res) => {
  // Set a single header
  res.setHeader("X-Custom-Header", "custom value");

  // Set multiple headers
  res.set({
    "X-API-Version": "1.0",
    "X-Powered-By": "Apex",
  });

  // Get a header value
  const contentType = res.getHeader("Content-Type");

  // Remove a header
  res.removeHeader("X-Unnecessary");

  // Send response with headers
  res.json({ message: "Response with custom headers" });
});

// write method
router.get("/example", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Maher</h1>");
  res.write("<h2>Zubair</h2>");
  res.end();
});
```

## Content Type Management

```javascript
router.get("/content-types", (req, res) => {
  // Set content type
  res.type("json"); // application/json
  res.type("html"); // text/html
  res.type("txt"); // text/plain
  res.type("png"); // image/png
  res.type("application/pdf"); // explicit MIME type

  // Set charset
  res.charset("utf-8");

  // Content negotiation
  res.format({
    "text/html": () => {
      res.html("<h1>HTML Response</h1>");
    },
    "application/json": () => {
      res.json({ format: "json" });
    },
    "text/plain": () => {
      res.text("Plain text response");
    },
    default: () => {
      res.status(406).send("Not Acceptable");
    },
  });
});
```

## Redirects and Location

```javascript
router.get("/old-page", (req, res) => {
  // Redirect to new URL (302 Found)
  res.redirect("/new-page");
});

router.post("/create-item", (req, res) => {
  const id = 123; // ID of created resource

  // Set location header without redirect
  res.location(`/items/${id}`);
  res.status(201).json({ id, created: true });
});
```

## Working with Files

```javascript
router.get("/files", (req, res) => {
  // Send a file
  res.sendFile("/path/to/document.pdf");

  // Download a file with custom filename
  res.download("/path/to/report.pdf", "quarterly-report-2023.pdf");

  // Set attachment disposition without sending file
  res.attachment("custom-filename.txt");
  res.send("This will be downloaded as a file");
});
```

## Cookies

```javascript
router.get("/cookies", (req, res) => {
  // Set a cookie
  res.cookie("user", "john", {
    maxAge: 900000, // 15 minutes
    httpOnly: true, // Not accessible via JavaScript
    secure: true, // HTTPS only
    sameSite: "strict", // CSRF protection
  });

  // Clear a cookie
  res.clearCookie("old-session");

  res.send("Cookie operations completed");
});
```

## Advanced Header Operations

```javascript
router.get("/advanced-headers", (req, res) => {
  // Add Vary header
  res.vary("Accept");
  res.vary("User-Agent");

  // Add link headers (for pagination, etc.)
  res.links({
    next: "/users?page=2",
    last: "/users?page=5",
  });

  res.json({ page: 1 });
});
```

## JSON Formatting

```javascript
router.get("/pretty-json", (req, res) => {
  const data = {
    users: [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ],
  };

  // Use configured spaces (2)
  res.json(data);

  // Override for this response only
  res.json(data, 4);
});
```

## Complete Response Example

```javascript
router.get("/api/product/:id", (req, res) => {
  const productId = req.params.id;
  const product = {
    id: productId,
    name: "Example Product",
    price: 99.99,
  };

  res
    .status(200)
    .set({
      "X-API-Version": "1.0",
      "Cache-Control": "max-age=300",
    })
    .vary("Accept")
    .json(product, 2);
});
```
