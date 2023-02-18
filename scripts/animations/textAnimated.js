import { currentDictionnary } from "../dictionnaries.js";

(() => {
  const animatedElement = document
    .getElementsByClassName("text-animated")
    .item(0);
  const typingSpeed = 80;
  const deletionSpeed = 30;
  const deleteDelay = 1100;
  const blinkWidth = "2px";

  function getWords() {
    let currentDict = currentDictionnary();
    let words = [
      currentDict["mainsubtitle1"],
      currentDict["mainsubtitle2"],
      currentDict["mainsubtitle3"],
      currentDict["mainsubtitle4"],
    ];
    return words;
  }

  let i = 0;

  function typingEffect() {
    let words = getWords();
    const word = words[i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        animatedElement.innerHTML += word.shift();
      } else {
        setTimeout(() => {
          deletingEffect(words);
        }, deleteDelay);
        return;
      }
      setTimeout(loopTyping, typingSpeed);
    };
    loopTyping();
  }

  function deletingEffect(words) {
    const word = words[i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        animatedElement.innerHTML = word.join("");
      } else {
        i = words.length > i + 1 ? i + 1 : 0;
        typingEffect();
        return;
      }
      setTimeout(loopDeleting, deletionSpeed);
    };
    loopDeleting();
  }

  const cursor = document.createElement("span");
  cursor.style.borderRightWidth = blinkWidth;
  cursor.classList.add("blink");
  animatedElement.parentElement.appendChild(cursor);
  animatedElement.style.padding = "0.1em";

  typingEffect();
})();
