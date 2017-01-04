// ==UserScript==
// @name         Window Title Tweaks
// @namespace    http://andrew.dotfive.com/
// @version      0.1
// @match        http://www.amazon.com/*
// @match        https://www.amazon.com/*
// @match        http://www.bricklink.com/*
// @match        https://www.bricklink.com/*
// ==/UserScript==


(function() {
    'use strict';

    var sites = [
    {
        urlRegex: "^https?:\/\/(?:www\.)?amazon\.com\/",
        replaceRegex: "^Amazon\.com\s*:\s*",
        replaceStr: ""
    },
    {
        urlRegex: "^https?:\/\/(?:www\.)?bricklink\.com\/",
        replaceRegex: "^BrickLink (?:Reference Catalog )?\- ",
        replaceStr: ""
    }];

    window.addEventListener("load", function () {
        for (var i = 0; i < sites.length; i++) {
            if (urlMatches(RegExp(sites[i].urlRegex))) {
                retitle(RegExp(sites[i].replaceRegex), sites[i].replaceStr);
                break;
            }
        }
    });

    function retitle(replaceRegex, replaceStr) {
        document.title = document.title.replace(replaceRegex, replaceStr);
    }

    function urlMatches(urlRegex) {
        return urlRegex.test(window.location.href);
    }
})();