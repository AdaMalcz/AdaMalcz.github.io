import React from 'react';

import UniversityCard from '../components/education/UniversityCard';
import EducationList from '../components/education/EducationList';
import EducationItem from '../components/education/EducationItem';
import CertificatesList from '../components/education/CertificatesList';
import CertificatesItem from '../components/education/CertificatesItem';
import InformalList from '../components/education/InformalList';
import InformalItem from '../components/education/InformalItem';

const Education = () => {
  return (
    <div>
      <UniversityCard />

      <br/><br/>

      <h4>Formal Education</h4>
      <EducationList>
        <EducationItem 
          period="February 2018  – July 2019" 
          education="Biomedical Engineering, Biomedical Optics specialization (master's degree)"
          document="diploma (with distinction)"
        />
        <EducationItem 
          period="October 2014  – February 2018" 
          education="Biomedical Engineering, Biomedical Optics specialization (engineering degree)"
          document="diploma"
        />
      </EducationList>
      <p>My studies belonged to the interdisciplinary fields of science, combining medicine with engineering, as well as with the Information Technology.</p>
      <p>During my studies I learned a lot things such as working in group, using advanced equipment or conducting and analyzing scientific research. As part of an engineering thesis I designed and valued innovative medical device. My Master's thesis resulted in research providing grounds for designing another device, which my University is working on.</p>
      <p>I also got some experience with advanced engineering software and basics of programming. Checkout the Skills section for more details about them.</p>

      <br/><br/>

      <h4>Certificates</h4>
      <CertificatesList>
        <CertificatesItem 
          certificate="Web Development"
          organization="CodersCrew"
          link="https://coderscrew.pl/projekt-coderscamp/"
          skills="HTML5, CSS3, JavaScript (ES6), React, Redux, npm, Webpack, Babel, Git, GitHub, Node.js, Express, MongoDB"
          document="certificate (with distinction)"
          date="21/10/2019 - 11/01/2020, Wrocław (Poland)"
        />
      </CertificatesList>

      <br/><br/>

      <h4>Informal Education</h4>
      <InformalList>
        <InformalItem
          skill="Python" 
          source="codecademy: Learn Python 3 course"
          link="https://www.codecademy.com/learn/learn-python-3"
        />
        <InformalItem
          skill="C#" 
          source="codecademy: Learn C# course"
          link="https://www.codecademy.com/learn/learn-c-sharp"
        />
        <InformalItem
          skill="PHP" 
          source="codecademy: Learn PHP course"
          link="https://www.codecademy.com/learn/learn-php"
        />
      </InformalList>
    </div>
  );
};

export default Education;