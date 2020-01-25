import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

import SocialBar from '../components/contact/SocialBar';
import SocialIcon from '../components/contact/SocialIcon';
import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';

const Contact = props => {
  return (
    <>
      <ContactHeader />
      <SocialBar>
        <SocialIcon icon="facebook-square" link="https://www.facebook.com/adam.malczewski.549"/>
        <SocialIcon icon="linkedin" link="https://linkedin.com/in/AdaMalcz"/>
        <SocialIcon icon="github-square" link="https://github.com/AdaMalcz"/>
        <SocialIcon icon="bitbucket" link="https://bitbucket.org/AdaMalcz/ "/>
      </SocialBar>
      <br />
      <ContactForm {...props}/>
    </>
  );
}

export default Contact;