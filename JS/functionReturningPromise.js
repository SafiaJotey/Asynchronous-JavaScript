// want a promise reject or resolve after 2s depending on valuevalue
const myPromise = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve('promise resolved!');
      } else {
        reject(new Error('promise rejected.'));
      }
    }, 2000);
  });
};
myPromise(true)
  .then((resolvation) => console.log(resolvation))
  .catch((error) => console.log(error));
