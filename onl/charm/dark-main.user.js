// ==UserScript==
// @name         Dark Theme 2.0 - Rick
// @namespace    https://charm.onl
// @version      0.2
// @description  New zarpgaming.com theme!
// @author       Charm
// @match        http*://*.zarpgaming.com/*
// @downloadURL  https://dev.charm.onl/zarpgaming/scripts/themes/dark-main.user.js
// @updateURL    https://dev.charm.onl/zarpgaming/scripts/themes/dark-main.user.js
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @require      https://github.com/0xcharm/ZARPGAMING_dark-theme/raw/master/onl/charm/dark-main.user.js
// @run-at       document-idle
// @grant        none
// ==/UserScript==

//Header:start
const navItems = $("div.rt-grid-9 div.rt-block ul.gf-menu").children();
const dropdownItems = function () {
    let i;
    let a = [];
    for (i = 0; i < navItems.length; i++) {
        if (navItems[i].classList[1] == "parent") {
            a.push(navItems[i]);
        }
    }
    return a;
};


console.log(dropdownItems());
console.log(navItems);
//elems:: FINISHED
//TO-DO: CSS&HTML re-make.