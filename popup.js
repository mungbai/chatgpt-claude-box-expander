document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function() {
      var platformInput = document.getElementById('platform');
      var widthInput = document.getElementById('width');
      var platform = platformInput.value.trim().toLowerCase();
      var width = parseInt(widthInput.value.trim());
  
      if (platform === 'chatgpt' || platform === 'claude') {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.executeScript(tabs[0].id, {
            code: `
              document.querySelectorAll('div[class*="max-w-3xl"], div[class*="md:max-w-3xl"]')
                .forEach((element) => {
                  element.style.maxWidth = "${width}%";
                });
            `
          });
        });
      } else {
        alert('Currently, only ChatGPT and Claude are supported. More platforms may be added in the future.');
      }
    });
  });