import { 
  detectTechStack, 
  getSEOInsights, 
  getAccessibilityScore,
  getPerformanceMetrics,
  getMobileResponsiveness,
  getSecurityAnalysis,
  getSocialMediaIntegration
} from '../utils/analyzer';

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.action === 'analyze') {
    try {
      const tech = detectTechStack();
      const seo = getSEOInsights();
      const accessibility = getAccessibilityScore();
      const performance = getPerformanceMetrics();
      const mobile = getMobileResponsiveness();
      const security = getSecurityAnalysis();
      const social = getSocialMediaIntegration();
      
      sendResponse({
        tech,
        seo,
        accessibility,
        performance,
        mobile,
        security,
        social,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Analysis error:', error);
      sendResponse({
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        tech: null,
        seo: null,
        accessibility: null,
        performance: null,
        mobile: null,
        security: null,
        social: null
      });
    }
  }
  
  // Return true to indicate we'll send a response asynchronously
  return true;
});

// Notify that content script is loaded
console.log('ProductScope content script loaded with advanced analysis');
