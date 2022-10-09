// ==UserScript==
// @name         Evernote auto outbound redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes confirmation of the transition to an external link from the web evernote.com
// @author       https://github.com/fosemberg
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
    document.location.href = params.dest;
})();
