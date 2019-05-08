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

  render() {
    console.log('Render')
    const divStyle = {
      'textAlign': 'center'
    }
    const cars = this.state.cars 
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.changeTitleHandle.bind(this, 'Changed!')}  
        >Change Title </button>

        <Car 
          name={cars[0].name} 
          year={cars[0].year} 
          onChangeTitle={this.changeTitleHandle.bind(this, cars[0].name)}
        />
        <Car 
          name={cars[1].name} 
          year={cars[1].year} 
          onChangeTitle={() => this.changeTitleHandle(cars[1].name)}
        />
        <Car 
          name={cars[2].name} 
          year={cars[2].year} 
          onChangeTitle={() => this.changeTitleHandle(cars[1].name)}
        />
      </div>
    );
  }
}

export default App;
