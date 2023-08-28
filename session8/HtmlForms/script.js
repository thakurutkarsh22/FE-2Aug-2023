const form = document.getElementById("booking-form");

// console.dir(form);

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
