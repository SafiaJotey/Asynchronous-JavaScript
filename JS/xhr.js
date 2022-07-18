const xhr = new XMLHttpRequest();

const url = 'https://jsonplaceholder.typicode.com/posts';

xhr.open('GET', url); //asynchronous
//xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     // console.log(xhr.response);//json
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     //to get JS object
//     console.log(data);
//   }

//};

// we can directly uxhse onLoad, the onload works when ready state is 4
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 3) {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
  } else {
    console.log('something went wrong');
    //other error except network error
  }
};
xhr.onerror = () => {
  console.log('network error');
  //for network erroe
};

xhr.send();

// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

// we got response when readystate==4

// http status codes
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)
