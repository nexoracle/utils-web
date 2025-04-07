---
sidebar_position: 1
title: Introduction
---

# Cron

## Introduction

cron is a lightweight, dependency-free cron-like job scheduler for JavaScript/TypeScript applications. It provides functionality similar to [node-cron](https://github.com/node-cron/node-cron) but with a cleaner, TypeScript-first implementation.

## Features

- Pure JavaScript/TypeScript implementation with no dependencies
- Cron syntax support (seconds, minutes, hours, day of month, month, day of week)
- Background job execution via child processes
- Timezone support
- Task management and storage
- Automatic task recovery (optional)
- Support for both synchronous and Promise-based tasks
- Named tasks with auto-generation of unique identifiers

## Installation

```js
// Import the function
const { cron } = require("@nexoracle/utils"); // CJS
import { cron } from "@nexoracle/utils"; // ESM
```

## Basic Usage

```js
// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  console.log('Task running every minute!');
  console.log('Current time:', new Date().toString());
});

// Schedule a task with seconds (runs every 30 seconds)
cron.schedule('*/30 * * * * *', () => {
  console.log('Task running every 30 seconds!');
});

// Validate a cron expression
const isValid = cron.validate('* * * * *');
console.log('Is valid cron expression:', isValid); // true
```

## Cron Syntax

The cron syntax used by Scheduler follows the standard format:

```
 # ┌────────────── second (0 - 59) (optional)
 # │ ┌──────────── minute (0 - 59)
 # │ │ ┌────────── hour (0 - 23)
 # │ │ │ ┌──────── day of month (1 - 31)
 # │ │ │ │ ┌────── month (1 - 12) (or names)
 # │ │ │ │ │ ┌──── day of week (0 - 7) (0 or 7 is Sun, or names)
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
```

- Scheduler supports both 5-part (without seconds) and 6-part (with seconds) expressions
- When using 5-part expressions, the seconds field defaults to 0
- Month and day names can be specified with full names or three-letter abbreviations (case-insensitive)
---
## API Reference

### Main Functions

- `cron.schedule(expression, task, [options])` - Schedule a new task
- `cron.validate(expression)` - Validate a cron expression
- `cron.getTasks()` - Get all scheduled tasks

### Task Options

When scheduling a task, you can provide options:

```js
cron.schedule('* * * * *', () => {
  console.log("Schedule running every minute")
}, {
  scheduled: true,           // Start the task automatically (default: true)
  timezone: 'Asia/karachi', // Set timezone (default: system timezone)
  name: 'my-special-task',   // Custom name for the task (default: auto-generated)
  recoverMissedExecutions: true, // Run missed executions (default: false)
  runOnInit: true           // Run task immediately on creation (default: false)
});
```