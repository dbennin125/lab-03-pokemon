import React, { Component } from 'react';

import request from 'superagent';
import CardItem from './CardItem.js';
import "./App.css";
import SearchBar from './SeachBar.js';
import SortPokemon from './SortPokemon.js'


export default class App extends Component {
  //setting the state to initalize on load
  state = {
    searchQuery: '',
    data: [],
    typeData: [], 
    typeQuery: '',
    page: 1,
    pageInfo: { }
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

  async componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('search');

    this.setState( {searchQuery: query});
    
    if (query){
      let page= 1;
      if (searchParams.get('page')){
        page = searchParams.get('page');
      }
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${query}&page=${page}`)
    const result = response.body.results;
    const info = response.body;
    
    this.setState({data: result, pageInfo: info});
    
 
    }
  }
  
  
  handleClick = async () => {
    // console.log('hello', this.state.searchQuery)
      const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&sort=${this.state.typeQuery}`)
      
      const result = response.body.results;
      const info = response.body;


      this.setState({data: result, pageInfo: info});
  }

  // typeClick = async () => { 

  //     const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=${this.state.typeQuery}`)
  //     const result = response.body.results.type;
  //     const info = response.body;


  //     this.setState({typeData: result, pageInfo: info});
  // }


  goToNextPage = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.page}&perPage=50`)
    
    const nextPageNumber = this.state.page + 1;
    this.setState({ page: nextPageNumber }) 
    
    const result = response.body.results;
    const info = response.body;
   
    this.setState({ data: result, pageInfo: info}); 

  }

  goToLastPage = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.page}&perPage=50`)
    
    const previousPageNumber = this.state.page - 1;
    this.setState({ page: previousPageNumber }) 
    
    const result = response.body.results;
    const info = response.body;
   
    this.setState({ data: result, pageInfo: info}); 

  }




  render() {
    console.log(this.state.data, '||');
    return (
      <div className="main">
      
      <SortPokemon  TYPECHANGE={this.handleType} TYPECLICK={this.handleClick} />
      <SearchBar  MYNEWHandleChange={this.handleChange}  MYNEWHandleClick={this.handleClick} />
      
      
      {this.state.pageInfo && <button onClick={this.goToNextPage}>Next</button>}
      {this.state.pageInfo && <button onClick={this.goToLastPage}>Previous</button>}
      
      

      {/* {
        this.state.typeData.map(pokemon => <CardItem whatever={pokemon} /> )
      } */}

      {
        this.state.data.map(pokemon => <CardItem whatever={pokemon} />)
      }

      </div>
    )
  }
}
