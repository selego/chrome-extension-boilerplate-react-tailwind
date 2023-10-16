import React from 'react';
import { createRoot } from 'react-dom/client';

import { Tab } from './tab';
import '../../styles/main.css';

const root = createRoot(document.body);

root.render(
  <div className="bg-yellow-600 h-20">
    New tab page
    <Tab />
  </div>
);
