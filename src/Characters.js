import React, { Component } from 'react';
import Character from './Character';

class Characters extends Component {

  
  render() {

    return (
      <div>
        <h2>Saved Characters</h2>
        <hr></hr>
        {
        this.props.characters.map((char, i) => {
          return <Character info={char} key={i} />
        })}
      </div>
    )
  }
}


export default Characters;