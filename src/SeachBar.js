import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
            
            <section className="options">
              <p>Search Here:</p>
              <input onChange={this.props.MYNEWHandleChange} />
              <button onClick={this.props.MYNEWHandleClick}>Search by Name!</button>
            </section>
            
            </div>
        )
    }
}
