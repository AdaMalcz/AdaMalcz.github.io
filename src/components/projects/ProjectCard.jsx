import React from 'react';
import { MDBCol } from 'mdbreact';
import DetailsButton from './DetailsButton';

const ProjectCard = props => {
  const backgroundStyle = { 
    backgroundImage: props.path ? `url(${props.path})` : "url(/project.png)", 
    backgroundSize: "cover", 
    backgroundPosition: "center",
  };

  return (
    <MDBCol md="6" className="my-2">
      <div className="card card-image h-100" style={backgroundStyle}>

        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 h-100">
          <div  className="h-100">
            <h3 className="pink-text">{props.icons}</h3>
            <h3 className="card-title pt-2"><strong>{props.title}</strong></h3>
            <p>{props.description}</p>
            <p><small><em>{props.footer}</em></small></p>
            <DetailsButton link={props.link} />
          </div>
        </div>

      </div>
    </MDBCol>
  );
};

export default ProjectCard;

/*
Alternative MDB card: 
https://mdbootstrap.com/docs/jquery/components/cards/#image-overlays
 */