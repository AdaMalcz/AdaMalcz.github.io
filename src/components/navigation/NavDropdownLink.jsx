import React from 'react';
import { Link } from 'react-router-dom';
import { MDBDropdownItem } from 'mdbreact';

const NavDropdownLink = props => {
    return (
        <Link to={props.route}>
            <MDBDropdownItem>{props.name}</MDBDropdownItem>
        </Link>
    );
};

export default NavDropdownLink;
