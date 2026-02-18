let dragged = null;

const items = document.querySelectorAll(".image");

items.forEach(item => {

  item.addEventListener("mousedown", () => {
    dragged = item;
    item.classList.add("selected");
  });

  item.addEventListener("mouseup", (e) => {
    if (!dragged || dragged === item) return;

    // swap background images
    const temp = dragged.style.backgroundImage;
    dragged.style.backgroundImage = item.style.backgroundImage;
    item.style.backgroundImage = temp;

    dragged.classList.remove("selected");
    dragged = null;
  });
});
