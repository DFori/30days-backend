console.log("Start script");

setTimeout(() => {
  console.log("Timeout with 0ms delay (macrotask)");
}, 0);

setImmediate(() => {
  console.log("Immediate (macrotask)");
});

process.nextTick(() => {
  console.log("Next tick (microtask)");
});

console.log("End script");
