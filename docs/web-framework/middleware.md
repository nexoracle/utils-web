---
sidebar_position: 3
title: Middleware
---

## Middlewares in Apex

Middleware functions are a core part of Apex, allowing you to process requests before they reach route handlers. Apex includes several built-in middleware functions and supports custom middleware creation.

## Understanding Middleware

Middleware functions have access to the request object (`req`), the response object (`res`), and the next middleware function (`next`) in the application's request-response cycle. They can:

- Execute any code
- Make changes to the request and response objects
- End the request-response cycle
- Call the next middleware function in the stack

## Using Built-in Middleware

### Body Parser

Parses request bodies in different formats:

```javascript
// Apply body parser middleware
router.use(apex.bodyParser());

router.post("/api/data", (req, res) => {
  // req.body contains the parsed body
  console.log("Received data:", req.body);
  res.json({ received: true, data: req.body });
});
```

The body parser handles:

- `application/json`
- `application/x-www-form-urlencoded`
- `text/plain`

### Static Files

Serve static files from a directory:

```javascript
// Serve static files from the 'public' directory
router.use(apex.static("public"));
```

### Favicon

Serve a favicon file:

```javascript
// Serve favicon
router.use(apex.favicon("./public/favicon.ico"));
```

### Rate Limiter

Limit request rates from clients:

```javascript
// Basic rate limiting
router.use(apex.rateLimit());

// default rateLimit options
//   windowMs = 60 * 1000, // 1 minute
//   max = 100, // 100 requests per window
//   message = "Too many requests, please try again later.",
//   statusCode = 429, // 429 Too Many Requests
//   skip = () => false, // Skip rate limiting for certain requests
//   keyGenerator = (req) => req.ip || "global", // Default key generator (IP-based)

const limiter = apex.rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // 100 requests per windowMs
  message: "Too many requests from this IP, please try again later",
  statusCode: 429,
  headers: true,
});

// Custom rate limiting on specific routes
router.use("/api", limiter);

router.get("/api/data", (req, res) => {
  res.json({ message: "API response" });
});

// on single route
router.get("/api", limiter, (req, res) => {
  res.send("rate limit");
});
```

Advanced rate limiting options:

```javascript
// Skip rate limiting for certain requests
router.use(
  apex.rateLimit({
    skip: (req) => {
      // Skip rate limiting for admin users
      return req.headers["x-admin-key"] === "your-secret-admin-key";
    },
  })
);

// Custom key generator (limit by user ID instead of IP)
router.use(
  apex.rateLimit({
    keyGenerator: (req) => {
      // Use user ID from request for rate limiting
      return req.headers["x-user-id"] || req.ip;
    },
  })
);

// Custom handler for rate-limited requests
router.use(
  apex.rateLimit({
    handler: (req, res) => {
      res.status(429).json({
        error: "Rate limit exceeded",
        retryAfter: res.getHeader("Retry-After"),
      });
    },
  })
);
```

### Cors

Enable Cross-Origin Resource Sharing (CORS) for your API endpoints:

```js
// Basic usage (enable all CORS requests)
router.use(apex.cors());

// With configuration options
router.use(
  apex.cors({
    origin: "https://yourdomain.com", // or array of allowed origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    maxAge: 86400, // 24 hours
  })
);

// Dynamic origin control
router.use(
  apex.cors({
    origin: (req, callback) => {
      const allowedOrigins = ["https://app.yourdomain.com", "https://admin.yourdomain.com"];
      const origin = req.headers.origin;
      callback(null, allowedOrigins.includes(origin));
    },
  })
);

// Route-specific CORS
router.get("/api/data", apex.cors({ origin: "https://specific-domain.com" }), (req, res) => {
  res.json({ data: "Protected CORS data" });
});
```

### Flash Messages

Enable flash messages for temporary storage between requests:

```javascript
// Enable flash middleware
router.use(apex.useFlash());

router.post("/login", (req, res) => {
  // Authentication logic...

  // Set flash message
  req.flash("success", "You have been logged in successfully.");
  res.redirect("/dashboard");
});

router.get("/dashboard", (req, res) => {
  // Get flash messages
  const successMessages = req.flash("success");
  const errorMessages = req.flash("error");

  res.render("dashboard", {
    success: successMessages,
    errors: errorMessages,
  });
});
```

## Creating Custom Middleware

### Basic Middleware

```javascript
// Logger middleware
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
};

// Apply the middleware
router.use(logger);

router.get("/", (req, res) => {
  res.send("Hello World");
});
```

### Authentication Middleware

```javascript
// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authentication required" });
  }

  const apiKey = token.split(" ")[1];

  if (apiKey !== "valid-api-key") {
    return res.status(403).json({ error: "Invalid or expired token" });
  }

  // Add user info to request object
  req.user = { id: "123", role: "admin" };

  next();
};

// Apply to specific routes
router.use("/api/protected", authenticate);

router.get("/api/protected/data", (req, res) => {
  res.json({
    message: "Protected data",
    user: req.user,
  });
});
```

### Error Handling Middleware

```javascript
// Route that might throw an error
router.get("/might-error", (req, res) => {
  const random = Math.random();
  if (random > 0.5) {
    throw new Error("Something went wrong");
  }
  res.json({ success: true });
});

// Error handling middleware (must have 4 parameters)
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    error: {
      message: err.message,
      timestamp: new Date().toISOString(),
    },
  });
};

// Add error handling middleware last
router.use(errorHandler);
```

### Request Timing Middleware

```javascript
// Request timing middleware
const requestTimer = (req, res, next) => {
  const start = Date.now();

  // Add listener for when response is finished
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} - ${res.statusCode} - ${duration}ms`);
  });

  next();
};

router.use(requestTimer);

// Routes
router.get("/fast", (req, res) => {
  res.send("Fast response");
});

router.get("/slow", (req, res) => {
  setTimeout(() => {
    res.send("Slow response");
  }, 1000);
});
```

### Request Validation Middleware

```javascript
// Apply body parser
router.use(apex.bodyParser());

// Validation middleware for user creation
const validateUser = (req, res, next) => {
  const { username, email, password } = req.body;
  const errors = [];

  if (!username || username.length < 3) {
    errors.push("Username must be at least 3 characters");
  }

  if (!email || !email.includes("@")) {
    errors.push("Valid email is required");
  }

  if (!password || password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

// Apply validation to specific route
router.post("/users", validateUser, (req, res) => {
  // Create user...
  res.status(201).json({ message: "User created" });
});
```

### Conditional Middleware

```javascript
// Only apply to production environment
const securityHeaders = (req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    res.set({
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "default-src 'self'",
    });
  }
  next();
};

router.use(securityHeaders);
```

## Middleware Chaining

Multiple middleware functions can be chained together:

```javascript
// Logger middleware
const logger = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.path}`);
  next();
};

// Authentication check
const authCheck = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ error: "Authentication required" });
  }
  next();
};

// Role check
const adminOnly = (req, res, next) => {
  // Assume auth middleware has set req.query
  if (req.query && req.query.apikey !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
};

// Chain middlewares for specific routes
router.get("/admin/dashboard", logger, authCheck, adminOnly, (req, res) => {
  res.json({ message: "Admin dashboard" });
});
```

## Best Practices for Middleware

1. **Order matters**: Apply middleware in the correct order (e.g., body parsing before validation)
2. **Keep middleware focused**: Each middleware should have a single responsibility
3. **Handle errors properly**: Use try/catch in middleware and pass errors to next
4. **Avoid unnecessary middleware**: Only apply middleware where needed
