import React, { Component } from 'react';

import request from 'superagent';
import CardItem from './CardItem.js';
import "./App.css";
import SearchBar from './SeachBar.js';




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
    //grabs params in HTML
    const searchParams = new URLSearchParams(window.location.search);
    //uses 'search' but can be anything
    const pokeQuery = searchParams.get('search');
    //set the state with URL value
    this.setState( {searchQuery: pokeQuery});
    //will trigger a rerender
    
    if (pokeQuery){
      let page= 1;
      if (searchParams.get('page')){
        page = searchParams.get('page');
      }
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokeQuery}&page=${page}`)
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

  //     const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?type=${this.state.typeQuery}`)
  //     const result = response.body.results.type;
  //     const info = response.body;


  //     this.setState({typeData: result, pageInfo: info});
  // }


  goToNextPage = async () => {
    const nextPageNumber = this.state.page + 1;
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&page=${nextPageNumber}&perPage=50`)
    
    this.setState({ page: nextPageNumber }) 
    
   
    const result = response.body.results;
    const info = response.body;
    
    if ( this.state.page === (Math.ceil(info.count/info.perPage))) {
      this.setState({hideNext: true})
    } else {
      this.setState({hideNext: false})
    }
    // console.log, '||')
   
    this.setState({ data: result, pageInfo: info}); 

  }

  goToLastPage = async () => {
    const previousPageNumber = this.state.page - 1;
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&page=${previousPageNumber}&perPage=50`)
    
    this.setState({ page: previousPageNumber }) 
    
    const result = response.body.results;
    const info = response.body;
  //  console.log(info, '||')
   if (this.state.page >= 1) {
     this.setState({hidePrev: true})
    } else {
      this.setState({hidePrev: false})
    }
    
    this.setState({ data: result, pageInfo: info}); 

  }




  render() {
    // console.log(this.state, '||');
    return (
      <div className="main">
      
      {/* <SortPokemon TYPE={this.handleChange} TYPECHANGE={this.handleClick}/> */}
      <SearchBar TYPEHANDLE={this.handleType} MYNEWHandleChange={this.handleChange}  MYNEWHandleClick={this.handleClick} />
      
      
      {!this.state.hideNext && <button onClick={this.goToNextPage}>Next</button>}
      {!this.state.hidePrev && <button onClick={this.goToLastPage}>Previous</button>}
      
      

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
