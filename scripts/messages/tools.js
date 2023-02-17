import { supportedLanguages } from "../dictionnaries.js";
import { logService } from "../logging/logService.js";

let logger = logService.withClassName("tools.js");

function checkEveryMessageIsTranslatedInEveryLanguage(
  englishDict,
  dictionnaries
) {
  for (const id in englishDict) {
    for (const dict in dictionnaries) {
      if (!dictionnaries[dict][id]) {
        logger.warn("some messages may not be translated in every language", {
          language: supportedLanguages[dict],
          message: id,
        });
      }
    }
  }
  logger.debug("Messages translated checked");
}

function checkSupportedLanguagesActuallySupported(
  supportedLanguages,
  dictionnaries
) {
  for (const key in supportedLanguages) {
    if (!dictionnaries[key])
      logger.warn("A dictionnary is missing", {
        missingLanguage: supportedLanguages[key],
      });
  }
  for (const key in dictionnaries) {
    if (!supportedLanguages[key])
      logger.warn("A supported language is not indicated", {
        languageNotIndicated: key,
      });
  }
  logger.debug("Supported languages checked");
}

let textType = {
  backHome: "input",
};

let possibleTypes = ["input"];

(function checkOnlyPossibleTypes() {
  for (const key in textType) {
    if (!possibleTypes.includes(textType[key])) {
      logger.warn("A text type might be mistyped", { type: textType[key] });
    }
  }
  logger.debug("Possible types checked");
})();

function checkEveryTextTypeAppears(dictionnary) {
  for (const key in textType) {
    if (!Object.keys(dictionnary).includes(key)) {
      logger.warn("A text type doesn't appear in dictionnaries", {
        textType: key,
      });
    }
  }
  logger.debug("Text types checked");
}

export {
  checkEveryMessageIsTranslatedInEveryLanguage,
  checkSupportedLanguagesActuallySupported,
  textType,
  checkEveryTextTypeAppears,
};
