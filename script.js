const panels = document.querySelectorAll(".panel");

function removeExpandedClass() {
  document.querySelector(".expanded").classList.remove("expanded");
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeExpandedClass();
    panel.classList.add("expanded");
  });
});
