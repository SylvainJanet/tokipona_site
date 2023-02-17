import { frenchDict } from "./messages/french.js";
import { englishDict } from "./messages/english.js";
import {
  checkSupportedLanguagesActuallySupported,
  checkEveryMessageIsTranslatedInEveryLanguage,
  checkEveryTextTypeAppears,
} from "./messages/tools.js";

const supportedLanguages = { en: "English", fr: "French" };
const dictionnaries = { en: englishDict, fr: frenchDict };

checkSupportedLanguagesActuallySupported(supportedLanguages, dictionnaries);
checkEveryMessageIsTranslatedInEveryLanguage(englishDict, dictionnaries);
for (const key in dictionnaries) {
  checkEveryTextTypeAppears(dictionnaries[key]);
}

export { supportedLanguages, dictionnaries };
