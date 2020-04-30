import React, { Component } from 'react';
import Header from './Header.js';
import request from 'superagent';
import PokeList from './PokeList.js';
import "./App.css";

export default class App extends Component {
  //setting the state to initalize on load
  state = {
    searchQuery: '',
    data: [],
    typeQuery: '',
    // abilityQuery: ''
  }
  
  handleChange = (event) => {
    //get value of the input;
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }

  handleType = (event) => {
    const value = event.target.value;
    this.setState({ typeQuery: value });
  
  }
  // handleType = (event) => {
  //   const value = event.target.value;
  //   this.setState({ abilityQuery: value });
  
  // }

  
  handleClick = async () => {
    // console.log('hello', this.state.searchQuery)
    // const fetchedData = await request.get();//grab pikachu
     const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&sort=${this.state.typeQuery}`)

      // console.log(fetchedData.body);
      this.setState({data: fetchedData.body.results});
  }

  render() {
    
    return (
      <div className="main">
        <Header className="header1" />
        
        <select onChange={this.handleType}>
          <option value=""></option>
          <option value="pokemon">Sort by name</option>
          <option value="type">Type of Pokemon</option>
        </select>
        
        <input onChange={this.handleChange} />
        {this.state.typeQuery}
        <button onClick={this.handleClick}>Search Name!</button>
        <PokeList pokemons={this.state.data}/>
        {/* {
          this.state.data.map(whatever => {
            return <h1>{whatever.pokemon}</h1>
          })
        } */}
      </div>
    )
  }
}
