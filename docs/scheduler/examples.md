---
sidebar_position: 3
title: Examples
---

# Cron - Examples

This document provides basic examples of how to use the Scheduler library for common scheduling tasks.

## Cron Syntax Examples

### Seconds

```javascript
// Run every 10 seconds
cron.schedule("*/10 * * * * *", () => {
  console.log("running every 10 seconds");
});

// Run on a specific second (the 15th second)
cron.schedule("15 * * * * *", () => {
  console.log("running on second 15 of each minute");
});
```

### Minutes

```javascript
// Run every 5 minutes
cron.schedule("*/5 * * * *", () => {
  console.log("running every 5 minutes");
});

// Run on a specific minute (the 30th minute)
cron.schedule("30 * * * *", () => {
  console.log("running on minute 30 of each hour");
});

// Every 2,3,4 and 6 mintues
cron.schedule("2,3,4,6 * * * *", () => {
  console.log("running every minute 2, 3, 4, 6");
});
```

### Hours

```javascript
// Run every 2 hours
cron.schedule("0 */2 * * *", () => {
  console.log("running every 2 hours");
});

// Run at a specific hour (3 AM)
cron.schedule("0 3 * * *", () => {
  console.log("running at 3:00 AM every day");
});
```

### Day of Month

```javascript
// Run on the 1st day of the month
cron.schedule("0 0 1 * *", () => {
  console.log("running on the first day of the month");
});

// Run on multiple days (1st, 10th, and 20th of the month)
cron.schedule("0 0 1,10,20 * *", () => {
  console.log("running on the 1st, 10th and 20th day of the month");
});
```

### Month

```javascript
// Run in January
cron.schedule("0 0 1 1 *", () => {
  console.log("running in January");
});

// Run in multiple months (January, April, July, October)
cron.schedule("0 0 1 1,4,7,10 *", () => {
  console.log("running in January, April, July and October");
});

// Using month names, short or long months name
cron.schedule("0 0 1 Jan *", () => {
  console.log("running in January using month name");
});
```

### Day of Week

```javascript
// Run on Sunday
cron.schedule("0 0 * * 0", () => {
  console.log("running on Sunday");
});

// Run on multiple days (Monday, Wednesday, and Friday)
cron.schedule("0 0 * * 1,3,5", () => {
  console.log("running on Monday, Wednesday, and Friday");
});

// Using day names, short or long weekdays name
cron.schedule("0 0 * * Monday", () => {
  console.log("running on Monday using day name");
});
```

### Ranges

```javascript
// Runs every minute from 4 to 8
cron.schedule("4-8 * * * *", () => {
  console.log("running every minute from 4 to 8");
});

// Run every hour from 9 AM to 5 PM
cron.schedule("0 9-17 * * *", () => {
  console.log("running every hour from 9 AM to 5 PM");
});

// Run every weekday
cron.schedule("0 0 * * 1-5", () => {
  console.log("running every weekday");
});
```

### Steps with Ranges

```javascript
// Run every 2 hours from 9 AM to 5 PM
cron.schedule("0 9-17/2 * * *", () => {
  console.log("running every 2 hours from 9 AM to 5 PM");
});
```

## Task Control

### Start Task

```javascript
// Create a scheduled task
const task = cron.schedule("* * * * *", () => {
  console.log("running every minute");
});

// Start the task again
task.start();
```

### Stop Task

```javascript
// Create a scheduled task
const task = cron.schedule("* * * * *", () => {
  console.log("running every minute");
});

// Stop the task, task will not be executed unless restarted
task.stop();
```

### Run a Task Manually

```javascript
// Schedule a task but don't start it immediately
const task = cron.schedule(
  "0 0 12 * * *",
  () => {
    console.log("scheduled to run at 12:00 PM every day");
  },
  {
    scheduled: false,
  }
);

// Later start the task, when called
task.start();
```

### Background Task
```js
// Your backgound task file content
// Must export a function named 'task'
module.exports.task = (now) => {
  console.log("🔄 Running in background at:", now);
  return { success: true, pid: process.pid };
};

const path = require("path")
const bgTask = cron.schedule(
  "*/5 * * * * *", // Cron expression
  path.join(__dirname, "background-task.js"), // Path to task file
  {
    scheduled: true, // Start immediately
    name: "bg-job", // Optional name
  }
);

// Check if running
console.log("Is background task running?", bgTask.isRunning()); // true
console.log("Child PID:", bgTask.pid()); // e.g., 12345

// Stop after 20 secs
setTimeout(() => {
  bgTask.stop();
  console.log("Stopped. Running?", bgTask.isRunning()); // false
}, 20000);
```

### With Timezone

Visit [Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for correct timezones list.

```javascript
// Schedule a task to run at midnight in a specific timezone
cron.schedule(
  "0 0 0 * * *",
  () => {
    console.log("running at midnight in Asia/Karachi timezone");
  },
  {
    timezone: "Asia/Karachi",
  }
);
```

### Schedule with Names

```javascript
// Schedule a task with a custom name
const task = cron.schedule(
  "0 0 12 * * Monday",
  () => {
    console.log("Task with custom name is running");
  },
  {
    name: "monday-noon-task",
  }
);

// Later access all tasks
const tasks = cron.getTasks();
console.log("All scheduled tasks:", tasks);
```

### Run on Initialization

```javascript
// Schedule a task and run it immediately upon creation
cron.schedule(
  "0 0 12 * * *",
  () => {
    console.log("Task is being executed immediately and then scheduled");
  },
  {
    runOnInit: true,
  }
);
```

### Validate Cron Expressions

```javascript
// Validate a cron expression
const isValid = cron.validate("0 */5 * * * *");
console.log("Is valid expression:", isValid); // true

// Validate an invalid expression
const isInvalid = cron.validate("invalid-expression");
console.log("Is valid expression:", isInvalid); // false
```

### Getting Scheduled Tasks

```javascript
// Schedule some tasks
cron.schedule(
  "*/5 * * * *",
  () => {
    console.log("Task 1 running");
  },
  { name: "task-1" }
);

cron.schedule(
  "*/10 * * * *",
  () => {
    console.log("Task 2 running");
  },
  { name: "task-2" }
);

// Get all scheduled tasks
const tasks = cron.getTasks();
console.log("Number of scheduled tasks:", tasks.size);

// List task names
for (const [name, task] of tasks.entries()) {
  console.log("Task name:", name);
}
```
