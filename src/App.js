import React, { Component } from 'react'
import Header from './Header.js'




export default class App extends Component {
  handleChange = () => {
    console.log('good day')
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
