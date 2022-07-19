const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch is in-build in JS which will request automatically (default get) and return a promise as aresponse. in the response we will get a method json() which will return promise which is data
fetch(url)
  .then((response) => {
    // console.log(response); // response.ok=== true
    if (response.ok === true) {
      return response.json();
    } else {
      // response.ok=== false
      throw new Error('something went wrong');
    }
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

//catch will rejected only when there is a network problem without that always then will be execute with a respose ok==true or ok ===false
