import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';

/* img from pixabay.com (Dariusz Sankowski) */
import UniversityImage from './UniversityImage';
import UniversityDescription from './UniversityDescription';
import UniversityInfo from './UniversityInfo';

const UniversityCard = () => {
  return (
      <MDBRow>
        <MDBCol md="3" className="mb-2">
          <UniversityImage path="/university.jpg" />
        </MDBCol>
        <MDBCol md="9">
          <UniversityDescription title="Higher Education">
            <UniversityInfo data="University" value="Wrocław University of Science and Technology" />
            <UniversityInfo data="Faculty" value="Faculty of Fundamental Problems of Technology" />
            <UniversityInfo data="Academic Title" value="Master of Science, engineer" />
          </UniversityDescription>
        </MDBCol>
      </MDBRow>
  );
};

export default UniversityCard;