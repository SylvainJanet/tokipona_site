import { refreshLanguage } from "./refreshLanguage.js";
import { logService } from "./logging/logService.js";

const logger = logService.withClassName("changeLanguage.js");

/**
 * Switches the value of the language in the localStorage, and
 * then call refreshLanguage to actually change the language.
 */
let changeLanguage = function () {
  let language = localStorage.getItem("language");
  if (!language || language == "en") {
    localStorage.setItem("language", "fr");
    logger.debug("language change - fr");
  } else {
    localStorage.setItem("language", "en");
    logger.debug("language change - en");
  }
  refreshLanguage(true);
};

/**
 * Uses changeLanguage when the proper element is clicked on.
 */
document
  .getElementById("buttonLanguage")
  .addEventListener("click", changeLanguage);
document.getElementById("subMenuLg").addEventListener("click", changeLanguage);
