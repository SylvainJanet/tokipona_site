import { refreshLanguage } from "./refreshLanguage.js";

document.getElementById("buttonLanguage").addEventListener("click", () => {
  let language = sessionStorage.getItem("language");
  if (!language || language == "en") {
    sessionStorage.setItem("language", "fr");
  } else {
    sessionStorage.setItem("language", "en");
  }
  refreshLanguage();
});
