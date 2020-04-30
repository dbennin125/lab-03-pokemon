import React, { Component } from 'react';

export default class SeachSection extends Component {
    render() {
        return (
            <div>
            <section className="options">
            <select onChange={this.props.MYNEWHandleChange}>
              <option value=""></option>
              <option value="pokemon">Sort by Name</option>
              <option value="type">Type of Pokemon</option>
            </select>
            <p>Pokemon Name:</p>
          <input onChange={this.props.MYNEWHandleChange} />
          {/* {this.props.MYNEWState.typeQuery} */}
          <button onClick={this.props.MYNEWHandleClick}>Search Name!</button>
        </section>
            </div>
        )
    }
}
