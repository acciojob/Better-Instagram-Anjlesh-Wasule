let draggedElement = null;

const images = document.querySelectorAll(".image");

images.forEach(img => {

  img.addEventListener("mousedown", () => {
    draggedElement = img;
    img.classList.add("selected");
  });

  img.addEventListener("mouseup", () => {
    if (!draggedElement || draggedElement === img) return;

    // swap background images
    const tempBg = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = img.style.backgroundImage;
    img.style.backgroundImage = tempBg;

    draggedElement.classList.remove("selected");
    draggedElement = null;
  });
});
