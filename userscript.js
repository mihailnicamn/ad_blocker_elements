// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @grant        none
// ==/UserScript==

(async function () {
    'use strict';
    const elements_array_url = 'https://raw.githubusercontent.com/mihailnicamn/ad_blocker_elements/main/elemets.json'
    const elements_array = await fetch(elements_array_url).then(response => response.json())
    setInterval(() => {
        for (let i = 0; i < elements_array.length; i++) {
            const element = elements_array[i]
            if (element.includes('.')) {
                var __ = element.replace('.', '')
                var _ = document.getElementsByClassName(__)
                if(_) {
                    console.log('found element with class name: ' + __)
                for (let i = 0; i < _.length; i++) {
                    const element = _[i];
                    element.remove()
                }
            }
            } else if (element.includes('#')) {
                var __ = element.replace('#', '')
                var _ = document.getElementById(__)
                if (_) {
                    console.log('found element with id: ' + __)
                    _.remove()
                }
            } else {
                var _ = document.getElementsByTagName(element)
                if (_) {
                    console.log('found element with tag name: ' + element)
                    for (let i = 0; i < _.length; i++) {
                        const element = _[i];
                        element.remove()
                    }
                }
            }
        }
        console.log("ad blocker is running")
    }, 1000)

})();