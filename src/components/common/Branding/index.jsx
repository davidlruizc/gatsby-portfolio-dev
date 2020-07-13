import React from 'react';
import useDarkMode from 'use-dark-mode';

import LightBranding from '../../../assets/illustrations/davidlecodes.svg';
import DarkBranding from '../../../assets/illustrations/davidlecodes-dark.svg';

export const Branding = () => {
  // Logo transition based on dark or light mode
  const { value: darkMode } = useDarkMode(false);

  return <>{darkMode ? <img src={DarkBranding} alt="dark brand" /> : <img src={LightBranding} alt="light brand" />}</>;
};
