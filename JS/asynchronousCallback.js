//asynchronous callbacks
const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
//callback hell
// setTimeout(() => {
//   heading1.textContent = 'One';
//   heading1.style.color = 'red';
//   setTimeout(() => {
//     heading2.textContent = 'Two';
//     heading2.style.color = 'Blue';
//     setTimeout(() => {
//       heading3.textContent = 'Three';
//       heading3.style.color = 'green';
//       setTimeout(() => {
//         heading4.textContent = 'Four';
//         heading4.style.color = 'purple';
//         setTimeout(() => {
//           heading5.textContent = 'Five';
//           heading5.style.color = 'orange';
//           setTimeout(() => {
//             heading6.textContent = 'Six';
//             heading6.style.color = 'yellow';
//             setTimeout(() => {
//               heading7.textContent = 'Seven';
//               heading7.style.color = 'violet';
//             }, 2000);
//           }, 2000);
//         }, 3000);
//       }, 1000);
//     }, 2000);
//   }, 1000);
// }, 1000);

//pyramid of doom
const changeHeading = (element, text, color, time, onSuccess, onFailure) => {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onFailure) {
        onFailure();
      }
    }
  }, time);
};

changeHeading(
  heading1,
  'One',
  'red',
  1000,
  () => {
    changeHeading(
      heading2,
      'Two',
      'blue',
      1000,
      () => {
        changeHeading(
          heading3,
          'Three',
          'green',
          2000,
          () => {
            changeHeading(
              heading4,
              'Four',
              'purple',
              3000,
              () => {
                changeHeading(
                  heading5,
                  'Five',
                  'orange',
                  1000,
                  () => {
                    changeHeading(
                      heading6,
                      'Six',
                      'yellow',
                      2000,
                      () => {
                        changeHeading(
                          heading7,
                          'Seven',
                          'violet',
                          1000,
                          () => {
                            console.log('success');
                          },
                          () => {
                            console.log(
                              'Heading7 not found something went wrong'
                            );
                          }
                        );
                      },
                      () => {
                        console.log('Heading6 not foundsomething went wrong');
                      }
                    );
                  },
                  () => {
                    console.log('Heading5 not foundsomething went wrong');
                  }
                );
              },
              () => {
                console.log('Heading4 not foundsomething went wrong');
              }
            );
          },
          () => {
            console.log('Heading3 not foundsomething went wrong');
          }
        );
      },
      () => {
        console.log('Heading2 not foundsomething went wrong');
      }
    );
  },
  () => {
    console.log('Heading1 not foundsomething went wrong');
  }
);
