// Background script for ProductScope extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('ProductScope extension installed');
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.action.openPopup();
  }
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.action === 'saveAnalysis') {
    // Save analysis to local storage
    chrome.storage.local.set({
      ['analysis_' + Date.now()]: request.data
    }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
  
  if (request.action === 'getAnalyses') {
    chrome.storage.local.get(null, (items) => {
      const analyses = Object.entries(items)
        .filter(([key]) => key.startsWith('analysis_'))
        .map(([key, value]) => ({ timestamp: key, data: value }));
      sendResponse(analyses);
    });
    return true;
  }
});

console.log('ProductScope background script loaded');
