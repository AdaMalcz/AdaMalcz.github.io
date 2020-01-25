import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

// image from: https://pixabay.com/pl/illustrations/mail-wiadomo%C5%9Bci-adres-e-mail-1454731/
const ContactHeader = () => {
  return(
    <MDBRow>
      <MDBCol md="3" className="text-center">
        <img src="/mail.png" className="img-fluid" alt="Contact image" style={{ maxHeight: "200px" }}/>
      </MDBCol>
      <MDBCol md="9">
        <div className="d-flex h-100 align-items-center">
          <p>If you wish to contact me visit one of my social media profiles or send me an e-mail via contact form below.</p>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default ContactHeader