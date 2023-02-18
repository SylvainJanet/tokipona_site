document.getElementsByClassName("back-to-top").item(0).onclick = (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const trigger = 100;
window.bactToTopState = scrollY > trigger ? "visible" : "invisible";
updateBackToTop();

window.addEventListener("scroll", () => {
  if (scrollY > trigger) {
    if (window.bactToTopState == "invisible") {
      window.bactToTopState = "visible";
      updateBackToTop();
    }
  }
  if (scrollY <= trigger) {
    if (window.bactToTopState == "visible") {
      window.bactToTopState = "invisible";
      updateBackToTop();
    }
  }
});

function updateBackToTop() {
  const el = document.getElementsByClassName("back-to-top").item(0);
  if (window.bactToTopState === "invisible") {
    el.style.opacity = 0;
  }
  if (window.bactToTopState === "visible") {
    el.style.opacity = 1;
  }
}
