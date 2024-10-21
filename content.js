(function() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.action === 'expandBox') {
        document.querySelectorAll('div[class*="max-w-3xl"], div[class*="md:max-w-3xl"]')
          .forEach((element) => {
            element.style.maxWidth = `${request.width}%`;
          });
        sendResponse({ status: 'success' });
      }
    });
  })();