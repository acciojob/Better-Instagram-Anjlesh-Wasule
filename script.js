//your code here
let draggedDiv = null;

const images = document.querySelectorAll(".image");

images.forEach(div => {

  div.addEventListener("dragstart", () => {
    draggedDiv = div;
    div.classList.add("selected");
  });

  div.addEventListener("dragend", () => {
    draggedDiv = null;
    div.classList.remove("selected");
  });

  div.addEventListener("dragover", (e) => {
    e.preventDefault(); // REQUIRED
  });

  div.addEventListener("drop", () => {
    if (draggedDiv === div) return;

    // swap background images
    const temp = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = div.style.backgroundImage;
    div.style.backgroundImage = temp;
  });

});
