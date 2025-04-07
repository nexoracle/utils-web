---
sidebar_position: 4
title: Examples
---

# Examples

This document provides practical examples for common use cases with Axium.

## Table of Contents

- [Basic Usage](#basic-usage)
- [Creating an Instance](#creating-an-instance)
- [Request Methods](#request-methods)
- [Request Configuration](#request-configuration)
- [Response Scheme](#response-schema)
- [Interceptors](#interceptors)
- [Response Handling](#response-handling)
- [Error Handling](#error-handling)
- [Progress Tracking](#progress-tracking)
- [Timeout and Cancellation](#timeout-and-cancellation)
- [Retry Mechanism](#retry-mechanism)
- [Concurrent Requests](#concurrent-requests)

## Basic Usage

Making a GET request:

```js
// Make a request for a user with a given ID
axium
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Using async/await
async function getUser() {
  try {
    const response = await axium.get("https://jsonplaceholder.typicode.com/users/1");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getUser();
```

Making a POST request:

```js
// Sending data
axium
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Creating an Instance

You can create a custom instance of Axium with specific configuration:

```js
// Import the function
const { Axium } = require("@nexoracle/utils"); // CJS
import { Axium } from "@nexoracle/utils"; // ESM

const instance = new Axium({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // 5 seconds
  retries: 3,
  retryDelay: 1000,
});

// Use the instance
instance.get("https://jsonplaceholder.typicode.com/users").then((response) => console.log(response.data));
```

## Request Methods

Axium provides aliases for all the common HTTP methods:

### GET Request

```js
// Get all users
axium.get("https://jsonplaceholder.typicode.com/users").then((response) => console.log(response.data));

// With query parameters
axium
  .get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      userId: 1,
      _limit: 5,
    },
  })
  .then((response) => console.log(response.data));
```

### POST Request

```js
// Create a new post
axium
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Axium HTTP Client",
    body: "Lightweight and powerful HTTP client",
    userId: 1,
  })
  .then((response) => console.log(response.data));
```

### PUT Request

```js
// Update entire post with ID 1
axium
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "Updated Title",
    body: "This post has been updated",
    userId: 1,
  })
  .then((response) => console.log(response.data));
```

### PATCH Request

```js
// Update just the title of post with ID 1
axium
  .patch("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Patched Title",
  })
  .then((response) => console.log(response.data));
```

### DELETE Request

```js
// Delete post with ID 1
axium.delete("https://jsonplaceholder.typicode.com/posts/1").then((response) => console.log("Deleted successfully:", response.status === 200));
```

### HEAD Request

```js
// Get headers only
axium.head("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
  console.log("Status:", response.status);
  console.log("Headers:", response.headers);
});
```

### GetBuffer Request

```js
// Get a buffer response (like an image)
axium.getBuffer("https://i.pinimg.com/474x/f9/18/03/f91803e3936ec263d27da0259a90c27f.jpg").then((response) => {
  console.log("Buffer received, length:", response.data);
  // Do something with the buffer data
});
```

### Posting Form Data

```js
// Create a FormData object
const formData = new FormData();
formData.append("title", "My File Upload");
formData.append("file", fileInput.files[0]); // This part is used to upload files

// Upload file with FormData
axium.postFormData("https://jsonplaceholder.typicode.com/posts", formData).then((response) => console.log(response.data));
```

### Post URL Encoded

```js
// Send URL-encoded form data
axium
  .postUrlEncoded("https://jsonplaceholder.typicode.com/posts", {
    title: "URL Encoded Data",
    body: "This data is sent as application/x-www-form-urlencoded",
    userId: 1,
  })
  .then((response) => console.log(response.data));
```

## Request Configuration

These are the available config options for making requests:

```js
{
  // `method` is the request method to be used
  method: 'get', // default

  // `headers` are custom headers to be sent
  headers: {
    'Content-Type': 'application/json'
  },

  // `params` are the URL parameters to be sent with the request
  params: {
    ID: 12345,
    limit: 10
  },

  // `timeout` specifies the number of milliseconds before the request times out
  timeout: 5000, // default is 0 (no timeout)

  // `retries` number of times to retry the request if it fails
  retries: 3, // default is 0 (no retries)

  // `retryDelay` delay between retries in milliseconds
  retryDelay: 1000, // default is 0

  // `responseType` indicates the type of data that the server will respond with
  responseType: 'json', // default
  // options are: 'arraybuffer', 'blob', 'json', 'text'

  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
    // Do something with the progress event
    console.log(`Download progress: ${progressEvent.percent}%`);
  },

  // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function (progressEvent) {
    // Do something with the progress event
    console.log(`Upload progress: ${progressEvent.percent}%`);
  },

  // `signal` allows you to cancel a request using an AbortController
  signal: abortController.signal
}
```

## Response Schema

The response for a request contains the following information:

```js
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the HTTP headers that the server responded with
  headers: {},

  // `config` is the config that was provided to the request
  config: {}
}
```

## Interceptors

You can intercept requests or responses before they are handled by `then` or `catch`.

### Request Interceptors

```js
// Add a request interceptor
axium.addRequestInterceptor((config) => {
  // Do something before request is sent
  console.log("Request is about to be sent:", config);

  // You can modify the config here
  config.headers = {
    ...config.headers,
    Authorization: "Bearer token123",
  };

  return config;
});
```

### Response Interceptors

```js
// Add a response interceptor
axium.addResponseInterceptor((response) => {
  // Any status code that lies within the range of 2xx triggers this function
  console.log("Response received:", response);

  // You can modify the response here
  return response;
});
```

## Response Handling

```js
axium.get("https://jsonplaceholder.typicode.com/users/1").then((response) => {
  // Access the response data
  console.log("Response data:", response.data);

  // Check status code
  console.log("Status:", response.status);

  // Get headers
  console.log("Headers:", response.headers);
});
```

## Error Handling

```js
axium
  .get("https://jsonplaceholder.typicode.com/nonexistent")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error.status) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error data:", error.response);
      console.error("Error status:", error.status);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
  });
```

## Progress Tracking

Axium provides progress tracking for both downloads and uploads:

```js
// Tracking download progress
axium
  .get("https://jsonplaceholder.typicode.com/photos/1", {
    onDownloadProgress: (progressEvent) => {
      const percentCompleted = Math.round(progressEvent.percent);
      console.log(`Download progress: ${percentCompleted}%`);
    },
  })
  .then((response) => console.log("Download complete:", response.data));

// Tracking upload progress with file upload
const formData = new FormData();
formData.append("file", fileInput.files[0]);

axium
  .postFormData("https://jsonplaceholder.typicode.com/posts", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(progressEvent.percent);
      console.log(`Upload progress: ${percentCompleted}%`);
    },
  })
  .then((response) => console.log("Upload complete:", response.data));
```

## Timeout and Cancellation

You can cancel requests using the AbortController:

```js
// Request with timeout
axium
  .get("https://jsonplaceholder.typicode.com/users", {
    timeout: 5000, // 5 seconds
  })
  .then((response) => {
    console.log("Response received", response);
  })
  .catch((error) => {
    if (error.message.includes("timeout")) {
      console.log("Request timed out");
    }
  });

// Create an AbortController instance
const controller = new AbortController();
const signal = controller.signal;

// Make a request with the signal
axium
  .get("https://jsonplaceholder.typicode.com/users", {
    signal,
  })
  .then((response) => console.log(response.data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request was cancelled!");
    } else {
      console.error("Request failed:", error);
    }
  });

// Cancel the request
setTimeout(() => {
  controller.abort();
  console.log("Request cancelled after 100ms");
}, 100);
```

## Retry Mechanism

```js
// Request with automatic retry
axium
  .get("https://api.example.com/unreliable-resource", {
    retries: 3,
    retryDelay: 1000, // 1 second between retries
  })
  .then((response) => {
    console.log("Request succeeded after retries");
  })
  .catch((error) => {
    console.error("Request failed after all retry attempts");
  });
```

## Concurrent Requests

Axium allows you to make multiple concurrent requests:

```js
// Execute multiple concurrent requests
axium
  .all([axium.get("https://jsonplaceholder.typicode.com/users/1"), axium.get("https://jsonplaceholder.typicode.com/posts/1"), axium.get("https://jsonplaceholder.typicode.com/albums/1")])
  .then(([user, post, album]) => {
    console.log("User:", user.data);
    console.log("Post:", post.data);
    console.log("Album:", album.data);
  })
  .catch((error) => {
    console.error("Error in one of the requests:", error);
  });
```
