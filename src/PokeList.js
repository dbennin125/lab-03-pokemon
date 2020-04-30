import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return <li className="list">

            <div className ="renderItem">
               {
                   this.props.pokemons.map(pokemon => {
                        return <div>
                            <h3>
                            name: {pokemon.pokemon}
                            </h3>
                            <p>
                            type: {pokemon.type_1} {pokemon.type_2} 
                            <img src={pokemon.url_image} alt="whatever" />
                            </p>
                        </div>

                       
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
