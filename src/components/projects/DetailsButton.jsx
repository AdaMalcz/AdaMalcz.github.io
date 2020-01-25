import React from 'react'

import { Link } from 'react-router-dom'

const DetailsButton = props => {
  return <Link className="btn btn-pink" to={props.link}><i className="fas fa-clone left"></i> Project Details</Link>;
}

export default DetailsButton;