/**
 * Add event listeners and handlers to
 * 1. Change the color of the "target" div
 * 2. Update the text Content on the "target" div
 */
const colorParent = document.getElementById("colors");
const targetDiv = document.getElementById("target");

colorParent.addEventListener("click", (event) => {
  const element = event.target;
  const { id } = element; // red , green blue and yello

  targetDiv.style.backgroundColor = id;
  targetDiv.innerHTML = `Selected Color: ${id}`;
});

//
