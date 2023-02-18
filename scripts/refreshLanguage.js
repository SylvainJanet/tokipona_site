import { dictionnaries } from "./dictionnaries.js";
import { textType } from "./messages/tools.js";

function decreaseOpacity(i, N, step) {
  setTimeout(() => {
    document.getElementsByTagName("html").item(0).style.opacity =
      1 - i / (N - 1);
    if (i < N - 1) {
      decreaseOpacity(i + 1, N, step);
    }
  }, step);
}

function increaseOpacity(i, N, step) {
  setTimeout(() => {
    document.getElementsByTagName("html").item(0).style.opacity = i / (N - 1);
    if (i < N - 1) {
      increaseOpacity(i + 1, N, step);
    }
  }, step);
}

function refreshTexts(language) {
  for (const key in dictionnaries[language]) {
    let element = document.getElementById(key);
    if (element) {
      if (!Object.keys(textType).includes(key)) {
        element.innerText = dictionnaries[language][key];
      }
      if (textType[key] === "input") {
        element.setAttribute("value", dictionnaries[language][key]);
      }
    }
  }
}

function refreshLanguage(doAnimate) {
  let duration = 0.1;
  let step = 5;
  let pauseTime = step * 2;
  let N = Math.ceil(duration / ((2 * step) / 1000));

  if (doAnimate) {
    decreaseOpacity(0, N, step);
  } else {
    duration = 0;
  }

  setTimeout(() => {
    let language = sessionStorage.getItem("language");
    if (!language) {
      language = "en";
    }
    document
      .getElementsByTagName("html")
      .item(0)
      .setAttribute("lang", language);

    refreshTexts(language);

    if (doAnimate) {
      setTimeout(() => {
        increaseOpacity(0, N, step);
      }, pauseTime);
    }
  }, (duration / 2) * 1000 + pauseTime);
}

export { refreshLanguage };
