//Synchronous programming means programme runs statement by statement- Blocking code
// JS single threaded synchronous  programming language
//Asynchronous programming- Non-Blocking code
// Example (setTimeOut,clearTimeOut, setInterval)
// console.log('Script Start');
// setTimeout(() => {
//   console.log('inside setTimeout');
// }, 1000); //1000 shows minimum delay
// console.log('Script end');

//explainaation: when Js see an asynchronous function it will give it to web apis of browser in the mean time js runs statement by statement. Global execution Context(GEC) is tracked by a call stack. when the asynchronus task done browser send it (callback function) to callback queue. In this time event loop will check if callstack is empty or not if GEC is not complete yet Event loop will not allow callback function to callstack, when the callstack is free that is GCE is complete event loop wiil send the callback function to callstack and run it.
// console.log('Script Start');
// setTimeout(() => {
//   console.log('inside setTimeout with 0 ms');
// }, 0); //even if the time is 0 ms it will complete after GEC as a normal asynchronus task.
// console.log('Script end');

//setTimeOut return an id
// console.log('Script Start');
// const id = setTimeout(() => {
//   console.log('inside setTimeout with 0 ms');
// }, 0); //even if the time is 0 ms it will complete after GEC as a normal asynchronus task.

// console.log('clearing timeOut'); // it will give particular id using this we can stop asynchronous task
// clearTimeout(id);
// console.log('Script end');

//setInterval
// console.log('Script Start');
// setInterval(() => {
//   console.log('inside setInterval');
// }, 2000);

// // it will work after every 2s

// console.log('Script end');
// in this case  after every 2s a call function is send to callstack
console.log('Script Start');
const id = setInterval(() => {
  console.log('inside setInterval');
}, 2000);

// it will work after every 2s
console.log('clearing Interval'); // it will give particular id using this we can stop asynchronous task
clearInterval(id);
console.log('Script end');
