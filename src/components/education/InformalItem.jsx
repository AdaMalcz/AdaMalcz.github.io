import React from 'react';

const InformalItem = props => {
  return(
    <tr>
      <th scope="row">{props.skill}</th>
      <td><a href={props.link} target="_blank">{props.source}</a></td>
    </tr>
  );
};

export default InformalItem;