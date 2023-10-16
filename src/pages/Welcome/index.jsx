import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useTranslation } from 'react-i18next';

import '../../lang';
import '../../styles/main.css'
// import mixpanel from '../../mixpanel';

// import { setupSentry } from '../../sentry';

const Welcome = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // mixpanel.track('chrome welcome_page');
  }, []);

  return (
    <div className='w-full bg-orange-100 h-screen'>
      Welcome page
    </div>
  );
};

// setupSentry();
const container = document.getElementById('welcome-page');
const root = createRoot(container);
root.render(<Welcome />);
