import React, { Component } from 'react';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class Character extends Component {

  render() {
    
    const { name, height, mass, hair_color, eye_color } = this.props.info;

    return(
      <div className="col-md-12 bg-light mt-4 rounded p-4">
        <h3>{name}</h3>
        <hr></hr>
        <p><strong>Height: </strong> {height}</p>
        <p><strong>Mass: </strong> {mass}</p>
        <p><strong>Hair Color: </strong> {capitalize(hair_color)}</p>
        <p><strong>Eye Color: </strong> {capitalize(eye_color)}</p>
      </div>
    )
  }
}

export default Character;