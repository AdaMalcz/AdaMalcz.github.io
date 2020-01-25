import React from 'react';
import { MDBCol } from 'mdbreact';

import NavLink from './NavLink';
import NavContainer from './NavContainer';
import NavDropdown from './NavDropdown';
import NavDropdownLink from './NavDropdownLink';

const Nav = () => {
    return (
      <MDBCol size="12">
        <nav>
          <NavContainer>
            
            <NavLink route="/" name="Home" />
            <NavLink route="/about" name="About me" />
            <NavLink route="/education" name="Education" />
            <NavLink route="/skills" name="Skills" />

            <NavDropdown name="Projects">
              <NavDropdownLink route="/projects/group" name={<span><i className="fas fa-users mr-3"></i>Group Projects</span>} />
              <NavDropdownLink route="/projects/solo" name={<span>&nbsp;<i className="fas fa-user mr-3"></i>&nbsp;Solo Projects</span>} />
            </NavDropdown>

            <NavLink route="/contact" name="Contact" />

          </NavContainer>
        </nav>
      </MDBCol>
    );
};

export default Nav;

/*
<NavDropdownLink route="/projects/group" name={<span><i className="fas fa-users mr-2"></i>Group Projects</span>} />
              <NavDropdownLink route="/projects/solo" name={<span><i className="fas fa-user mr-2"></i>Solo Projects</span>} />
               */