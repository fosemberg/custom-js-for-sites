// ==UserScript==
// @name         Evernote auto outbound redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.evernote.com/OutboundRedirect.action*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=evernote.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const {dest} = params;
    document.location.href = dest;
})();
