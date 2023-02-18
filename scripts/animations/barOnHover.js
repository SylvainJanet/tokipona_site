console.log("lineOnOver");
let els = document.getElementsByClassName("lineOnOver");

const liste = [];

for (let el of els) {
  liste.push({
    clickable: el,
    line: el.nextElementSibling,
  });
}

liste.forEach((x) => {
  console.log(x.line.style);

  x.clickable.addEventListener("mouseenter", () => {
    x.line.style.width = "40px";
  });

  x.clickable.addEventListener("mouseleave", () => {
    x.line.style.width = "0px";
  });
});
