import React from 'react';

const EducationItem = props => {
  return(
    <tr>
      <th scope="row">{props.period}</th>
      <td>{props.education}</td>
      <td>{props.document}</td>
    </tr>
  );
};

export default EducationItem;