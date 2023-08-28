const form = document.getElementById("booking-form");

const nameElement = form.elements["fullName"];
const emailElement = form.elements["email"];
const doctorElement = form.elements["doctor"];
const locationElement = form.elements["location"];
const dateElement = form.elements["date"];

const nameInfoElement = document.getElementById("name-info");

const buttonElement = document.getElementById("button");

// console.dir(form);

// we can validate an Input in 2 events 1. Focus
// 2. Blur Event

// nameElement.addEventListener("keyup", (event) => {
//   const value = event.target.value;
//   console.log(value);
// });

function validate(payload) {
  let isValid = true;

  // Name Validation

  const name = payload.name;

  name ? name.trim() : "";

  const nameRegex = /^[a-zA-Z]+$/;

  if (!name) {
    isValid = false;
    nameInfoElement.innerHTML = "This field is required";
  } else if (name.length < 6) {
    isValid = false;
    nameInfoElement.innerHTML = "Hey the name is too short ";
  } else if (!name.match(nameRegex)) {
    isValid = false;
    console.log(!name.match(nameRegex), "regex");
    nameInfoElement.innerHTML = "No special characters allowed";
  }

  // Email validation

  return isValid;
}

nameElement.addEventListener("focus", () => {
  nameInfoElement.innerHTML = "";
  buttonElement.disabled = false;
  console.log("focus on name element ");
});

nameElement.addEventListener("blur", (event) => {
  let isValid = true;

  let value = event.target.value;

  value ? value.trim() : "";

  const nameRegex = /^[a-zA-Z]+$/;

  if (!value) {
    isValid = false;
    nameInfoElement.innerHTML = "This field is required";
  } else if (value.length < 6) {
    isValid = false;

    nameInfoElement.innerHTML = "Hey the name is too short ";
  } else if (!value.match(nameRegex)) {
    isValid = false;

    console.log(!value.match(nameRegex), "regex");
    nameInfoElement.innerHTML = "No special characters allowed";
  }

  if (!isValid) {
    buttonElement.disabled = true;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the reload of the page

  console.log("submit clicked");
  const form = event.target;

  const name = form.elements["fullName"].value;
  const email = form.elements["email"].value;
  const doctor = form.elements["doctor"].value;
  const location = form.elements["location"].value;
  const date = form.elements["date"].value;

  const payload = {
    name,
    email,
    doctor,
    location,
    date,
  };

  const isValid = validate(payload);

  if (!isValid) {
    console.log("Hey cant sumbit its not valid ");
    return;
  }

  console.log(payload, "payload");

  // console.dir(fullnameEleemtn);

  console.dir(form);

  // makeReques("server").then(da)

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/JSON",
    },
  });
});

// Activity - Validation against fake user

// function isInvalidName(name) {
//   const invalidNames = ["Winter Soldier", "Iron Man", "Black Widow", "Loki"];

//   if (invalidNames.includes(name)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// nameElement.addEventListener("blur", (event) => {
//   const value = event.target.value;
//   if (isInvalidName(value)) {
//     alert("hey super hero service is not available ");
//   } else {
//     console.log("service for " + value);
//   }
// });

// const name = "utkarsh";

// if (isInvalidName(name)) {
//   alert("hey super hero service is not available ");
// }

// TODO:

// const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// --------------- LOCAL STORAGE -----------------

// PUT element

// const obj = {
//   name: "utkarsh thakur",
// };

// localStorage.setItem("name", JSON.stringify(obj));

// // Get Element
// const getItem = localStorage.getItem("name");

// console.log(JSON.parse(getItem));

window.addEventListener("beforeunload", (event) => {
  const payload = {
    name: nameElement.value,
    email: emailElement.value,
  };

  localStorage.setItem("beforeunload", JSON.stringify(payload));
});

// DOMCONTENTLOADED -> 1 dom tree has been created

document.addEventListener("DOMContentLoaded", () => {
  const localStorageData = localStorage.getItem("beforeunload");
  const item = JSON.parse(localStorageData); // i have to change string to obj
  const { name, email } = item;

  nameElement.value = name;
  emailElement.value = email;
});
