function handleActivated(activeInfo) {
	// function to update the active extensions on current tab
}
browser.tabs.onActivated.addListener(handleActivated);

function handleUpdated(tabId, changeInfo, tabInfo) {
    if (changeInfo.url) {
      // update extensions' list on current tab if url changes
    }
  }
browser.tabs.onUpdated.addListener(handleUpdated);

// if user clicks on "Details" button in popup, it will open the Extension Activity Page
// if not nothing happens
document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("details")) {
    return;
  }

  browser.tabs.create({
    url: "extension_activity_page/activity_page.html"
  });

});