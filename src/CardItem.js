import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class CardItem extends Component {
    render() {
        return (
            
            <li>
                <Link to={`/pokemon/${this.props.whatever.pokemon}`}>
                <h2>{this.props.whatever.pokemon} </h2>
                <img src={this.props.whatever.url_image} alt="nope"/>
                </Link>
                <p>{this.props.whatever.type_1}, {this.props.whatever.type_2}</p>
            </li> 
    

        )
    }
}
