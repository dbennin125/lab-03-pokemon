import React, { Component } from 'react'
import request from 'superagent'
import './App.css';
import CardItem from './CardItem.js';


export default class DetailsPage extends Component {
    state = { 
        pokemon: {}
    }
    async componentDidMount () {
        //waiting for request aka loading screen
        const data = await request.get (`https:alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.name}`);
        // console.log(data.body);
        this.setState({ pokemon: data.body.results[0] })
        // ? if (this.setState ===  
    }

    render() {
       

        return (
            <div>
                <h2>
                <CardItem whatever={this.state.pokemon} />
                </h2>
           </div>
        )
    }
}
