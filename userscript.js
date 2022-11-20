// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    const elements_array_url = 'https://raw.githubusercontent.com/mihailnicamn/ad_blocker_elements/main/elemets.json' 
    const elements_array = await fetch(elements_array_url).then(response => response.json())
    setInterval(() => {
    for (let i = 0; i < elements_array.length; i++) {
        const element = elements_array[i]
        const element_to_remove = document.querySelector(element)
        if (element_to_remove) {
            element_to_remove.remove()
        }
    }
    }, 1000)

})();