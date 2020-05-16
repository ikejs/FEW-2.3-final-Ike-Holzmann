import React from 'react';

function Title(props) {
  const { name, MSclass } = props;
  return (
  <h1>{name} - {MSclass}</h1>
  )
}

export default Title;