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
    // hiddenAbilityQuery: '',
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
    this.setState( {searchQuery: searchParams.get('search')});

    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`)
    const result = response.body.results;
    const info = response.body;

    // console.log(response.body);
    this.setState({data: result, pageInfo: info});
 
  }
  // &sort=${this.state.typeQuery}
  
  handleClick = async () => {
    // console.log('hello', this.state.searchQuery)
      const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&sort=${this.state.typeQuery}`)
      const result = response.body.results;
      const info = response.body;

      // console.log(response.body);
      this.setState({data: result, pageInfo: info});
  }

// typeClick = async () => {

//       const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?types=${this.state.typeQuery}`)
//       const result = response.body.types;
//       const info = response.body;
//       console.log(result, '||')

//       this.setState({typeData: result, pageInfo: info});
// }


  goToNextPage = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.page}&perPage=50`)
    
    const nextPageNumber = this.state.page + 1;
    this.setState({ page: nextPageNumber }) 
    
    const result = response.body.results;
    const info = response.body;
    // console.log(info)
    this.setState({ data: result, pageInfo: info});

    

  }

  goToLastPage = async () => {
    const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.page}&perPage=50`)
    
    const previousPageNumber = this.state.page - 1;
    this.setState({ page: previousPageNumber }) 
    
    const result = response.body.results;
    const info = response.body;
    // console.log(info)
    this.setState({ data: result, pageInfo: info});

    

  }




  render() {
    // console.log(this.state.pageInfo.page, '||');
    return (
      <div className="main">
      
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
