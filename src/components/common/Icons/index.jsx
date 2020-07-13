import React from 'react';
import useDarkMode from 'use-dark-mode';

import LightFork from '../../../assets/icons/fork.svg';
import LightStar from '../../../assets/icons/star.svg';
import DarkFork from '../../../assets/icons/fork-dark.svg';
import DarkStar from '../../../assets/icons/star-dark.svg';

export const Fork = () => {
  // Logo transition based on dark or light mode
  const { value: darkMode } = useDarkMode(false);

  return <>{darkMode ? <img src={DarkFork} alt="dark fork" /> : <img src={LightFork} alt="light fork" />}</>;
};

export const Star = () => {
  // Logo transition based on dark or light mode
  const { value: darkMode } = useDarkMode(false);

  return <>{darkMode ? <img src={DarkStar} alt="dark star" /> : <img src={LightStar} alt="light star" />}</>;
};
