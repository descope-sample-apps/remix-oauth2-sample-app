self.addEventListener("error", function (e) {
  console.error("Error in the background worker", e);
});

// Handle unhandled promise rejections
self.addEventListener("unhandledrejection", function (e) {
  console.error("Unhandled rejection in the background worker", e);
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome Extension with React and Manifest V3 is installed.");
});

chrome.action.onClicked.addListener((tab) => {
  console.log("Extension icon clicked");
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["inject-script.js"],
  });
});
