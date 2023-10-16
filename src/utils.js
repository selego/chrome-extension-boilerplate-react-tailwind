// extract the main domain from a given hostname
export function extractMainDomain(hostname) {
  const parts = hostname.split('.');
  if (parts.length <= 2) return hostname;
  return parts.slice(-2).join('.');
}

export function detectedLang() {
  // detect user langage preferences
  let lang = (navigator.language || navigator.userLanguage).toLowerCase();
  if (lang.startsWith('en-gb')) lang = 'en_gb';
  else if (lang.startsWith('en-us')) lang = 'en_us';
  else if (lang.startsWith('fr')) lang = 'fr';
  else if (lang.startsWith('es')) lang = 'es';

  return lang || 'en_gb';
}

export const getKeyFromLocalStorage = async (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], function (result) {
      resolve(result[key]);
    });
  });
};

export const getCurrentTabDomain = async () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const domain = extractMainDomain(new URL(currentTab.url).hostname);
      resolve(domain);
    });
  });
};
