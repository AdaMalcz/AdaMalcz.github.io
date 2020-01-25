import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

const SkillHeader = props => {
  return(
    <div>
      <MDBRow>
        <MDBCol className="text-center">
          <h4>{props.skill}</h4>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="3">
          <div className="d-flex h-100 justify-content-center align-items-center">
            <div>
              <img src={props.path} className="img-fluid" alt="Skill icon" style={{maxHeight: "250px"}}/>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="9">
          <div className="d-flex h-100 align-items-center">
            <div className="w-100">
              {props.type === "list" ? <ul className="d-flex flex-wrap flex-column" style={{maxHeight: "250px"}}>{props.children}</ul> : <p className="text-center">{props.children}</p>}
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default SkillHeader;

/* 
!!! SkillCard mini ekrany bez maxHeight
rozwiazanie?

https://codepen.io/richerimage/pen/jEXWWG
https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 400) {
      $('.test').removeClass('blue');
    } else if (ww >= 401) {
      $('.test').addClass('blue');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});




multi column list? https://stackoverflow.com/questions/6509106/is-there-a-way-to-break-a-list-into-columns [done]
*/