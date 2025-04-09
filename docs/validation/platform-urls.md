# Platform URLs

## Validating Platform URLs

`urlValidator` is a versatile Object function that validates URLs from various platforms. It ensures URL integrity through comprehensive validation rules customized for each supported platform.

#### Key Features:

- Multi-platform support for all major social media and content platforms
- Flexible validation rules adapting to each platform's URL structure
- Support for both standard and shortened URL formats
- Configurable validation severity levels
- **Browser Support: ✅ Yes**

#### Parameters:

- **url** (`string`): The input URL to be validated.

#### Returns:

A `boolean` indicating whether the URL is valid (`true`) or not (`false`).

## Mediafire

You can validate all supported URLs by Mediafire.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Mediafire URLs
console.log(urlValidator.mediafire("https://www.mediafire.com/file/abc123/filename.zip")); // true
console.log(urlValidator.mediafire("http://mediafire.com/file/xyz456/document.pdf")); // true
console.log(urlValidator.mediafire("https://www.mediafire.com/view/d8dhunj316q1osw/logo2.png")); // true
console.log(urlValidator.mediafire("http://mediafire.com/view/d8dhunj316q1osw/logo2.png/file")); // true
console.log(urlValidator.mediafire("https://www.mediafire.com/?abc123")); // true
console.log(urlValidator.mediafire("http://mediafire.com/?xyz456")); // true
console.log(urlValidator.mediafire("https://www.mediafire.com/folder/abc123")); // true
console.log(urlValidator.mediafire("http://mediafire.com/folder/xyz456")); // true
```

---

## Google Drive

It allows you to validate different google drive URLs.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Google Drive URLs
console.log(urlValidator.gdrive("https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S/view?usp=sharing")); // true
console.log(urlValidator.gdrive("https://drive.google.com/open?id=1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S")); // true
console.log(urlValidator.gdrive("https://docs.google.com/uc?export=download&id=1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S")); // true
console.log(urlValidator.gdrive("https://docs.google.com/file/d/1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S/")); // true
console.log(urlValidator.gdrive("https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S?usp=sharing")); // true
console.log(urlValidator.gdrive("https://drive.google.com/file/d/17Gcs6fW5nEnJvIUo3toaXUU5s4DdspEI/view")); // true
console.log(urlValidator.gdrive("https://drive.google.com/drive/folders/1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S")); // true
console.log(urlValidator.gdrive("https://docs.google.com/document/d/1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S/edit")); // true
```

---

## Spotify

You can cover many URLs of spotify.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Spotify URLs
console.log(urlValidator.spotify("https://open.spotify.com/track/1abc123def456")); // true
console.log(urlValidator.spotify("https://open.spotify.com/album/1abc123def456")); // true
console.log(urlValidator.spotify("https://open.spotify.com/playlist/1abc123def456")); // true
console.log(urlValidator.spotify("https://open.spotify.com/artist/1abc123def456")); // true
console.log(urlValidator.spotify("https://open.spotify.com/show/1abc123def456")); // true
console.log(urlValidator.spotify("https://open.spotify.com/episode/1abc123def456")); // true
console.log(urlValidator.spotify("https://open.spotify.com/user/spotify")); // true
console.log(urlValidator.spotify("https://open.spotify.com/collection/tracks")); // true
console.log(urlValidator.spotify("https://open.spotify.com/embed/track/1abc123def456")); // true
```

---

## Tiktok

You can cover many URLs of Tiktok.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Tiktok URLs
console.log(urlValidator.tiktok("https://www.tiktok.com/@username/video/1234567890123456789")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/@username/photo/1234567890123456789")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/t/abc123def/")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/v/abc123def/")); // true
console.log(urlValidator.tiktok("https://m.tiktok.com/v/abc123def/")); // true
console.log(urlValidator.tiktok("https://vt.tiktok.com/abc123/")); // true
console.log(urlValidator.tiktok("https://vm.tiktok.com/abc123/")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/embed/7123456789")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/music/song-title-7123456789")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/tag/challenge")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/trending")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/discover/category")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/effects/effect-name")); // true
console.log(urlValidator.tiktok("https://www.tiktok.com/hashtag/challenge")); // true
```

---

## Threads

You can validate various Threads URLs.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Thread Drive URLs
console.log(urlValidator.threads("https://threads.net/@username")); // true
console.log(urlValidator.threads("https://www.threads.net/@username")); // true
console.log(urlValidator.threads("https://threads.net/username")); // true
console.log(urlValidator.threads("https://threads.net/@username/post/abc123")); // true
console.log(urlValidator.threads("https://threads.net/post/abc123")); // true
console.log(urlValidator.threads("https://threads.net/t/abc123")); // true
console.log(urlValidator.threads("https://threads.net/search")); // true
```

---

## X (Twitter)

Validate X (Twitter) URLs.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Supports both X and Twitter Domain URLs
console.log(urlValidator.twitter("https://twitter.com/username")); // true
console.log(urlValidator.twitter("https://www.twitter.com/username")); // true
console.log(urlValidator.twitter("https://twitter.com/@username")); // true
console.log(urlValidator.twitter("https://twitter.com/username/status/1234567890")); // true
console.log(urlValidator.twitter("https://twitter.com/username/status/1234567890/photo/1")); // true
console.log(urlValidator.twitter("https://twitter.com/username/status/1234567890/video/1")); // true
console.log(urlValidator.twitter("https://twitter.com/i/web/status/1234567890")); // true
console.log(urlValidator.twitter("https://twitter.com/search?q=query")); // true
console.log(urlValidator.twitter("https://twitter.com/hashtag/trending")); // true
console.log(urlValidator.twitter("https://twitter.com/explore")); // true
console.log(urlValidator.twitter("https://twitter.com/home")); // true
console.log(urlValidator.twitter("https://twitter.com/messages")); // true
```

---

## Youtube

Handles all URLs by Youtube.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Youtube URLs
console.log(urlValidator.youtube("https://youtube.com/watch?v=abc123")); // true
console.log(urlValidator.youtube("https://www.youtube.com/watch?v=abc123")); // true
console.log(urlValidator.youtube("https://m.youtube.com/watch?v=abc123")); // true
console.log(urlValidator.youtube("https://youtu.be/abc123")); // true
console.log(urlValidator.youtube("https://youtube.com/playlist?list=PLabc123")); // true
console.log(urlValidator.youtube("https://youtube.com/channel/UCabc123")); // true
console.log(urlValidator.youtube("https://youtube.com/c/channelname")); // true
console.log(urlValidator.youtube("https://youtube.com/user/username")); // true
console.log(urlValidator.youtube("https://youtube.com/embed/abc123")); // true
console.log(urlValidator.youtube("https://youtube.com/shorts/abc123")); // true
console.log(urlValidator.youtube("https://youtube.com/live/abc123")); // true
console.log(urlValidator.youtube("https://youtube.com/clip/abc123")); // true
console.log(urlValidator.youtube("https://youtube.com/hashtag/trending")); // true
console.log(urlValidator.youtube("https://youtube.com/results?search_query=test")); // true
console.log(urlValidator.youtube("https://music.youtube.com/watch?v=abc123")); // true
console.log(urlValidator.youtube("https://youtube.com/feed/trending")); // true
```

---

## Snapchat

This covers all valids URLs of Snapchat.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Snapchat URLs
console.log(urlValidator.snapchat("https://snapchat.com/add/username")); // true
console.log(urlValidator.snapchat("https://www.snapchat.com/add/username")); // true
console.log(urlValidator.snapchat("https://snapchat.com/discover/Publisher/story123")); // true
console.log(urlValidator.snapchat("https://snapchat.com/spotlight/abc123")); // true
console.log(urlValidator.snapchat("https://snapchat.com/stories/username")); // true
console.log(urlValidator.snapchat("https://snapchat.com/lens/abc123")); // true
console.log(urlValidator.snapchat("https://story.snapchat.com/s/abc123")); // true
```

---

## Terabox

It supports all Terabox URLs.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Terabox URLs
console.log(urlValidator.terabox("https://terabox.com")); // true
console.log(urlValidator.terabox("https://www.terabox.com")); // true
console.log(urlValidator.terabox("https://terabox.com/s/abc123")); // true
console.log(urlValidator.terabox("https://1024tera.com/s/abc123")); // true
console.log(urlValidator.terabox("https://4funbox.com/s/abc123")); // true
console.log(urlValidator.terabox("https://teraboxapp.com/s/abc123")); // true
console.log(urlValidator.terabox("https://terabox.com/s/abc123?pwd=1234")); // true
```

---

## Instagram

This covers all valids URLs of Instagram.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Instagram URLs
console.log(urlValidator.instagram("https://instagram.com/p/abc123")); // true
console.log(urlValidator.instagram("https://www.instagram.com/p/abc123/")); // true
console.log(urlValidator.instagram("https://instagram.com/reel/abc123")); // true
console.log(urlValidator.instagram("https://instagram.com/tv/abc123")); // true
console.log(urlValidator.instagram("https://instagram.com/stories/abc123")); // true
console.log(urlValidator.instagram("https://instagram.com/p/abc123/?utm_source=share")); // true
```

---

## Facebook

This covers all valids URLs of Facebook.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Facebook URLs
console.log(urlValidator.facebook("https://facebook.com/username")); // true
console.log(urlValidator.facebook("https://www.facebook.com/username")); // true
console.log(urlValidator.facebook("https://m.facebook.com/username")); // true
console.log(urlValidator.facebook("https://facebook.com/username/posts/123456789")); // true
console.log(urlValidator.facebook("https://facebook.com/username/videos/123456789")); // true
console.log(urlValidator.facebook("https://facebook.com/username/photos/123456789")); // true
console.log(urlValidator.facebook("https://facebook.com/profile.php?id=123456789")); // true
console.log(urlValidator.facebook("https://facebook.com/groups/groupname")); // true
console.log(urlValidator.facebook("https://facebook.com/events/123456789")); // true
console.log(urlValidator.facebook("https://fb.com/username")); // true
console.log(urlValidator.facebook("https://facebook.watch/abc123/")); // true
```

---

## Linkedin

This covers many URLs of Linkedin.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Linkedin URLs
console.log(urlValidator.linkedin("https://linkedin.com/in/username")); // true
console.log(urlValidator.linkedin("https://www.linkedin.com/in/username/")); // true
console.log(urlValidator.linkedin("https://linkedin.com/company/companyname")); // true
console.log(urlValidator.linkedin("https://linkedin.com/posts/username_hashtag-activity-123456")); // true
console.log(urlValidator.linkedin("https://linkedin.com/pulse/article-title-username")); // true
console.log(urlValidator.linkedin("https://linkedin.com/school/universityname")); // true
console.log(urlValidator.linkedin("https://linkedin.com/groups/123456")); // true
console.log(urlValidator.linkedin("https://linkedin.com/in/user-name-123?utm_source=share")); // true
```

---

## Reddit

This covers almost all URLs of Reddit.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Reddit URLs
console.log(urlValidator.reddit("https://reddit.com/r/subreddit")); // true
console.log(urlValidator.reddit("https://www.reddit.com/r/subreddit/")); // true
console.log(urlValidator.reddit("https://old.reddit.com/r/subreddit/")); // true
console.log(urlValidator.reddit("https://reddit.com/user/username")); // true
console.log(urlValidator.reddit("https://reddit.com/comments/abc123")); // true
console.log(urlValidator.reddit("https://reddit.com/r/subreddit/comments/abc123")); // true
console.log(urlValidator.reddit("https://reddit.com/r/subreddit?sort=top")); // true
```

---

## Pinterest

This covers many valids URLs of Pinterest.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Pinterest URLs
console.log(urlValidator.pinterest("https://pinterest.com/pin/123456789")); // true
console.log(urlValidator.pinterest("https://www.pinterest.com/pin/123456789/")); // true
console.log(urlValidator.pinterest("https://pinterest.com/username")); // true
console.log(urlValidator.pinterest("https://pinterest.com/username/board")); // true
console.log(urlValidator.pinterest("https://pinterest.ca/username")); // true - Canada domain
console.log(urlValidator.pinterest("https://pinterest.co.uk/username")); // true - UK domain
console.log(urlValidator.pinterest("https://pinterest.fr/username/board")); // true - France domain
console.log(urlValidator.pinterest("https://pinterest.com/pin/123456789?utm_source=share")); // true
console.log(urlValidator.pinterest("https://i.pinimg.com/474x/da/1e/8e/da1e8eb96139332d633bfb3c36baa195.jpg")); // false
```

---

## Whatsapp

This covers all valids URLs of Whatsapp.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Whatsapp URLs
console.log(urlValidator.whatsapp("https://whatsapp.com/channel/abc123")); // true
console.log(urlValidator.whatsapp("https://www.whatsapp.com/business")); // true
console.log(urlValidator.whatsapp("https://whatsapp.com/send")); // true
console.log(urlValidator.whatsapp("https://whatsapp.com/download")); // true
console.log(urlValidator.whatsapp("https://wa.me/1234567890")); // true
console.log(urlValidator.whatsapp("https://chat.whatsapp.com/abc123DEF456")); // true
console.log(urlValidator.whatsapp("https://whatsapp.com/android")); // true
console.log(urlValidator.whatsapp("https://whatsapp.com/send?phone=1234567890")); // true
```

---

## Discord

This covers many valids URLs of Discord.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Discord URLs
console.log(urlValidator.discord("https://discord.com/invite/abcdef")); // true
console.log(urlValidator.discord("https://discordapp.com/invite/abcdef")); // true
console.log(urlValidator.discord("https://discord.com/channels/123456789/987654321")); // true
console.log(urlValidator.discord("https://discord.com/channels/123456789/987654321/111222333")); // true
console.log(urlValidator.discord("https://discord.com/users/123456789")); // true
console.log(urlValidator.discord("https://discord.com/servers/123456")); // true
console.log(urlValidator.discord("https://discord.com/communities/123456")); // true
```

---

## Twitch

This covers all valids URLs of Twitc.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Twitch URLs
console.log(urlValidator.twitch("https://twitch.tv/username")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/username/")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/username/videos")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/username/clips")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/username/about")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/username/schedule")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/username/collections")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/username/video/123456")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/username/clip/ClipName")); // true
console.log(urlValidator.twitch("https://clips.twitch.tv/ClipName")); // true
console.log(urlValidator.twitch("https://m.twitch.tv/username")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/directory/game/Minecraft")); // true
console.log(urlValidator.twitch("https://www.twitch.tv/directory/category/just-chatting")); // true
```

---

## Stack Over Flow

This covers all valids URLs of Stack Over Flow.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Stack Over Flow URLs
console.log(urlValidator.stackoverflow("https://stackoverflow.com/questions/12345/question-title")); // true
console.log(urlValidator.stackoverflow("https://stackoverflow.com/questions/12345")); // true
console.log(urlValidator.stackoverflow("https://www.stackoverflow.com/users/12345/username")); // true
console.log(urlValidator.stackoverflow("https://stackoverflow.com/tags/javascript")); // true
console.log(urlValidator.stackoverflow("https://stackoverflow.com/a/12345")); // true
console.log(urlValidator.stackoverflow("https://stackoverflow.com/q/12345")); // true
console.log(urlValidator.stackoverflow("https://stackoverflow.com/search?q=javascript")); // true
console.log(urlValidator.stackoverflow("https://serverfault.stackexchange.com/questions/12345/question-title")); // true
console.log(urlValidator.stackoverflow("https://superuser.stackexchange.com/users/12345/username")); // true
```

---

## Medium

This covers all valids URLs of Medium.

#### Example Usage:

```js
// Import the function
const { urlValidator } = require("@nexoracle/utils"); // CJS
import { urlValidator } from "@nexoracle/utils"; // ESM

// Medium URLs
console.log(urlValidator.medium("https://medium.com/@username")); // true
console.log(urlValidator.medium("https://medium.com/@username/article-title-123abc")); // true
console.log(urlValidator.medium("https://www.medium.com/publication-name/article-title-123abc")); // true
console.log(urlValidator.medium("https://publication-name.medium.com/article-title-123abc")); // true
console.log(urlValidator.medium("https://medium.com/tag/javascript")); // true
console.log(urlValidator.medium("https://medium.com/topics/programming")); // true
console.log(urlValidator.medium("https://medium.com/lists/recommended-reading")); // true
```

---
