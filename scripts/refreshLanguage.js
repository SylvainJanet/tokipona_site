import { dictionnaries } from "./dictionnaries.js";
import { textType } from "./messages/tools.js";

function refreshLanguage() {
  let language = sessionStorage.getItem("language");
  if (!language) {
    language = "en";
  }
  document.getElementsByTagName("html").item(0).setAttribute("lang", language);

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

export { refreshLanguage };
