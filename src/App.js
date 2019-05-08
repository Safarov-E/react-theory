import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: '2018'},
      {name: 'Audi', year: '2016'},
      {name: 'Mazda', year: '2010'}
    ], 
    pageTitle: 'React Component'
  }

  changeTitleHandle = (newTitle) => {
    this.setState({
      pageTitle:  newTitle
    })
  }

  handleInput = (event) => {
    console.log('Changed', event.target.value)

    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    console.log('Render')
    const divStyle = {
      'textAlign': 'center'
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput}/>

        <button 
          onClick={this.changeTitleHandle.bind(this, 'Changed!')}  
        >Change Title </button>

        { this.state.cars.map((car, index) => {
          return (
            <Car
              key={index} 
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandle(car.name)}
            />
          )
        }) } 
      </div>
    );
  }
}

export default App;
