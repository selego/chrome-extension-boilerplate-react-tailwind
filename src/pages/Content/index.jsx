import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { twind, cssom, observe } from "@twind/core";
import "construct-style-sheets-polyfill";

import '../../styles/main.css'
import config from "./twind.config";

import '../../lang';

import { setupSentry } from '../../sentry';
import { Modal } from './Modal';

const Content = () => {
  const [displayedComponent, setDisplayedComponent] = useState(null);
  console.log('content script loaded');

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('message received', message);
    if (message.action === 'showModal') {
      setDisplayedComponent(
        <Modal onClickClose={() => setDisplayedComponent(null)} />
      );
    }

    return true;
  });

  return <>{displayedComponent}</>;
};

const shadow = document.createElement('div');
shadow.id = 'shadow';
const shadowRoot = shadow.attachShadow({ mode: 'open' });

// set up twind
const sheet = cssom(new CSSStyleSheet());
const tw = twind(config, sheet);

// link sheet target to shadow dom root
shadowRoot.adoptedStyleSheets = [sheet.target];
observe(tw, shadowRoot);

const root = createRoot(shadowRoot);
document.body.parentNode.insertBefore(shadow, document.body.nextSibling);

// add fonts
(async () => {
  const yallaURL = await fetch(chrome.runtime.getURL('yalla.woff2'));
  const satoshiURL = await fetch(chrome.runtime.getURL('Satoshi-Medium.woff2'));

  const fontFaceYalla = new FontFace('Yalla', `url(${yallaURL.url})`);
  document.fonts.add(fontFaceYalla);

  const fontFaceSatoshi = new FontFace('Satoshi', `url(${satoshiURL.url})`);
  document.fonts.add(fontFaceSatoshi);
})();

root.render(
  <>
    <Content />
  </>
);
