import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
            <section className="options">
            <select onChange={this.props.MYNEWHandleChange}>
              <option value=""></option>
              <option value="pokemon">Sort by Name</option>
              <option value="type">Type of Pokemon</option>
              {/* <option value="type">Hidden Ability of Pokemon</option> */}
            </select>
            <p>Pokemon Name:</p>
          <input onChange={this.props.MYNEWHandleChange} />
          <button onClick={this.props.MYNEWHandleClick}>Search Name!</button>
        </section>
            </div>
        )
    }
}
