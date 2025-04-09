---
sidebar_position: 2
title: Emoji API
---

# Emoji API

## emojiApi - Modern Emoji Api Toolkit

### Features

- 3000+ emojis with full metadata
- Twemoji image URL generation
- Unicode conversion utilities
- Advanced search and filtering
- Group/category organization
- Lightweight and fast (cached responses)
- **Browser Support: ✅ Yes**

## Usage Examples:

Here is the complete usage documentation for emojiApi.

### Emoji Groups

<details>
<summary>Emoji Groups</summary>

- Smileys & Emotion
- People & Body
- Animals & Nature
- Food & Drink
- Travel & Places
- Activities
- Objects
- Symbols
- Flags

</details>

### Emoji Subgroups

<details>
<summary>Emoji Subgroups</summary>

#### Face & Emotion

- face-smiling
- face-affection
- face-tongue
- face-hand
- face-neutral-skeptical
- face-sleepy
- face-unwell
- face-hat
- face-glasses
- face-concerned
- face-negative
- face-costume
- cat-face
- monkey-face
- emotion

#### Hands & Body

- hand-fingers-open
- hand-fingers-partial
- hand-single-finger
- hand-fingers-closed
- hands
- hand-prop
- body-parts

#### People

- person
- person-gesture
- person-role
- person-fantasy
- person-activity
- person-sport
- person-resting
- family
- person-symbol

#### Animals & Nature

- animal-mammal
- animal-bird
- animal-amphibian
- animal-reptile
- animal-marine
- animal-bug
- plant-flower
- plant-other

#### Food & Drink

- food-fruit
- food-vegetable
- food-prepared
- food-asian
- food-marine
- food-sweet
- drink
- dishware

#### Travel & Places

- place-map
- place-geographic
- place-building
- place-religious
- place-other
- transport-ground
- transport-water
- transport-air
- hotel

#### Time & Events

- time
- sky & weather
- event
- award-medal

#### Activities

- sport
- game
- arts & crafts

#### Objects

- clothing
- sound
- music
- musical-instrument
- phone
- computer
- light & video
- book-paper
- money
- mail
- writing
- office
- lock
- tool
- science
- medical
- household
- other-object

#### Symbols

- transport-sign
- warning
- arrow
- religion
- zodiac
- av-symbol
- gender
- math
- punctuation
- currency
- other-symbol
- keycap
- alphanum
- geometric

#### Flags

- flag
- country-flag
- subdivision-flag

</details>

---

### Get All Emoji

Fetches all available emojis metadata.

#### Returns:

`Promise<Array>` - Array of all `emoji` objects.

#### Example:

```js
// Import the function
const { emojiApi } = require("@nexoracle/utils"); // CJS
import { emojiApi } from "@nexoracle/utils"; // ESM

(async () => {
  const allEmojis = await emojiApi.all();
  console.log(allEmojis); // Output: Array of all Emojis data Object
})();
```

---

### Get Single Emoji

This fetches metadata of a single Emoji.

#### Parameter:

- **emoji** (`String`) - Emoji character to find.

#### Returns:

`Promise<Emoji|null>` - `Emoji` metadata object or `null` if no data found.

#### Example:

```js
// Import the function
const { emojiApi, formatJSON } = require("@nexoracle/utils"); // CJS
import { emojiApi, formatJSON } from "@nexoracle/utils"; // ESM

// Get emoji metadata
(async () => {
  const emoji = await emojiApi.get("🙈");
  console.log(emoji);

  // Output:
  /*
_Emoji {
  data: {
    emoji: '🙈',
    name: 'see-no-evil monkey',
    group: 'Smileys & Emotion',
    sub_group: 'monkey-face',
    codepoints: '1F648'
  }
}
*/

  // Other metadata
  console.log(emoji.fancyName); // Output: :see_no_evil_monkey:
  console.log(emoji.twemoji()); // Output: https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f648.png
  console.log(emoji.twemoji({ format: "svg" })); // Output: https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f648.svg
})();

// Pretty print for all metadata object
(async () => {
  const emoji = await emojiApi.get("💀");
  console.log(formatJSON({ emoji }));

  // Output:
  /* 
{
  "emoji": {
    "emoji": "💀",
    "name": "skull",
    "group": "Smileys & Emotion",
    "sub_group": "face-negative",
    "codepoints": "1F480",
    "fancyName": ":skull:",
    "twemoji": "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f480.png",
    "unicode": "1F480",
    "formattedName": "Skull"
  }
}
*/
})();
```

---

### Random Emoji

Gets any random emoji

#### Returns:

`Promise<Emoji>` - An Object having random `emoji` metadata.

#### Example:

```js
// Import the function
const { emojiApi } = require("@nexoracle/utils"); // CJS
import { emojiApi } from "@nexoracle/utils"; // ESM

// Get random emoji
(async () => {
  const emoji = await emojiApi.random();
  console.log(emoji);

  // Output:
  /*
_Emoji {
  data: {
    emoji: '🦵' ,
    name: 'leg: medium-light skin tone',
    group: 'People & Body',
    sub_group: 'body-parts',
    codepoints: '1F9B5 1F3FC'
  }
}
  */
})();
```

---

### Random Emoji from Group

This gets a random emoji metadata from given group or subgroup.

#### Parameters:

- **group** (`String`) - Emoji group name to get random emoji.
- **subGroup** (`String`, Optional) - subgroup of emoji.

#### Returns:

`Promise<Emoji>` - Random `emoji` from given group or subgroup.

#### Example:

```js
// Import the function
const { emojiApi } = require("@nexoracle/utils"); // CJS
import { emojiApi } from "@nexoracle/utils"; // ESM

// Random from group
(async () => {
  const emoji = await emojiApi.randomFromGroup("Food & Drink");
  console.log(emoji);

  // Output:
  /*
_Emoji {
  data: {
    emoji: '🧇' ,
    name: 'waffle',
    group: 'Food & Drink',
    sub_group: 'food-prepared',
    codepoints: '1F9C7'
  }
}
  */
})();

// Random from group and subgroup
(async () => {
  const emoji = await emojiApi.randomFromGroup("Food & Drink", "food-fruit");
  console.log(emoji);

  // Output:
  /*
_Emoji {
  data: {
    emoji: '🍏',
    name: 'green apple',
    group: 'Food & Drink',
    sub_group: 'food-fruit',
    codepoints: '1F34F'
  }
}
  */
})();
```

---

### Find by Name

Finds emoji by name.

#### Parameter:

- **name** (`String`) - Emoji name to search.

#### Return:

`Promise<Emoji|null>` - Matching `emoji` or `null` if not found.

#### Example:

```js
// Import the function
const { emojiApi } = require("@nexoracle/utils"); // CJS
import { emojiApi } from "@nexoracle/utils"; // ESM

(async () => {
  const emoji = await emojiApi.findByName("rocket");
  console.log(emoji);

  // Output:
  /*
_Emoji {
  data: {
    emoji: '🚀',
    name: 'rocket',
    group: 'Travel & Places',
    sub_group: 'transport-air',
    codepoints: '1F680'
  }
}
  */
})();
```

---

### Convert Emoji to Unicode

Converts emoji to unicode hex

#### Parameter:

- **emoji** (`String`) - Emoji character.

#### Returns:

`string` - Unicode hex value of `emoji` or `null` if not found.

#### Example:

```js
// Import the function
const { emojiApi } = require("@nexoracle/utils"); // CJS
import { emojiApi } from "@nexoracle/utils"; // ESM

const emoji = emojiApi.emojiToUnicode("🥵");
console.log(emoji); // Output: 1F975
```

---

### Convert Unicode to Emoji

Converts unicode hex to emoji

#### Parameter:

- **unicode** (`String`) - Unicode hex value of emoji.

#### Returns:

`string` - `Emoji` character or `null` if not found.

#### Example:

```js
// Import the function
const { emojiApi } = require("@nexoracle/utils"); // CJS
import { emojiApi } from "@nexoracle/utils"; // ESM

const emoji = emojiApi.unicodeToEmoji("1F975");
console.log(emoji); // Output: 🥵
```

---

### Arrange

Arrange all emojis metadata.

#### Returns:

`Promise<Array>` - Array of all arranged `emoji` objects.

#### Example:

```js
// Import the function
const { emojiApi } = require("@nexoracle/utils"); // CJS
import { emojiApi } from "@nexoracle/utils"; // ESM

(async () => {
  const emoji = await emojiApi.arrange();
  console.log(emoji); // Output: Array of all Arranged Emojis data Object
})();
```
