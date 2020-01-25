import React from 'react';

const EducationItem = props => {
  return(
    <tr>
      <th scope="row">{props.certificate}</th>
      <td><a href={props.link} target="_blank">{props.organization}</a></td>
      <td>{props.skills}</td>
      <td>{props.document}</td>
      <td>{props.date}</td>
    </tr>
  );
};

export default EducationItem;