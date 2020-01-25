import React from 'react';
import HomeCard from '../components/home/HomeCard';

const Home = () => {
  return (
    <>
    <HomeCard path="/goals.png" title="Goals">
      <p><strong>My ambition is to become software or web developer</strong> and currently I am focused on a short-term goal, which is improving my programming skills. I started with the Python language, which encouraged me to challenge myself in the IT, but the more I learn, the more open I am to other languages and programming styles. I am looking forward to all opportunities that could bring me closer to realizing my career plan in IT.</p>
    </HomeCard>
    <HomeCard path="/motivations.png" title="Motivations">
      <p>Problem solving is my favorite aspect of programming. There is no greater satisfaction source for me, than figuring out how to use the computational power to reach the objective, especially when it did not come easy. The variety of technologies and solutions are also exciting for me, because I am sure that there will be always something new to learn and I will not be bored in the IT field. <strong>I chose that career path becouse of my life motto:</strong></p>
      <p className="text-center"><q><em>Choose a job you love, and you will never have to work a day in your life</em></q>, <b>Confucius</b></p>
    </HomeCard>
    <HomeCard path="/efforts.jpg" title="Efforts">
      <p>When I completed my first online programming course I initiated my own open-source projects. As a <strong>highly motivated self-taugh</strong> I also participated in the latest edition of Coders Camp in Wrocław, where I learned about HTML, CSS and JavaScript. I finished the bootcamp with high score, which gave me a distinction certificate. In order to better understand the IT world, I‘m following the local social media channels looking for the IT-related events in Wrocław, such us meetups, conferences and career fairs.</p>
    </HomeCard>
    <HomeCard path="/status_looking.png" title="Status">
      <p><strong>Currently I am actively looking for a job.</strong> I am interested in Junior Developer or Tester position, but I am also open to paid internships.</p>
      <p>I am not attached to any language or technology - I enjoy programming in general and I will gladly learn new skills if necessary.</p>
    </HomeCard>
    </>
  );
};

export default Home;