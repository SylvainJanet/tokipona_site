const trigger = 400 - 60;
window.headerState = scrollY > trigger ? "middle" : "top";
updateHeader();

window.addEventListener("scroll", () => {
  if (scrollY > trigger) {
    if (window.headerState == "top") {
      window.headerState = "middle";
      updateHeader();
    }
  }
  if (scrollY <= trigger) {
    if (window.headerState == "middle") {
      window.headerState = "top";
      updateHeader();
    }
  }
});

function updateHeader() {
  const body = document.getElementsByTagName("body").item(0);
  if (window.headerState === "middle") {
    const colored = body.querySelectorAll(".dark-header");
    for (let i = 0; i < colored.length; i++) {
      const element = colored.item(i);
      element.classList.remove("dark-header");
      element.classList.add("light-header");
    }
    const coloredContent = body.querySelectorAll(".dark-header-content");
    for (let i = 0; i < coloredContent.length; i++) {
      const element = coloredContent.item(i);
      element.classList.remove("dark-header-content");
      element.classList.add("light-header-content");
    }
  }
  if (window.headerState === "top") {
    const colored = body.querySelectorAll(".light-header");
    for (let i = 0; i < colored.length; i++) {
      const element = colored.item(i);
      element.classList.remove("light-header");
      element.classList.add("dark-header");
    }
    const coloredContent = body.querySelectorAll(".light-header-content");
    for (let i = 0; i < coloredContent.length; i++) {
      const element = coloredContent.item(i);
      element.classList.remove("light-header-content");
      element.classList.add("dark-header-content");
    }
  }
}
