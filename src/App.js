import React, { Component } from 'react'
import Header from './Header.js'




export default class App extends Component {
  handleChange = (event) => {
    //get value of the input;
    const value = event.target.value;
    console.log('good', value);
  }
  
  render() {
    return (
      <div>
        <Header />
        <input onChange={this.handleChange} />

      </div>
    )
  }
}
