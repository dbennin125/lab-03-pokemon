import React, { Component } from 'react'

export default class SortPokemon extends Component {
    render() {
        return (
            <div>

            <select onChange={this.props.TYPECHANGE}>
              <option value=""></option>
              <option value="type">Type of Type</option>
              <option value="pokemon">Pokemon</option>
              {/* <option value="type">Hidden Ability of Pokemon</option> */}
              <button onClick={this.props.TYPECLICK} />
            </select>
            </div>
        )
    }
}
