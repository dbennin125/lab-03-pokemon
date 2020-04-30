import React, { Component } from 'react';
import Header from './Header.js';
import request from 'superagent';
import PokeList from './PokeList.js';

export default class App extends Component {
  //setting the state to initalize on load
  state = {
    searchQuery: '',
    data: [],
  }
  
  handleChange = (event) => {
    //get value of the input;
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }
  
  handleClick = async () => {
    // console.log('hello', this.state.searchQuery)
    // const fetchedData = await request.get();//grab pikachu
     const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&sort=${this.state.sortInput}`)

      // console.log(fetchedData.body);
      this.setState({data: fetchedData.body.results});
  }

  render() {
  
    return (
      <div>
        <Header />
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search Name of Water Type Pokemon!</button>
        
        {
          this.state.data.map(whatever => {
            return <h1>{whatever.pokemon}</h1>
          })
        }
      </div>
    )
  }
}
