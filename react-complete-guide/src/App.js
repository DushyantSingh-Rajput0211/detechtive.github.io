import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Dushyant', age: 30}  
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximus';
    
    this.setState( {
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Dushyant', age: 30}
      ]
    } )
  }

    nameChangedHandler = (event) => {
      this.setState( {
        persons: [
          {name: 'Max', age: 28},
          {name: event.target.value, age: 29},
          {name: 'Dushyant', age: 30}
        ]
      } )
    }

  render() {
    // Inline Styling method in JS for Button Tag
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        {/* we can use either of the button render methods mentioned below. First method is more advisable to be used if possible.  */}
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch here</button> */}
        <button
          style={styles} 
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch here</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} > My hobby is Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />

      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App' },'this is React'));
   
  }
}

export default App;
