---
sidebar_position: 7
title: Views and Rendering
---

## Views and Rendering in Apex

Apex provides a simple view rendering system similar to Express. This document covers how to set up and use the view engine to render dynamic content in your Apex applications.

## Setting Up Views

To use views in your Apex application, you need to configure the view engine and specify the directory where your view templates are stored.

```javascript
const path = require("path");
const router = new apex.Router();

// Set the views directory
router.set("views", path.join(__dirname, "views"));

// Set the view engine (currently only 'ejs' is supported)
router.set("view engine", "ejs");

const server = apex.createServer(router);
```

## Using the View Engine

Apex currently supports EJS (Embedded JavaScript) as a view engine. EJS allows you to embed JavaScript directly in your templates.

Example of an EJS template file (views/home.ejs):

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= heading %></h1>
    <p><%= message %></p>
  </body>
</html>
```

## Rendering Views

To render a view, use the `render` method. This method looks for the specified view in the configured views directory and renders it with the provided data.

```javascript
router.get("/", (req, res) => {
  router.render(res, "home", {
    title: "Apex App",
    heading: "Welcome to Apex",
    message: "A lightweight Express-like framework",
  });
});
```

When a user visits the home route, they will see a rendered HTML page with the provided data interpolated into the template.

## Supported View Engines

Currently, Apex supports:

- **EJS** - A simple templating language that lets you generate HTML markup with plain JavaScript.

The EJS implementation in Apex is a simple version that supports basic variable interpolation using `<%= variableName %>` syntax.

## API Reference

### `router.set(key, value)`

Configure the view engine settings.

Parameters:

- `key` (String): The setting to configure ('views' or 'view engine')
- `value` (Any): The value to assign to the setting

Supported settings:

- `'views'`: Directory path where view files are located
- `'view engine'`: The template engine to use (currently only 'ejs' is supported)

Example:

```javascript
router.set("views", "./views");
router.set("view engine", "ejs");
```

### `router.render(res, viewName, data)`

Renders a view with the provided data.

Parameters:

- `res` (Response): The response object
- `viewName` (String): The name of the view file (without extension)
- `data` (Object): An object containing variables to be passed to the view

Example:

```javascript
router.render(res, "profile", {
  username: "john_doe",
  email: "john@example.com",
  isAdmin: false,
});
```

### `response.locals`

An object that contains response local variables scoped to the request and available only to the view(s) rendered during the request/response cycle.

Example:

```javascript
// Middleware to set common template variables
router.use((req, res, next) => {
  res.locals = res.locals || {};
  res.locals.user = req.session.user;
  res.locals.siteName = "My Apex Site";
  next();
});

// These variables will be available in all rendered views
router.get("/dashboard", (req, res) => {
  router.render(res, "dashboard", {
    pageTitle: "User Dashboard",
    // res.locals.user and res.locals.siteName are also available in the view
  });
});
```
