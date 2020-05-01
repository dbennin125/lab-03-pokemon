import React, { Component } from 'react'
import './App.css';
import { Link } from 'react-router-dom';

export default class PokeList extends Component {
    render() {
        return <li className="list">

            <div className ="renderItem">
               {
                   this.props.pokemons.map(pokemon => {
                        return <div>
                            <Link to={`/pokemon/${pokemon.pokemon}`}>

                            <h3>
                            name: {pokemon.pokemon}
                            </h3>
                            <p>
                            type: {pokemon.type_1}, {pokemon.type_2}</p> 
                           <p> Hidden Ability: {pokemon.ability_hidden}
                            </p>
                            <img src={pokemon.url_image} alt="whatever" />
                            </Link>
                        </div>

                       
                    })

                }
            </div>

        </li>
    }
}
