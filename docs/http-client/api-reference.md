---
sidebar_position: 3
title: API Reference
---

## Axium Class

The main class for creating HTTP clients.

### Constructor

```javascript
// Import the function
const { Axium } = require("@nexoracle/utils"); // CJS
import { Axium } from "@nexoracle/utils"; // ESM

const axium = new Axium(defaults);
```

**Parameters:**

- `defaults` (optional): Default configuration options for all requests.

## Instance Methods

### .request(url, options)

Make an HTTP request.

```javascript
axium.request(url, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object.

### .get(url, options)

Make a GET request.

```javascript
axium.get(url, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object.

### .post(url, data, options)

Make a POST request with JSON data.

```javascript
axium.post(url, data, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `data`: The data to send in the request body (will be JSON-stringified).
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object.

### .put(url, data, options)

Make a PUT request with JSON data.

```javascript
axium.put(url, data, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `data`: The data to send in the request body (will be JSON-stringified).
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object.

### .patch(url, data, options)

Make a PATCH request with JSON data.

```javascript
axium.patch(url, data, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `data`: The data to send in the request body (will be JSON-stringified).
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object.

### .delete(url, options)

Make a DELETE request.

```javascript
axium.delete(url, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object.

### .postFormData(url, data, options)

Make a POST request with multipart form data.

```javascript
axium.postFormData(url, formData, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `data`: FormData object to send.
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object.

### .postUrlEncoded(url, data, options)

Make a POST request with URL-encoded form data.

```javascript
axium.postUrlEncoded(url, data, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `data`: Object containing form data.
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object.

### .all(requests)

Execute multiple requests concurrently.

```javascript
axium.all([request1, request2, request3]);
```

**Parameters:**

- `requests`: Array of Promise objects (typically from other Axium requests).

**Returns:**

- Promise that resolves when all requests are complete.

### .getBuffer(url, options, method)

Make a GET request and return a buffer.

```javascript
axium.getBuffer(url, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `options` (optional): Request configuration.
- `method`: The method used to make request. (`default: GET`)

**Returns:**

- Promise that resolves to a response with data as a buffer.

### .fetchJson(url, options, method)

Make a GET request and return json response.

```javascript
axium.fetchJson(url, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `options` (optional): Request configuration.
- `method`: The method used to make request. (`default: GET`)

**Returns:**

- Promise that resolves to a response with data as a json.

### .head(url, options)

Make a HEAD request.

```javascript
axium.head(url, options);
```

**Parameters:**

- `url`: The URL to send the request to.
- `options` (optional): Request configuration.

**Returns:**

- Promise that resolves to a response object (with no body, only headers and status).

### .addRequestInterceptor(interceptor)

Add a request interceptor.

```javascript
axium.addRequestInterceptor(interceptor);
```

**Parameters:**

- `interceptor`: Function that takes request options and returns modified options.

### .addResponseInterceptor(interceptor)

Add a response interceptor.

```javascript
axium.addResponseInterceptor(interceptor);
```

**Parameters:**

- `interceptor`: Function that takes response and returns modified response.

### .setGlobalDefaults(defaults)

Set global default options.

```javascript
axium.setGlobalDefaults(defaults);
```

**Parameters:**

- `defaults`: Object containing default options to set.

## Request Configuration

The request configuration object supports all standard `fetch` options plus the following Axium-specific options:

| Option               | Type        | Description                                                             |
| -------------------- | ----------- | ----------------------------------------------------------------------- |
| `retries`            | Number      | Number of retry attempts for failed requests (default: 0)               |
| `retryDelay`         | Number      | Delay between retry attempts in milliseconds (default: 0)               |
| `timeout`            | Number      | Request timeout in milliseconds                                         |
| `params`             | Object      | URL query parameters                                                    |
| `onDownloadProgress` | Function    | Callback for download progress tracking                                 |
| `onUploadProgress`   | Function    | Callback for upload progress tracking                                   |
| `signal`             | AbortSignal | AbortSignal for request cancellation                                    |
| `responseType`       | String      | Force specific response parsing (`arraybuffer`, `blob`, `json`, `text`) |

## Response Object

Successful requests return a response object with the following properties:

| Property     | Type    | Description                    |
| ------------ | ------- | ------------------------------ |
| `data`       | Any     | Parsed response data           |
| `status`     | Number  | HTTP status code               |
| `statusText` | String  | HTTP status text               |
| `headers`    | Headers | Response headers               |
| `config`     | Object  | Original request configuration |

## Error Handling

Axium throws a `FetchError` object when a request fails, with the following properties:

| Property   | Type   | Description                             |
| ---------- | ------ | --------------------------------------- |
| `message`  | String | Error message                           |
| `status`   | Number | HTTP status code (if available)         |
| `response` | Object | Original response object (if available) |
