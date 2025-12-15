import { detectTechStack, getSEOInsights, getAccessibilityScore } from '../utils/analyzer';

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.action === 'analyze') {
    try {
      const tech = detectTechStack();
      const seo = getSEOInsights();
      const accessibility = getAccessibilityScore();
      
      sendResponse({
        tech,
        seo,
        accessibility,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Analysis error:', error);
      sendResponse({
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        tech: null,
        seo: null,
        accessibility: null
      });
    }
  }
  
  // Return true to indicate we'll send a response asynchronously
  return true;
});

// Notify that content script is loaded
console.log('ProductScope content script loaded');
