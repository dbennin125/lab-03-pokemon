import React, { Component } from 'react'
import request from 'superagent'
// import PokeList from './PokeList.js'


export default class DetailsPage extends Component {
    state = { 
        pokemon: {}
    }
    async componentDidMount () {
        //waiting for request aka loading screen
        const data = await request.get (`https:alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.name}`);
        console.log(data.body);
        this.setState({ pokemon: data.body.results[0] })
    }
    
    render() {
       
        // console.log('|| this.props', this.props.match.params.name)
        return (
            <div>
   

            <h3>
            name: {this.state.pokemon.pokemon}
            </h3>
            <p>
            type: {this.state.pokemon.type_1}, {this.state.pokemon.type_2}</p> 
           <p> Hidden Ability: {this.state.pokemon.ability_hidden}
            </p>
            <img src={this.state.pokemon.url_image} alt="whatever" />
 
        </div>
        )
    }
}
