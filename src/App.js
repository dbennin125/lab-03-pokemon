import React, { Component } from 'react'
import Header from './Header.js'
import request from 'superagent';

const data = [{
  "_id": "5cef3501ef6005a77cd4fdd0",
  "pokemon": "pichu",
  "id": 187,
  "species_id": 172,
  "height": 3,
  "weight": 20,
  "base_experience": 41,
  "type_1": "electric",
  "type_2": "NA",
  "attack": 40,
  "defense": 15,
  "hp": 20,
  "special_attack": 35,
  "special_defense": 35,
  "speed": 60,
  "ability_1": "static",
  "ability_2": "NA",
  "ability_hidden": "lightning-rod",
  "color_1": "#F8D030",
  "color_2": "NA",
  "color_f": "NA",
  "egg_group_1": "no-eggs",
  "egg_group_2": "NA",
  "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png",
  "generation_id": 2,
  "evolves_from_species_id": "NA",
  "evolution_chain_id": 10,
  "shape_id": 8,
  "shape": "quadruped",
  "pokebase": "pichu",
  "pokedex": "http://www.pokemon.com/us/pokedex/pichu"
},
{
  _id: "5cef3501ef6005a77cd4fd17",
  pokemon: "bulbasaur",
  id: 1,
  species_id: 1,
  height: 7,
  weight: 69,
  base_experience: 64,
  type_1: "grass",
  type_2: "poison",
  attack: 49,
  defense: 49,
  hp: 45,
  special_attack: 65,
  special_defense: 65,
  speed: 45,
  ability_1: "overgrow",
  ability_2: "NA",
  ability_hidden: "chlorophyll",
  color_1: "#78C850",
  color_2: "#A040A0",
  color_f: "#81A763",
  egg_group_1: "monster",
  egg_group_2: "plant",
  url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  generation_id: 1,
  evolves_from_species_id: "NA",
  evolution_chain_id: 1,
  shape_id: 8,
  shape: "quadruped",
  pokebase: "bulbasaur",
  pokedex: "http://www.pokemon.com/us/pokedex/bulbasaur"
  },
  {
  _id: "5cef3501ef6005a77cd4fd18",
  pokemon: "venusaur-mega",
  id: 4,
  species_id: 3,
  height: 24,
  weight: 1555,
  base_experience: 281,
  type_1: "grass",
  type_2: "poison",
  attack: 100,
  defense: 123,
  hp: 80,
  special_attack: 122,
  special_defense: 120,
  speed: 80,
  ability_1: "thick-fat",
  ability_2: "NA",
  ability_hidden: "NA",
  color_1: "#78C850",
  color_2: "#A040A0",
  color_f: "#81A763",
  egg_group_1: "monster",
  egg_group_2: "plant",
  url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png",
  generation_id: "NA",
  evolves_from_species_id: "NA",
  evolution_chain_id: "NA",
  shape_id: "NA",
  shape: "NA",
  pokebase: "venusaur",
  pokedex: "http://www.pokemon.com/us/pokedex/venusaur"
  },]


export default class App extends Component {
  //setting the state to null
  state = {
    searchQuery: '',
    data: data,
  }
  
  handleChange = (event) => {
    //get value of the input;
    const value = event.target.value;
    this.setState({ searchQuery: value });
  }
  
  handleClick = async () => {
    // console.log('hello', this.state.searchQuery)
    // const fetchedData = await request.get();//grab pikachu
     const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=water`)
      console.log(fetchedData.body);
      this.setState({data: fetchedData.body.results});
  }

  render() {
  
    return (
      <div>
        <Header />
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
        {
          this.state.data.map(whatever => {
            return <h1>{whatever.pokemon}</h1>
          })
        }
      </div>
    )
  }
}
