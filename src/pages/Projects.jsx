import React from 'react';
import { Link} from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>

      <Link to="/projects/group">Group</Link>
      <Link to="/projects/solo">Solo</Link>
    </div>
  );
};

export default Projects;