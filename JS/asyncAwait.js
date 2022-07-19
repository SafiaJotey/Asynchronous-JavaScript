const url = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
//for arrow function const getPost=async()=>{}
async function getPosts() {
  const response = await fetch(url);
  if (Response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('something went wrong');
  }
}
//async always return a promise
getPosts()
  .then((mydata) => console.log(mydata))
  .catch((error) => console.log('something went wrong'));
