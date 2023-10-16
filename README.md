# Web extension boilerplate

Inpired by: https://github.com/tyn1998/chrome-extension-boilerplate-react

## How to run
#### Make sure to have node >= 18
install: `npm install` 
dev mode: `npm run start`
build mode: `npm run build`

## Uses
- React
- Tailwind
- sentry 
- mixpanel 
- redux (in Popup/)
- react router (in Popup/)

## Note
The content script cannot be hot reloaded, so you need to reload the extension manually after changing the content script.



# How to convert to Safari extension on iOS / MacOS

Official documentation [here](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari).

### Convert

Run on the terminal the following command, that will convert the extension in a new Xcode project:
`/Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter ./macadam-cashback/dist`

### Test on Safari for MacOS

1. [Configure Safari in macOS to run unsigned extensions](https://developer.apple.com/documentation/safariservices/safari_web_extensions/running_your_safari_web_extension#3744467)
2. On Xcode, at the top, select "Macadam Cashback (macOS)" and click on the "Run" button.
3. Enable the extension on Safari, and make sure to allow the extension on all websites.

### Test on Safari for iOS

1. On Xcode, at the top, select "Macadam Cashback (iOS)" and click on the "Run" button.
2. On iOS, go in Settings > Safari to allow the extension.
3. On Safari, make sure to allow the extension on all websites.
