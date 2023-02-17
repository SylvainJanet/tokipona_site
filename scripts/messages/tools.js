function checkEveryMessageIsTranslatedInEveryLanguage(
  englishDict,
  dictionnaries
) {
  for (const id in englishDict) {
    for (const dict in dictionnaries) {
      if (!dictionnaries[dict][id]) {
        console.log(
          "warning : some messages may not be translated in every language"
        );
      }
    }
  }
  console.log("Messages translated checked");
}

function checkSupportedLanguagesActuallySupported(
  supportedLanguages,
  dictionnaries
) {
  for (const key in supportedLanguages) {
    if (!dictionnaries[key]) console.log("A dictionnary is missing");
  }
  for (const key in dictionnaries) {
    if (!supportedLanguages[key])
      console.log("A supported language is not indicated");
  }
  console.log("Supported languages checked");
}

export {
  checkEveryMessageIsTranslatedInEveryLanguage,
  checkSupportedLanguagesActuallySupported,
};
