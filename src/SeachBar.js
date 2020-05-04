import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
            <section className="options">
            <select onChange={this.props.TYPECHANGE}>
              <option value=""></option>
              <option value="type">Type of Type</option>
              <option value="pokemon">Sort by Name</option>
              {/* <option value="type">Hidden Ability of Pokemon</option> */}
            </select>
            <p>Search Here:</p>
          <input onChange={this.props.MYNEWHandleChange} />
          <button onClick={this.props.MYNEWHandleClick}>Search by Name!</button>


        </section>
            </div>
        )
    }
}
