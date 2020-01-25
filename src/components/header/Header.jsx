import React from 'react';
import { MDBRow } from 'mdbreact';

import Logo from './Logo';
import Nav from '../navigation/Nav';


const Header = props => {
  return (
    <>
      <MDBRow><Logo title={props.title}/></MDBRow>
      <MDBRow><Nav /></MDBRow>
    </>
  );

};

export default Header;