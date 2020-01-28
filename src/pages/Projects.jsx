import React from 'react';
import { Link} from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <p className='text-center' style={{color: 'red'}}>Tempororary (unrouted) page.</p>

      <ul>
        <li><Link to="/projects/group">Group</Link></li>
        <li><Link to="/projects/solo">Solo</Link></li>
      </ul>

    </div>
  );
};

export default Projects;