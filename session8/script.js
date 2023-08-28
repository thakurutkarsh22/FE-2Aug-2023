const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//  ---------------  BUBBLING PHASE (THIS IS DEFAULT METHOD) -------------

// child.addEventListener("click", () => {
//   console.log("child click");
// });

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("grandparent click");
//   },
//   false
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent click");
//   },
//   false
// );

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child click");
//   },
//   false
// );

//--------------- CAPTURING PHASE --------

// grandParent.addEventListener(
//   "click",
//   (event) => {
//     event.stopPropagation();
//     console.log("grandparent click");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent click");
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   () => {
//     console.log("child click");
//   },
//   true
// );

// DATE  ------------- -- - - -

const todysDate = new Date();

todysDate.toLocaleDateString();
