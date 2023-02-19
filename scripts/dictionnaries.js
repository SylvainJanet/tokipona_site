import { frenchDict } from "./messages/french.js";
import { englishDict } from "./messages/english.js";
import {
  checkSupportedLanguagesActuallySupported,
  checkEveryMessageIsTranslatedInEveryLanguage,
  checkEveryTextTypeAppears,
} from "./messages/tools.js";

/**
 * Initialises the dictionnaries, the languages, and do the
 * initial checks.
 */
const supportedLanguages = { en: "English", fr: "French" };
const dictionnaries = { en: englishDict, fr: frenchDict };

checkSupportedLanguagesActuallySupported(supportedLanguages, dictionnaries);
checkEveryMessageIsTranslatedInEveryLanguage(englishDict, dictionnaries);
for (const key in dictionnaries) {
  checkEveryTextTypeAppears(dictionnaries[key]);
}

/**
 *
 * @returns the dictionnary corresponding to the current language
 */
function currentDictionnary() {
  let language = localStorage.getItem("language");
  if (!language || language == "en") {
    return englishDict;
  } else {
    return frenchDict;
  }
}

export { supportedLanguages, dictionnaries, currentDictionnary };
