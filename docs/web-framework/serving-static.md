---
sidebar_position: 4
title: Serving Static
---

## Serving Static Files in Apex

Apex provides a middleware for serving static files from directories on your server. This is useful for serving CSS, JavaScript, images, and other static assets.

## Basic Usage

```javascript
const path = require("path");
const router = new apex.Router();

// Serve files from the 'public' directory
router.use(apex.static("public"));
```

With this configuration, if you have a file at `public/styles/main.css`, it will be accessible at `http://localhost:3000/styles/main.css`.

## Mounting at a Specific Path

You can also serve static files under a specific URL path:

```javascript
// Serve files from 'assets' directory under '/static' URL path
router.use("/static", apex.static("assets"));
```

With this configuration, a file at `assets/images/logo.png` will be accessible at `http://localhost:3000/static/images/logo.png`.

## Multiple Static Directories

You can serve files from multiple directories:

```javascript
// Serve public files at root path
router.use(apex.static("public"));

// Serve uploaded files at /uploads path
router.use("/uploads", apex.static("uploads"));

// Serve vendor files at /vendor path
router.use("/vendor", apex.static("node_modules"));
```

## Working with Absolute Paths

For better portability, use absolute paths with `path.join()`:

```javascript
// Use absolute path to public directory
router.use(apex.static(path.join(__dirname, "public")));
```

## Favicon Handling

For handling favicon requests, Apex provides a dedicated middleware:

```javascript
// Serve favicon
router.use(apex.favicon(path.join(__dirname, "public/favicon.ico")));
```

## Static File Priority

Static files are served before your route handlers. If you have routes and static files with the same paths, the static files will take precedence:

```javascript
// This static middleware will handle '/about.html'
router.use(apex.static("public"));

// This route won't be called if 'public/about.html' exists
router.get("/about.html", (req, res) => {
  res.html("<h1>About Page</h1>");
});

// serve html file from public dir
router.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "public", "index.html"));
});
```
