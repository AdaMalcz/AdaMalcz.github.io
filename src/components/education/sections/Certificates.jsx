import React from 'react';

import CertificatesList from '../CertificatesList';
import CertificatesItem from '../CertificatesItem';
import DistionctionStar from '../../DistinctionStar';

const Certificates = () => {
  return (
    <div>
      <h4>Certificates</h4>
      <CertificatesList>
        <CertificatesItem 
          certificate="Web Development"
          organization="CodersCrew"
          link="https://coderscrew.pl/projekt-coderscamp/"
          skills="HTML5, CSS3, JavaScript (ES6), React, Redux, npm, Webpack, Babel, Git, GitHub, Node.js, Express, MongoDB"
          document={<span>certificate <DistionctionStar /></span>}
          date="21/10/2019 - 11/01/2020, Wrocław (Poland)"
        />
      </CertificatesList>
    </div>
  );
};

export default Certificates;