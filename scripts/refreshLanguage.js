import { dictionnaries } from "./dictionnaries.js";

function refreshLanguage() {
  let language = sessionStorage.getItem("language");
  if (!language) {
    language = "en";
  }
  document.getElementsByTagName("html").item(0).setAttribute("lang", language);

  for (const key in dictionnaries[language]) {
    let element = document.getElementById(key);
    if (element) {
      element.innerText = dictionnaries[language][key];
    }
  }
}

export { refreshLanguage };
