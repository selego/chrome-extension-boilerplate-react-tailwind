import React, { useEffect, useState } from 'react';

import mixpanel from 'mixpanel-browser';
import { useTranslation } from 'react-i18next';

export const Modal = ({ onClickClose }) => {
  const { t } = useTranslation();

  return (
   <div className='fixed top-5 left-5 h-20 w-20 bg-black z-[9999] text-white'>
      <button className='p-3 bg-white text-black' onClick={onClickClose}>close</button>
      show modal 
   </div>
  );
};
