// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $.ajax({
        url: "https://raw.githubusercontent.com/mihailnicamn/ad_blocker_elements/main/elemets.json",
        dataType: "json",
        success: function(data) {
            //remove all elements based on selector array data
            data.forEach(function(selector) {
                $(selector).remove();
            });
        }
    });
})();