import { setupSentry } from '../../sentry.js';

// set translations on install and oen welcome page
chrome.runtime.onInstalled.addListener(async (details) => {
  // open welcome page on install
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    const welcomePage = chrome.runtime.getURL('welcome.html');
    chrome.tabs.create({
      url: welcomePage,
    });
  }
});

// update translations every 30 minutes
chrome.alarms.create('updateTranslations', { periodInMinutes: 30 });

chrome.alarms.onAlarm.addListener(async (alarm) => {
  setupSentry();

  if (alarm.name === 'updateTranslations') {
    // fetch translations
    const translations = "";
    chrome.storage.local.set({ translations });
  }
});

// listen for tab updates
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  setupSentry();
  // check if tab update is complete and tab is active
  if (changeInfo.status === 'complete' && tab.active) {
    console.log('tab updated', tabId, changeInfo, tab);
    chrome.tabs.sendMessage(tabId, { action: 'showModal' });
  }
});
