export const sendMessageToPopup = (message: any) => {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(message, resolve);
  });
};

export const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
};

export const analyzeCurrentTab = async () => {
  const tab = await getCurrentTab();
  if (!tab.id) throw new Error('No active tab');
  
  const response = await chrome.tabs.sendMessage(tab.id, { action: 'analyze' });
  return response;
};
