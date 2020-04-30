import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return <li className="list">

            <div className ="renderItem">
               {
                   this.props.pokemons.map(pokemon => {
                        return <h3>name: {pokemon.pokemon} type: {pokemon.type_1} {pokemon.type_2} <img src={pokemon.url_image} alt="whatever" /></h3>
                       
                    })

                // }
                //            {
                //    this.props.pokemons.map(pokemon => {
                //         return <img src={pokemon.url_image} alt="whatever" />
                      
                //     })
                }
            </div>

            

        
        </li>
    }
}
