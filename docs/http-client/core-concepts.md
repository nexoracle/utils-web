---
sidebar_position: 2
title: Core Concepts
---

## Request Lifecycle

When you make a request with Axium, it goes through the following lifecycle:

1. **Request Configuration**: The request options are merged with global defaults
2. **Request Interceptors**: All request interceptors are applied in sequence
3. **URL Building**: Query parameters are appended to the URL
4. **Fetch Execution**: The request is sent using the native Fetch API
5. **Retry Logic**: If configured, failed requests are retried
6. **Response Interceptors**: All response interceptors are applied in sequence
7. **Response Parsing**: The response is parsed based on content type or specified responseType
8. **Return**: The parsed data along with status and headers are returned

## Key Components

### RequestHandler

The core of Axium is the `RequestHandler` class, which handles:

- Request and response interceptor management
- URL building with query parameters
- Fetch execution with retry logic, timeout handling, and progress tracking
- Response parsing based on content type

### Axium Class

The `Axium` class extends `RequestHandler` and provides convenience methods for common HTTP operations:

- `get()`, `post()`, `put()`, `patch()`, `delete()`
- `postFormData()` for multipart form data
- `postUrlEncoded()` for URL-encoded form data
- `all()` for concurrent requests
- `head()` for HEAD requests
- `getBuffer` for getting buffer from response

### Interceptors

Interceptors allow you to modify requests before they are sent and responses before they are returned to your application. You can use them for:

- Adding authentication tokens
- Logging
- Error handling
- Request/response transformation
- Caching

### Error Handling

Axium uses a custom `FetchError` class for error handling that provides:

- Error message
- HTTP status code (if available)
- Original response object (if available)

### Progress Tracking

Axium supports tracking both upload and download progress via callback functions:

- `onUploadProgress`: Called during request body upload
- `onDownloadProgress`: Called during response body download

Both receive a `ProgressEvent` object with `loaded`, `total`, and `percent` properties.

## Comparison with Axios

Axium is designed to be similar to Axios in API design but with a focus on modern JavaScript features:

| Feature              | Axium               | Axios                       |
| -------------------- | ------------------- | --------------------------- |
| Core                 | Fetch API           | XMLHttpRequest              |
| Size                 | Lightweight         | Larger                      |
| Dependencies         | None                | Has dependencies            |
| TypeScript Support   | Built-in            | Via DefinitelyTyped         |
| Browser Support      | Modern browsers     | Wider support via polyfills |
| Node.js Support      | Yes                 | Yes                         |
| Interceptors         | Yes                 | Yes                         |
| Request Cancellation | Via AbortController | Via CancelToken             |
| Progress Tracking    | Yes                 | Yes                         |
| Automatic Transforms | Yes                 | Yes                         |

## Configuration Options

Axium supports a wide range of configuration options:

- Standard `fetch` options (`method`, `headers`, `body`, etc.)
- `retries`: Number of retry attempts for failed requests
- `retryDelay`: Delay between retry attempts in milliseconds
- `timeout`: Request timeout in milliseconds
- `params`: URL query parameters
- `onDownloadProgress`: Callback for download progress tracking
- `onUploadProgress`: Callback for upload progress tracking
- `signal`: AbortSignal for request cancellation
- `responseType`: Force specific response parsing (`arraybuffer`, `blob`, `json`, `text`)
