import { pathPrefix } from "./pathPrefix.js";

let items = document.getElementsByClassName("linkToFix");
for (var i = 0; i < items.length; i++) {
  items[i].setAttribute("href", pathPrefix + items[i].getAttribute("href"));
}
