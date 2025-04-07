# Console

## Overview

`console` is a logging module that extends the built-in console functions, offering advanced styling and enhanced logging capabilities. It supports various text colors, background colors, styles, and log levels. In addition to standard methods it supports all functions of built-in console. This makes debugging and terminal output more visually structured and easier to interpret.

## Features

- Supports 16 standard colors and additional `RGB/HEX` based custom colors.
- Allows applying multiple text styles (bold, italic, underline, etc.).
- Supports log levels (log, error, warn, info, debug).
- Customizable `prefixes` and `suffixes` for log messages.
- Background color support.
- Whitespace preservation.
- Highly performant.
- No dependencies.
- Clean and focused.

### Colors

Console supports standard ANSI colors along with RGB and HEX colors.

#### **Standard Colors**

- `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`
- `gray`, `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`
- Additional: `orange`, `purple`, `pink`, `brown`

#### **Custom Colors**

- rgb: [r, g, b];

- hex: "#ff5733";

### Styles

- `bold` - Makes the text bold.
- `dim` - Reduces text opacity for a subtle effect.
- `italic` - Applies italic formatting.
- `underline` - Underlines the text.
- `inverse` - Swaps foreground and background colors.
- `strikethrough` - Adds a line through the text.
- `hidden` - Hides the text (useful for spacing or debugging).

### Log Levels

- `log` - Displays general messages in the console.
- `error` - Outputs error messages in red, indicating critical issues.
- `warn` - Shows warning messages, usually for potential issues.
- `info` - Prints informational messages, typically for status updates.
- `debug` - Logs debugging details for troubleshooting.

## Installation

Console supports both `ESM` and `CJS`.

```js
// Import the function
const { console } = require("@nexoracle/utils"); // CJS
import { console } from "@nexoracle/utils"; // ESM
```

---

## Usage Examples:

### Basic Logging

#### Example:

```js
console.log("This is a standard log message");
console.error("This is an error message"); // Automatically displayed in red
console.warn("This is a warning message"); // Automatically displayed in yellow
console.info("This is an info message"); // Automatically displayed in cyan
console.debug("This is a debug message"); // Automatically displayed in gray
```

---

### Chainable API

Defines the options available for styling console output.

#### Parameters:

- **color** (`String`) - text color.
- **bgColor** (`String`) - background color.
- **styles** (`Array`) - Define text styling in array.
- **level** - Logging levels.
- **prefix** (`String`) - Words added before console text.
- **suffix** (`String`) - Words added after console text.
- **preserveWhitespace** (`Boolean`) - Text with leading whitespace.

#### Examples Usage:

```js
// Basic chained styling
console.style("Styled text").color("blue").bold().log();

// Step by step chain building
console.style("Red text on yellow background").color("red").bg("yellow").log();

// Multiple style chaining
console.style("Fancy text").color("cyan").bg("black").bold().underline().log();

// Using RGB in chain
console.style("Custom RGB color").rgb(100, 150, 200).log();

// Using HEX in chain
console.style("Custom HEX color").hex("#e74c3c").bold().log();

// Background RGB in chain
console.style("Custom background RGB").bgRgb(50, 80, 120).color("white").log();

// Background HEX in chain
console.style("Custom background HEX").bgHex("#8e44ad").color("white").log();

// Preserving whitespace in chain
console.style("  Text with spaces  ").preserveWhitespace().color("green").log();

// Chaining to different log levels
console.style("Error styled with chain").color("red").bold().error();
console.style("Warning styled with chain").color("orange").warn();
console.style("Info styled with chain").color("blue").info();
console.style("Debug styled with chain").color("gray").italic().debug();

// Combined usage
console.style("Styled Text").rgb(255, 165, 0).bgHex("#333333").underline().log();

// Using toString to get the styled string
const styledText = console.style("This is styled text").color("green").bold().toString();
// Now you can use styledText elsewhere
console.log(`Combined: ${styledText} with regular text`);
```

---

### Applying Colors

Refer to this [Section](./console.md#colors) for color names.

#### Example:

```js
// named colors
console.log("This text is blue", { color: "blue" });
console.log("This text is magenta", { color: "magenta" });
console.log("This text is cyan", { color: "cyan" });

// bright colors
console.log("This text is bright red", { color: "brightRed" });
console.log("This text is bright green", { color: "brightGreen" });
console.log("This text is bright yellow", { color: "brightYellow" });

// extended colors
console.log("This text is orange", { color: "orange" });
console.log("This text is purple", { color: "purple" });

// RGB colors
console.log("This text is custom RGB color", { color: { rgb: [255, 100, 50] } });

// HEX colors
console.log("This text is custom HEX color", { color: { hex: "#3498db" } });
```

---

### Applying background colors

Refer to this [Section](./console.md#colors) for color names.

#### Example:

```js
// Named background colors
console.log("Text with blue background", { bgColor: "blue" });
console.log("Text with red background", { bgColor: "red" });
console.log("Text with green background", { bgColor: "green" });

// Bright background colors
console.log("Text with bright yellow background", { bgColor: "brightYellow" });
console.log("Text with bright cyan background", { bgColor: "brightCyan" });

// Extended background colors
console.log("Text with orange background", { bgColor: "orange" });
console.log("Text with purple background", { bgColor: "purple" });

// RGB background
console.log("Text with RGB background", { bgColor: { rgb: [100, 200, 255] } });

// HEX background
console.log("Text with HEX background", { bgColor: { hex: "#2ecc71" } });
```

---

### Applying text Styles

#### Example:

```js
console.log("Bold text", { styles: ["bold"] });
console.log("Dim text", { styles: ["dim"] });
console.log("Italic text", { styles: ["italic"] });
console.log("Underlined text", { styles: ["underline"] });
console.log("Inverted text", { styles: ["inverse"] });
console.log("Strikethrough text", { styles: ["strikethrough"] });
console.log("Hidden text", { styles: ["hidden"] }); // This won't be visible

// Combining multiple styles
console.log("Bold and underlined text", { styles: ["bold", "underline"] });
console.log("Bold, italic, and underlined text", { styles: ["bold", "italic", "underline"] });
```

---

### Prefixes and Suffixes

#### Example:

```js
// Adding a prefix
console.log("Message with prefix", { prefix: "[INFO] " });

// Adding a suffix
console.log("Message with suffix", { suffix: " (end)" });

// With colors
console.log("Colored message with prefix", {
  prefix: "[SUCCESS] ",
  color: "green",
});

console.error("Error with prefix", {
  prefix: "[ERROR] ",
  // color: 'red' is automatically applied by console.error
});

// Combined prefix and suffix
console.log("Message with both", {
  prefix: ">>> ",
  suffix: " <<<",
  color: "cyan",
});
```

---

### Colors and Styles

#### Example:

```js
// Color + style
console.log("Bold red text", { color: "red", styles: ["bold"] });
console.log("Italic blue text", { color: "blue", styles: ["italic"] });
console.log("Underlined green text", { color: "green", styles: ["underline"] });

// Color + background + style
console.log("Bold yellow text on blue background", {
  color: "yellow",
  bgColor: "blue",
  styles: ["bold"],
});

console.log("Inverted white text on red background", {
  color: "white",
  bgColor: "red",
  styles: ["inverse"],
});

// RGB color + HEX background + multiple styles
console.log("Custom styled text", {
  color: { rgb: [255, 215, 0] },
  bgColor: { hex: "#2c3e50" },
  styles: ["dim", "strikethrough"],
});
```

### MultiLine Text Handling

#### Example:

```js
console.log("This is a\nmultiline\nmessage", {
  color: "blue",
  prefix: "| ",
});

// With preserveWhitespace option
console.log("  Text with leading whitespace  ", {
  preserveWhitespace: true,
  color: "magenta",
});
```

### Object and Array

#### Example:

```js
// Simple object
console.log({ name: "John", age: 30 }, { color: "cyan", bgColor: "red" });

// Nested object
console.log(
  {
    user: {
      name: "Alice",
      details: { age: 25, role: "Developer" },
    },
    status: "active",
  },
  { color: "green", prefix: "USER DATA: ", styles: ["bold", "italic"] }
);

// Array with styling
console.log([1, 2, 3, 4, 5], { color: "yellow" });
```

---

### Combined Exmaples:

```js
console
  .style("CHAINABLE API DEMO")
  .color("brightWhite")
  .bg("purple")
  .bold()
  .italic()
  .underline()
  .strikethrough() // Will combine with underline
  .preserveWhitespace()
  .rgb(255, 255, 255) // Overrides previous color
  .bgHex("#FF5733") // Overrides previous bgColor
  .log();

console.style(" Multi-line\n Chained\n Example ").hex("#42f5a7").bgRgb(20, 20, 40).dim().inverse().preserveWhitespace().warn();

console.log("NORMAL LOGGING WITH ALL OPTIONS", {
  color: { rgb: [255, 215, 0] }, // Gold color
  bgColor: { hex: "#5F00FF" }, // Purple background
  styles: ["bold", "italic", "underline"],
  prefix: console.style("⚠️ ").color("red").bold().toString(),
  suffix: console.style(" ⚠️").color("red").bold().toString(),
  preserveWhitespace: true,
});

console.error("Full-featured error message", {
  color: "black",
  bgColor: "red",
  styles: ["bold", "inverse"],
  prefix: "[CRITICAL] ",
  suffix: " [PLEASE FIX]",
});

// Header with chainable API
console.style(" USER DASHBOARD ").color("brightCyan").bg("black").bold().underline().log();

// Normal logging with options for user data
console.log("User Profile:", {
  color: "brightGreen",
  styles: ["bold"],
});

// Footer with chainable API
console
  .style(" END OF REPORT ")
  .hex("#FFA500") // Orange
  .bgRgb(30, 30, 30)
  .italic()
  .inverse()
  .log();
```

## Notes

- `Terminal` compatibility varies across `environments`. Some terminals may have `limited` or no support for certain `ANSI` styling features, particularly older terminals or specific platforms.
- If the `hidden` style is applied, the text will not be displayed.
- Multiple options can be combined for advanced styling.
- When using `console.error()`, `console.warn()`, `console.info()`, and `console.debug()`, default colors are automatically applied.
- The chained API `console.style()` allows for more readable styling code compared to the options object approach.
- HEX colors support both 3-character shorthand (`#FFF`) and 6-character format (`#FFFFFF`).
- The `preserveWhitespace` option is particularly useful when logging indented code snippets or formatted text.
- When logging `multiline` strings, `prefix` and `suffix` are applied to each `line` individually.
- Custom `RGB` colors provide more flexibility than named colors, with `16.7 million` possible color combinations.
- Using the `.toString()` method on a `styled` chain allows you to capture the styled text for reuse in other strings.
