import "../inputDevice.js";

let els = document.getElementsByClassName("line-on-over");

const liste = [];

for (let el of els) {
  liste.push({
    clickable: el,
    line: el.nextElementSibling,
  });
}

liste.forEach((x) => {
  if (window.mobileCheck()) {
    x.clickable.addEventListener("touchstart", () => {
      x.line.style.width = "40px";
    });

    x.clickable.addEventListener("touchend", () => {
      x.line.style.width = "0px";
    });
  } else {
    x.clickable.addEventListener("mouseenter", () => {
      x.line.style.width = "40px";
    });

    x.clickable.addEventListener("mouseleave", () => {
      x.line.style.width = "0px";
    });
  }
});
