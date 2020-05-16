import React, { Component } from 'react';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class Search extends Component {

  render() {

    const { charNum, currentCharacter } = this.props;
    const { name, height, mass, hair_color, eye_color } = currentCharacter

    return (
      <div>
        <label>Enter character code:</label>
        <div className="form-row">
          <div className="col-sm-4 my-1">
            <label className="sr-only" for="charNum">Character Number</label>
            <input 
              type="text" 
              className="form-control" 
              id="charNum" 
              value={charNum}
              onChange={(e) => {
                this.props.changeCharNum(e.target.value)
              }}
              />
          </div>
          <div className="col-auto my-1">
            <button 
              className="btn btn-primary"
              onClick={()=> {
                this.props.getCharacter();
              }}
              >Search</button>
          </div>
          <div className="col-md-12 bg-light mt-4 rounded p-4">
            <h3>{name}</h3>
            <hr></hr>
            <p><strong>Height: </strong> {height}</p>
            <p><strong>Mass: </strong> {mass}</p>
            <p><strong>Hair Color: </strong> {capitalize(hair_color)}</p>
            <p><strong>Eye Color: </strong> {capitalize(eye_color)}</p>
            <hr></hr>
            <button 
              className="btn btn-success btn-block"
              onClick={() => {
                this.props.addCharacter(currentCharacter);
              }}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;