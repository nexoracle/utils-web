---
sidebar_position: 2
title: Concepts
---

# Cron - Core Concepts

## Architecture

The Cron function consists of several key components working together:

### Core Components

1. **Cron** (`cron.ts`): The main entry point to schedule, validate, and manage tasks.
2. **ScheduledTask** (`scheduled-task.ts`): Represents a scheduled task that runs in the main process.
3. **BackgroundScheduledTask** (`backgroundScheduledTask.ts`): Runs tasks in a separate child process.
4. **Scheduler** (`scheduler.ts`): Handles the timing logic for when to execute tasks.
5. **Task** (`task.ts`): Wraps the actual function to be executed.
6. **TimeZone** (`timezone.ts`): Handles timezone calculations and cron expression matching.
7. **Storage** (`storage.ts`): Maintains task registry for retrieval and management.
8. **Validation** (`validatePattern.ts`, `validateExpression.ts`): Ensures cron expressions are valid.

## Cron Expressions

### Syntax and Parsing

Scheduler supports standard cron expressions with an optional seconds field:

```
 ┌────────────── second (0 - 59) (optional)
 │ ┌──────────── minute (0 - 59)
 │ │ ┌────────── hour (0 - 23)
 │ │ │ ┌──────── day of month (1 - 31)
 │ │ │ │ ┌────── month (1 - 12) (or names)
 │ │ │ │ │ ┌──── day of week (0 - 7) (0 or 7 is Sun, or names)
 │ │ │ │ │ │
 │ │ │ │ │ │
 * * * * * *
```

### Special Characters

- `*`: Any value
- `,`: Value list separator (e.g., `1,3,5`)
- `-`: Range of values (e.g., `1-5`)
- `/`: Step values (e.g., `*/2` for every 2 units)

### Month and Day Names

- Month names: Both full names (`January`, `February`, etc.) and abbreviations (`Jan`, `Feb`, etc.)
- Weekday names: Both full names (`Sunday`, `Monday`, etc.) and abbreviations (`Sun`, `Mon`, etc.)

## Task Execution Flow

1. When a task is scheduled, it's registered in the global storage.
2. The scheduler continuously checks the current time against the cron pattern.
3. When a match is found, the task is executed.
4. For in-process tasks, the function is executed directly.
5. For background tasks, a child process is forked to execute the task.

### Execution Types

#### In-Process Execution (ScheduledTask)

```
┌───────────────┐       ┌───────────────┐      ┌──────┐
│ cron.schedule │=====> | ScheduledTask │====> │ Task │
└───────────────┘       └───────────────┘      └──────┘
                                │
                          ┌─────▼─────┐
                          │ Scheduler │
                          └───────────┘
```

#### Background Execution (BackgroundScheduledTask)

```
┌───────────────┐      ┌─────────────────────────┐      ┌───────────────┐
│ cron.schedule │====> │ BackgroundScheduledTask │====> │ Child Process │
└───────────────┘      └─────────────────────────┘      └───────────────┘
                                                                │
                                                         ┌──────▼────────┐
                                                         │ ScheduledTask │
                                                         └───────────────┘
```

## Task Options

### Common Options

- `scheduled`: Whether to start the task immediately upon creation
- `name`: A unique identifier for the task
- `timezone`: The timezone to use for scheduling
- `recoverMissedExecutions`: Whether to execute tasks that were missed
- `runOnInit`: Whether to run the task immediately upon creation

### Background Task Specific

- Background tasks require a path to a JavaScript file that exports a `task` function

## Events

The function uses Node.js EventEmitter for communication:

### ScheduledTask Events

- `task-done`: Emitted when a task completes execution
- `task-finished`: Emitted by the Task class when execution completes successfully
- `task-failed`: Emitted by the Task class when execution fails

### Scheduler Events

- `scheduled-time-matched`: Emitted when the current time matches the cron pattern

## Storage

Tasks are stored in a global Map, allowing for:

- Retrieval of all scheduled tasks
- Access to specific tasks by name
- Persistence of tasks during the application lifecycle

## Validation

The validation process ensures cron expressions are valid by:

1. Checking the format and number of fields
2. Validating each field's range (seconds: 0-59, minutes: 0-59, etc.)
3. Converting named months and weekdays to their numeric values
4. Handling special characters like asterisks, ranges, and steps