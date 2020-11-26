// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let fetch = document.getElementById('retrieveData');
fetch.onclick = function () {
    let text = document.getElementById('fname').value;
    let url = 'https://www.mathworks.com/support/search.html?q=' + text + '&fq=asset_type_name:documentation/function&page=1';
};
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
