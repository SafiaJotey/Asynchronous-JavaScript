//promise intro

const bucket = ['rice', 'salt', 'Chicken', 'tea'];
//create promise
const friedRice = new Promise((resolve, reject) => {
  if (
    bucket.includes('rice') &&
    bucket.includes('vegetable') &&
    bucket.includes('salt')
  ) {
    resolve('Fried Rice');
  } else {
    reject(new Error('not available'));
  }
});
setTimeout(() => {
  for (let i = 1; i < 3; i++) {
    console.log('hello');
  }
}, 0);
// promise consuming with to call back function
// friedRice.then(
//   (rice) => {
//     console.log(`let's eat ${rice}`);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
//promise consuming with catch

friedRice
  .then((rice) => {
    console.log(`let's eat ${rice}`);
  })
  .catch((error) => {
    console.log(error);
  });

for (let i = 0; i < 5; i++) {
  console.log('synchoronous task');
}

// promises are also asysnchronous. that is browser will consume it, then browser send it to micro task queue instead of callback queue and tracked by event loop just like callback.
//Note: if there are callbacks and promises in callback queue and micro task queue after GEC promises will get priority.
