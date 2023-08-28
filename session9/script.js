// FETCH ....

// Get
// fetch("https://google.com")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(data));

// post

fetch("google.com", { method: "POST", data: JSON.stringify({}), headers: {} });

// Activity - POST Request

// const data = {
//   title: "foo",
//   body: "bar",
//   userId: 1,
// };

// function addPostToServer(dataObject) {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   return fetch(url, { method: "POST", body: JSON.stringify(dataObject) });
// }

// addPostToServer(data)
//   .then((response) => response.json())
//   .then((data) => console.log("real data", data))
//   .catch((error) => console.log("error there"));

// ---> Rerquired attribute
// ---> Disabled Attribute
