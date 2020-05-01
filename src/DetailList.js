import React, { Component } from 'react'

export default class DetailList extends Component {
    render() {
        return (
            
            <li>
                <h2>{this.props.whatever.pokemon} </h2>
                <img src={this.props.whatever.url_image} alt="nope"/>
                <p>{this.props.whatever.type_1}, {this.props.whatever.type_2}</p>
            </li> 
    

        )
    }
}
