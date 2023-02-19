const header = document.createElement("div");
header.setAttribute("class", "header sticky dark-header");

const content =
  "" +
  '<div class="left-header">' +
  '                <div class="line-on-over-container">' +
  '                    <a class="line-on-over" href="https://sylvainjanet.fr" id="backHome"></a>' +
  '                    <div class="line-on-over-line dark-header-content"></div>' +
  "                </div>" +
  "            </div>" +
  '            <div class="right-header">' +
  '                <div class="line-on-over-container">' +
  '                    <button class="line-on-over" id="buttonLanguage"> </button>' +
  '                    <div class="line-on-over-line dark-header-content"></div>' +
  "                </div>                " +
  "            </div>" +
  '            <div class="collapsed-header">' +
  '                <div class="deroulant">' +
  "                    <div>" +
  '                        <div class="collapsed-header-ico">' +
  '                            <div class="dark-header-content"></div>' +
  '                            <div class="dark-header-content"></div>' +
  '                            <div class="dark-header-content"></div>' +
  "                        </div>" +
  "                    </div>" +
  '                    <ul class="sous">' +
  "                        <li>" +
  '                            <div class="collapsed-header-item line-on-over-container">' +
  '                                <a href="https://sylvainjanet.fr"' +
  '                                class="line-on-over" id="subMenuBackHome">' +
  "                                </a> " +
  '                                <div class="line-on-over-line dark-header-content"></div>' +
  "                            </div>" +
  "                        </li>" +
  "                        <li>" +
  '                            <div class="collapsed-header-item line-on-over-container">' +
  '                                <button class="line-on-over"  id="subMenuLg"></button>' +
  '                                <div class="line-on-over-line dark-header-content"></div>' +
  "                            </div>" +
  "                        </li>" +
  "                    </ul>" +
  "                </div>" +
  "            </div>" +
  "";

header.innerHTML = content;

export { header };
