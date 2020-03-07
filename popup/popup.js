function handleActivated(activeInfo) {
	// function to update the active extensions on current tab
}
browser.tabs.onActivated.addListener(handleActivated);

function handleUpdated(tabId, changeInfo, tabInfo) {
    if (changeInfo.url) {
      // update extensions' list on current tab
    }
  }
  browser.tabs.onUpdated.addListener(handleUpdated);