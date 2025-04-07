---
sidebar_position: 2
title: Router
---

## Apex Router

The Router is the core component of Apex that handles HTTP routing, middleware management, and request processing.

## Creating a Router

```javascript
const router = new apex.Router();
```

## Route Handling

### Basic Routes

Define routes for different HTTP methods:

```javascript
// GET request handler
router.get("/users", (req, res) => {
  res.json({ users: ["Alice", "Bob", "Charlie"] });
});

// POST request handler
router.post("/users", (req, res) => {
  // Create a new user
  const newUser = req.body;
  // Process the user data...
  res.status(201).json({ message: "User created", user: newUser });
});

// PUT request handler
router.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  // Update user with ID
  res.json({ message: `User ${userId} updated`, data: req.body });
});

// DELETE request handler
router.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  // Delete user with ID
  res.status(200).json({ message: `User ${userId} deleted` });
});
```

### Route Parameters

Routes can contain dynamic segments (parameters) prefixed with a colon:

```javascript
router.get("/products/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.json({
    message: `Fetching product ${id} from category ${category}`,
    category,
    productId: id,
  });
});

router.get("/posts/:postId/comments/:commentId", (req, res) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  res.json({ postId, commentId });
});

router.get("/blog/:year/:month/:slug", (req, res) => {
  const { year, month, slug } = req.params;

  res.json({
    article: {
      title: `Article: ${slug}`,
      publishedAt: `${month}/${year}`,
      content: "This is the article content",
    },
  });
});
```

## Middleware

Apply middleware to process requests before they reach route handlers.

### Global Middleware

```javascript
// Apply middleware to all routes
router.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next(); // Continue to the next middleware or route handler
});

// Apply body parser middleware
router.use(apex.bodyParser());
```

### Path-Specific Middleware

Apply middleware to specific paths:

```javascript
// Apply middleware only to routes starting with /api
router.use("/api", (req, res, next) => {
  // Check for API key
  const apiKey = req.query["x-api-key"];
  if (!apiKey || apiKey !== "valid-key") {
    return res.status(401).json({ error: "Invalid API key" });
  }
  next();
});
```

## Server Configuration

### Json Spaces

Configuring `JSON Spaces` for pretty print.

```js
router.set("json spaces", 2); // 2 JSON spaces
```

### Trust Proxy

Configure `Trust Proxy` to trust specific or all reverse proxies

```js
router.set("trust proxy", true); // trust all proxies
router.set("trust proxy", "all"); // trust all proxies

router.set("trust proxy", 1); // trust only first proxy
```

### Get Settings

Retrieve configured settings:

```javascript
const trustProxy = router.getSetting("trust proxy");
console.log(`Current trust proxy: ${trustProxy}`);
```

## Flash Messages

Enable and use flash messages:

```javascript
// Enable flash middleware
router.use(router.useFlash());

// Using flash in a route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "password") {
    req.flash("success", "Login successful");
    res.redirect("/dashboard");
  } else {
    req.flash("error", "Invalid credentials");
    res.redirect("/login");
  }
});

// Accessing flash messages in a route
router.get("/dashboard", (req, res) => {
  const successMessages = req.flash("success");
  res.render("dashboard", { messages: successMessages });
});
```
