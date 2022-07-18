//Promise.resolve()- it will take a value and return a promise which will give the resolve value
// const myPromise = Promise.resolve(5);

// myPromise.then((value) => console.log(value));

//promiseChaining

//than() method is returning a promise so it canbe cahained. if nothing is not returned undifined will be returned

const myPromise = () => {
  return new Promise((resolve, reject) => {
    resolve('foo');
  });
};
myPromise()
  .then((value) => {
    value += 'bar';
    return value;
  })
  .then((value) => {
    value += 'baz';
    return value;
  })
  .then((value) => {
    console.log(value);
  });
