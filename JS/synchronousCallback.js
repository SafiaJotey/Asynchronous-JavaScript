// when a function is passed to another function as an argument is called callback function
//synchronous programming example
// function myFunc(callback) {
//   console.log('myFunct is running');
//   callback();
// }
// function anotherFunc() {
//   console.log('anotherFunc is running');
// }
// myFunc(anotherFunc);
//also can be an annonymous
// myFunc(function () {
//   console.log('anotherFunc is running');
// })

const getAndTwoNumbers = (number1, number2, onSuccess, onfailure) => {
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    onSuccess(number1, number2);
  } else {
    onfailure();
  }
};
getAndTwoNumbers(
  4,
  3,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log('something went wrong');
  }
);
