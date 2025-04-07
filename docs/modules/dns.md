# DNS

## DNS Tools

These functions provide DNS resolution capabilities, including domain-to-IP lookups, reverse DNS lookups, and checking domain reachability.

**These** are some basic but refined functions made using built-in **node:dns**.
Please visit [**node:dns**](https://nodejs.org/api/dns.html) for more detailed documentation and usage.

### Resolve DNS

Resolves a domain to its DNS records, such as A, AAAA, CNAME, MX, TXT, or NS.

#### Parameters:

- **host** (`String`) - The domain to resolve.
- **recordType** (`String`) - Type of DNS record (`"A" | "AAAA" | "CNAME" | "MX" | "TXT" | "NS"`).

#### Returns:

`Promise<string[]>` - Array of resolved DNS records.

#### Example Usage:

```js
// Import the function
const { resolveDNS } = require("@nexoracle/utils"); // CJS
import { resolveDNS } from "@nexoracle/utils"; // ESM

resolveDNS("nexoracle.com", "A")
  .then((records) => {
    console.log("DNS Records:", records); // Output: returns dns records
  })
  .catch((err) => {
    console.error("DNS Resolution Error:", err);
  });
```

---

### Reverse DNS Lookup

Performs a reverse DNS lookup to find hostnames associated with an IP address.

#### Parameters:

- **ip** (`String`) - The IP address to look up.

#### Returns:

`Promise<string[]>` - Array of hostnames.

#### Example Usage:

```js
// Import the function
const { reverseLookup } = require("@nexoracle/utils"); // CJS
import { reverseLookup } from "@nexoracle/utils"; // ESM

reverseLookup("8.8.8.8")
  .then((hostnames) => {
    console.log("Reverse Lookup Result:", hostnames); // Output: hostname
  })
  .catch((err) => {
    console.error("Reverse Lookup Error:", err);
  });
```

---

### Check Domain Reachability

Determines if a domain is reachable via DNS by resolving its A record.

#### Parameters:

- **host** (`String`) - The domain to check.

#### Returns:

`Promise<boolean>` - `true` if the domain is reachable, otherwise `false`.

#### Example Usage:

```js
// Import the function
const { isDomainReachable } = require("@nexoracle/utils"); // CJS
import { isDomainReachable } from "@nexoracle/utils"; // ESM

isDomainReachable("nexoracle.com").then((isReachable) => {
  console.log("Domain Reachable:", isReachable); // Output: true
});
```

---

### Get IP Address

Resolves a domain to a single IPv4 address.

#### Parameters:

- **host** (`String`) - The domain to resolve.

#### Returns:

`Promise<string>` - The first available IPv4 address.

#### Example Usage:

```js
// Import the function
const { getIPAddress } = require("@nexoracle/utils"); // CJS
import { getIPAddress } from "@nexoracle/utils"; // ESM

getIPAddress("example.com")
  .then((ip) => {
    console.log("IPv4 Address:", ip); // Output: IPv4 Address: 96.7.128.175
  })
  .catch((err) => {
    console.error("Error Resolving IP:", err);
  });
```

---

### Get All IPs

Resolves both IPv4 (A) and IPv6 (AAAA) addresses for a domain.

#### Parameters:

- **host** (`String`) - The domain to resolve.

#### Returns:

`Promise<{ ipv4: string[], ipv6: string[] }>` - Object with IPv4 and IPv6 addresses.

#### Example Usage:

```js
// Import the function
const { getAllIPs } = require("@nexoracle/utils"); // CJS
import { getAllIPs } from "@nexoracle/utils"; // ESM

getAllIPs("example.com").then((ips) => {
  console.log("IPv4 Addresses:", ips.ipv4);
  console.log("IPv6 Addresses:", ips.ipv6);
}); // Output: Array having ipv4 and ipv6 IP Addresses
```

---

### Check Domain MX Records

Checks if a domain has MX (Mail Exchange) records, useful for email validation.

#### Parameters:

- **host** (`String`) - The domain to check.

#### Returns:

`Promise<boolean>` - `true` if MX records exist, otherwise `false`.

#### Example Usage:

```js
// Import the function
const { hasMXRecords } = require("@nexoracle/utils"); // CJS
import { hasMXRecords } from "@nexoracle/utils"; // ESM

hasMXRecords("gmail.com").then((hasMX) => {
  console.log("Has MX Records:", hasMX); // Output: true
});
```
