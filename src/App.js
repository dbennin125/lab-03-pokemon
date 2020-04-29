import React, { Component } from 'react'
import Header from './Header.js'
import request from 'superagent';

const data = [{
  _id: "5cef3501ef6005a77cd4fdd0",
  pokemon: "pichu",
  url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png",
}]


export default class App extends Component {
  //setting the state to null
  state = {
    searchQuery: null,
    data: data,
  }
  
  handleChange = (event) => {
    //get value of the input;
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }
  gi
  render() {
    console.log('|| data', data)
    return (
      <div>
        <Header />
        <input onChange={this.handleChange} />
        {
          this.state.data.map(whatever => {
            return <h1>{whatever.pokemon}</h1>
          })
        }
      </div>
    )
  }
}
