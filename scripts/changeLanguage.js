import { refreshLanguage } from "./refreshLanguage.js";
import { logService } from "./logging/logService.js";

logger = logService.withClassName("changeLanguage.js");

document.getElementById("buttonLanguage").addEventListener("click", () => {
  let language = sessionStorage.getItem("language");
  if (!language || language == "en") {
    sessionStorage.setItem("language", "fr");
    logger.debug("language change - fr");
  } else {
    sessionStorage.setItem("language", "en");
    logger.debug("language change - fr");
  }
  refreshLanguage();
  logger.warn("Test for prod");
});
