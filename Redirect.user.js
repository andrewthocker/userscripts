// ==UserScript==
// @name         Redirect
// @namespace    http://andrew.dotfive.com
// @version      0.1
// @description  Redirects URL to URL
// @author       Andrew Hocker
// @match        http://ngwin.com/picpick/update
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", function () {
        redirect("http://ngwin.com/picpick/update", "./download_start");  // skip the upgrade ad and just start the download
    });

    function redirect(matchUrl, destinationUrl) {
        if (window.location.href === matchUrl)
            window.location.href = destinationUrl;
    }
})();