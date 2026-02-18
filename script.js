let sourceDrag = null;

document.querySelectorAll('[id^="drag"]').forEach(drag => {

  drag.addEventListener("mousedown", () => {
    sourceDrag = drag;
  });

  drag.addEventListener("mouseup", () => {
    if (!sourceDrag || sourceDrag === drag) return;

    const sourceDiv = sourceDrag.querySelector("div");
    const targetDiv = drag.querySelector("div");

    const sourceImg = sourceDiv.querySelector("img");
    const targetImg = targetDiv.querySelector("img");

    // swap images
    const tempSrc = sourceImg.src;
    sourceImg.src = targetImg.src;
    targetImg.src = tempSrc;

    sourceDrag = null;
  });
});
