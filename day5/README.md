## Understanding the Node.js Event Loop Output Order

This script demonstrates the concept of the Node.js event loop and the order of execution for different scheduling methods: `setTimeout`, `setImmediate`, and `process.nextTick`.

**Expected Output:**

Start script
Next tick (microtask)
Immediate (macrotask)
Timeout with 0ms delay (macrotask)
End script

**Explanation:**

The order of execution in Node.js might seem counter-intuitive at first glance. This is because there are different types of tasks with varying priorities within the event loop. Let's break it down:

**Microtasks vs Macrotasks:**

- **Microtasks:** These are high-priority tasks that are executed **immediately after** the current operation finishes but **before** the event loop moves on to handle other events or timers.
- **Macrotasks:** These are tasks scheduled for later execution and are placed in separate queues based on their scheduling method (e.g., timers, I/O).

**Specific Execution Order:**

1. **`process.nextTick`:** This function has the **highest priority** and gets executed **first** within the current event loop iteration after the current operation finishes. In our script, it logs "Next tick (microtask)".
2. **`setImmediate`:** This schedules a function to be executed **after** the current event loop iteration, but it has **higher priority** than `setTimeout` with 0 delay. It's still a macrotask, but with a higher queue position. Therefore, it executes **next** in the **next** iteration of the event loop, logging "Immediate (macrotask)".
3. **`setTimeout` (even with 0 delay):** This schedules a function with the timer queue, which has a **lower priority** compared to `setImmediate`. Even though it has a 0ms delay, it gets executed **after** `setImmediate` because of the different queue priorities. It logs "Timeout with 0ms delay (macrotask)".

**Note:** The actual timing might vary slightly due to factors like system load, but the explained order reflects the general behavior.
