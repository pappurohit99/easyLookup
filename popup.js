

document.addEventListener('DOMContentLoaded', function() {
  let code = document.getElementById('fname');
	chrome.storage.sync.get(stored => {
		code.value = stored.content
	})
	
}, false);

let fetch = document.getElementById('retrieveData');

fetch.onclick = function () {
    let text = document.getElementById('fname').value
    if (text != "") {
    	let url = 'https://www.mathworks.com/support/search.html?q=' + text + '&fq=asset_type_name:documentation/function&page=1';
    	window.open(url);
    }
    else {
    	window.alert("Please enter a function first")
    }

};
