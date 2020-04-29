import React, { Component } from 'react'
import Header from './Header.js'




export default class App extends Component {
  //setting the state to null
  state = {
    searchQuery: null,
  }
  
  handleChange = (event) => {
    //get value of the input;
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }
  
  render() {
    console.log('|| this.state.', this.state.searchQuery)
    return (
      <div>
        <Header />
        <input onChange={this.handleChange} />

      </div>
    )
  }
}
