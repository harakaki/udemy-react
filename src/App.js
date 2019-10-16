import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fefeasd', name: 'Max', age: 28 },
      { id: 'sadfe', name: 'Manu', age: 29 },
      { id: 'feasdew', name: 'Stephanie', age: 26 }
    ]
    , otherState: 'some other value'
    , showPersons:  false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (index) => {
    //const personsArray = this.state.persons.slice();
    const personsArray = [...this.state.persons];
    personsArray.splice(index, 1);
    this.setState({persons: personsArray});
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={p.name} 
                      age={p.age} 
                      key={p.id} 
                      changed={(event) => this.nameChangedHandler(event, p.id)}/>
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {persons}

      </div>
    );


  }
}

export default App;
