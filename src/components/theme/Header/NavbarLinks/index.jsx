import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useDarkMode from 'use-dark-mode';

import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const darkMode = useDarkMode(false);

  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <button type="button" onClick={darkMode.toggle}>
        Theme
      </button>
    </Wrapper>
  );
};

export default NavbarLinks;
