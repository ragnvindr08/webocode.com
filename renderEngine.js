function handleResize(e) {
  const delta = e.clientY - startY;
  const newHeightEditors = startHeightEditors + delta;
  const newHeightResult = startHeightResult - delta;

  // Limit the resizing to prevent going below 50% of editorsSection
  if (newHeightEditors >= editorsSection.clientHeight * 0.5) {
    editorsSection.style.height = newHeightEditors + "px";
    resultSection.style.height = newHeightResult + "px";
  }
}

function stopResize() {
  document.removeEventListener("mousemove", handleResize);
  document.removeEventListener("mouseup", stopResize);
}
