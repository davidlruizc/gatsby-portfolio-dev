import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';

import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';
import brandingLogo from '../../../../assets/illustrations/davidlecodes.svg';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <img src={brandingLogo} alt="branding" />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
