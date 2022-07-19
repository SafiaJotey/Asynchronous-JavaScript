const url = 'https://jsonplaceholder.typicode.com/posts';
//callback hell
// const xhr = new XMLHttpRequest();

// xhr.open('GET', url);

// xhr.onload = () => {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//     // to get data with id
//     const id = data[3].id;
//     const xhr2 = new XMLHttpRequest();
//     const url2 = `${url}/${id}`;
//     console.log(url2);
//     xhr2.open('GET', url2);
//     xhr2.onload = () => {
//       const data2 = JSON.parse(xhr2.response);
//       console.log(data2);
//     };
//     xhr2.send();
//   } else {
//     console.log('something went wrong');
//   }
// };
// xhr.send();
// xhr.onerror = () => {
//   console.log('network problem');
// };

//promise to solve the callback hell
const xhr = new XMLHttpRequest();
const sendRequest = (method, url) => {
  return new Promise((resolve, reject) => {
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.response);

        resolve(response);
      } else {
        reject(new Error('something went wrong'));
      }
    };
    xhr.send();
    xhr.onerror = () => {
      console.log('network problem');
    };
  });
};
sendRequest('get', url)
  .then((response) => {
    const id = response[3].id;
    const url2 = `${url}/${id}`;
    return url2;
  })
  .then((url) => {
    const data = sendRequest('get', url);
    return data;
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
