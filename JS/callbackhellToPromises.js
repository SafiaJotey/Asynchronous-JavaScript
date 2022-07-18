const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const changeHeading = (element, text, color, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject(new Error('something went wrong'));
      }
    }, time);
  });
};
changeHeading(heading1, 'one', 'red', 1000)
  .then(() => changeHeading(heading2, 'two', 'blue', 1000))
  .then(() => changeHeading(heading3, 'three', 'green', 2000))
  .then(() => changeHeading(heading4, 'four', 'purple', 1000))
  .then(() => changeHeading(heading5, 'five', 'orange', 3000))
  .then(() => changeHeading(heading6, 'six', 'yellow', 2000))
  .then(() => changeHeading(heading7, 'seven', 'violet', 1000))
  .catch((error) => console.log(error));
