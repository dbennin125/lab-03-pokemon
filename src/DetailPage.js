import React, { Component } from 'react';
import Header from './Header.js';
import request from 'superagent';
import PokeList from './PokeList.js';
import "./App.css";
import SearchSection from './SeachSection.js'

export default class App extends Component {
  //setting the state to initalize on load
  state = {
    searchQuery: '',
    data: [],
    typeQuery: '',
    // hiddenAbilityQuery: '',
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
  // handleAbility = (event) => {
  //   const value = event.target.value;
  //   this.setState({ hiddenAbilityQuery: value });
  
  // }

  
  handleClick = async () => {
    // console.log('hello', this.state.searchQuery)
      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&sort=${this.state.typeQuery}&sort=${this.state.hiddenAbilityQuery}`)
     
      // console.log(fetchedData.body);
      this.setState({data: fetchedData.body.results});
  }

  render() {
    
    return (
      <div className="main">
        <Header className="header1" />
        
        <SearchSection MYNEWHandleChange={this.handleChange} MYNEWHandleClick={this.handleClick}/>

          {/* {this.state.hiddenAbilityQuery} */}
          {this.state.typeQuery}

        <PokeList pokemons={this.state.data}/>

      </div>
    )
  }
}
