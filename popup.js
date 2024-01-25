document.addEventListener('DOMContentLoaded', function() {
  // Add click event listener to the document
  document.addEventListener('click', function(event) {
    // Check if the clicked element is a button with inner text "Unsnooze"
    if (event.target.tagName === 'BUTTON' && isTargetButton(event.target)) {
      event.preventDefault();
      // Call the deleteAvaibility function
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'deleteAvaibility'});
      });
    }
  });
});
