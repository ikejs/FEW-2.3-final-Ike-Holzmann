import React, { Component } from 'react';
import Title from './Title';
import Search from './Search';
import Characters from './Characters';
import { response } from 'express';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      charNum: 1,
      currentCharacter: {},
      characters: []
    }
  }

  getCharacter = (num) => {
    fetch(`https://swapi.dev/api/people/${num}/`)
      .then(response1 => response1.json())
      .then(character => {
        fetch(`https://swapi.dev/api/planets/${num}/`)
          .then(response2 => response2.json())
          .then(homeworld => {
            console.log(character + homeworld)
          });
      })
     

  }

  changeCharNum(num) {
    this.setState({ charNum: num })
  }

  addCharacter = (character) => {
    const newCharacters = this.state.characters.concat(character);
    this.setState({ characters: newCharacters })
  }

  componentDidMount() {
    this.getCharacter('1');
  }

  render() {

    const { charNum, currentCharacter, characters } = this.state;

    return (
      <div>
        <div className="bg-dark text-light text-center">
          <Title name="Ike" MSclass="FEW 2.3" />
        </div>
        <div className="col-md-12 m-4">
          <div className="col-md-3 float-left">
            <Search 
              charNum={charNum} 
              currentCharacter={currentCharacter} 
              getCharacter={() => {
                this.getCharacter(this.state.charNum);
              }}
              addCharacter={(character => {
                this.addCharacter(character);
              })}
              changeCharNum={(num) => {
                this.changeCharNum(num);
              }}
            />
          </div>
          <div className="col-md-4 float-right">
            <Characters characters={characters} />
          </div>
        </div>
      </div>
    )
  }
}


export default Home;