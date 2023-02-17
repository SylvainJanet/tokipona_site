import { pathPrefix } from "./pathPrefix.js";

let items = document.getElementsByClassName("linkToFix");
for (item of items) {
  item.setAttribute("href", pathPrefix + item.getAttribute("href"));
}
