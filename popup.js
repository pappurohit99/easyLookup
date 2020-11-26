// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var cheerio = require('cheerio');
var request = require('request');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
var query = 'solve';
var url = 'https://www.mathworks.com/support/search.html?q=' + query + '&fq=asset_type_name:documentation/function&page=1';

var getHTML = function (url, callback) {
    // Feature detection
    if (!window.XMLHttpRequest) return;

    // Create new request
    // eslint-disable-next-line no-undef
    var xhr = new XMLHttpRequest();

    // Setup callback
    xhr.onload = function () {
        if (callback && typeof (callback) === 'function') {
            callback(this.responseXML);
        }
    };

    // Get the HTML
    xhr.open('GET', url);
    xhr.responseType = 'document';
    xhr.send();
};

getHTML(url, function (response) {
    console.log(response.querySelector('ol'));
});
// let text = document.getElementById('fname').innerText;
// console.log(text);

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// fetch.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
