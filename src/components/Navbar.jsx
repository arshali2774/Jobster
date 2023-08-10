import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
const Navbar = () => {
  return (
    <Wrapper>
      <h2>Navbar</h2>
      <FaAlignLeft />
      <FaCaretDown />
      <FaUserCircle />
    </Wrapper>
  );
};

export default Navbar;