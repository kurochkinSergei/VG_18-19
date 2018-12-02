import React, { Component } from 'react';
import './App.css';

class Human extends Component {
  // constructor(props) {
  //   super(props);
  //   this.firstName = props.firstName;
  //   this.lastName = props.lastName;
  //   this.age = props.age;
  // }

  sayHi(city) {
    return 'HELLO MY NAME IS - ' + this.props.firstName + ' ' + this.props.lastName + ' I am from ' + city;
  }

  render() {
    console.log("HUMAN PROPS:", this.props);
    
    // то же самое, что
    // const firstName = this.props.firstName;
    // это называется  destructive assignment
    const { firstName, lastName, age } = this.props;

    return <div>
        <h2>Person name: { firstName } { lastName }</h2>     
        <h2>Person age: { age }</h2>
        <p>
          Greeting: { this.sayHi('Berlin') }
        </p>     
    </div>
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = { counter: 0 }
  }

  incCounter = () => {
    let currentCounter = this.state.counter;
    this.setState({ counter: currentCounter +1 })
  }

  render() {
    // let mike = new Human('Michael', 'Vundershaft', 57);
    // console.log(mike);

    // mike.sayHi('Berlin');

    return (
      <div className="counter-wrapper">
        <h1>Hello world</h1>
        <div>
          
          {this.state.counter}
        </div>
        <button>-</button>
        <button onClick={this.incCounter}>+</button>

        <Human firstName={'Ron'} lastName={'Little'} age={20} />
        <Human firstName={'Katty'} lastName={'Middle'} age={18} />
      </div>
      )
  }
}

export default App;
