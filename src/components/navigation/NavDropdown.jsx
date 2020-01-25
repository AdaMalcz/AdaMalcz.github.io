import React from 'react';
import { MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu } from 'mdbreact';

const NavDropdown = props => {
    return (
        <MDBNavItem>
            <MDBDropdown>
                <MDBDropdownToggle nav caret style={{color: "black"}}>
                    <span className="mr-2 text-dark font-weight-bold">{props.name}</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>{props.children}</MDBDropdownMenu>
            </MDBDropdown>
        </MDBNavItem>
    );
};

export default NavDropdown;
