import mixpanel from 'mixpanel-browser';

// TODO: Replace with your own token
mixpanel.init('', {
  persistence: 'localStorage',
});

chrome.storage.local.get(['user'], function (result) {
  if (result.user && result.user.userId) {
    mixpanel.identify(result.user.userId);
  }
});

export default mixpanel;
