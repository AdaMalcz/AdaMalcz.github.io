import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './SkillHeader.css';

const SkillHeader = props => {
  return(
    <div>
      <MDBRow>
        <MDBCol className="text-center">
          <h4>{props.skill}</h4>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="3" className="mb-3">
          <div className="d-flex h-100 justify-content-center align-items-center">
            <div>
              <img src={props.path} className="img-fluid" alt="Skill icon" style={{maxHeight: "250px"}}/>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="9">
          <div className="d-flex h-100 align-items-center">
            <div className="w-100">
              {props.type === "list" ? <ul className="d-flex flex-wrap flex-column tools-list">{props.children}</ul> : <p className="text-center">{props.children}</p>}
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default SkillHeader;