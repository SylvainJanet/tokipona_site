import { frenchDict } from "./messages/french.js";
import { englishDict } from "./messages/english.js";
import {
  checkSupportedLanguagesActuallySupported,
  checkEveryMessageIsTranslatedInEveryLanguage,
} from "./messages/tools.js";

const supportedLanguages = { en: "English", fr: "French" };
const dictionnaries = { en: englishDict, fr: frenchDict };

checkSupportedLanguagesActuallySupported();
checkEveryMessageIsTranslatedInEveryLanguage();

export { supportedLanguages, dictionnaries };
