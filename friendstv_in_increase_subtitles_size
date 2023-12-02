// ==UserScript==
// @name         friendstv.in increase subtitles size
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://hd.mirdrujbajvachka.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=friendstv.in
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const css = `
pjsdiv#pjs_player_subtitle {
  font-size: 40px !important;
}
`;
    function addCss(cssCode) {
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = cssCode;
        } else {
            styleElement.appendChild(document.createTextNode(cssCode));
        }
        document.getElementsByTagName("head")[0].appendChild(styleElement);
    }
    addCss(css);
})();
