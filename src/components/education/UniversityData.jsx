import React from 'react';
import { MDBCol } from 'mdbreact';

const UniversityData = props => {
    return (
        <li className="list-group-item">
            <MDBCol size="4">
                <b>{props.data}:</b>
            </MDBCol>
            <MDBCol size="8">{props.value}</MDBCol>
        </li>
    );
};

export default UniversityData;