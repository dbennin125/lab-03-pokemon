import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return (
            <div>
               {
                    this.props.pokemons.map(pokemon => {
                       return <h1>Name: {pokemon.pokemon}, Types: {pokemon.type_1} {pokemon.type_2}</h1>
                   })
               }
            </div>
        )
    }
}
