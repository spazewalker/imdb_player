chrome.runtime.onMessage.addListener(
  function(message, callback) {
    if (message == "runscript"){
      chrome.tabs.executeScript({
        file: 'script.js'
      });
    }
 });