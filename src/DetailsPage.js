import React, { Component } from 'react'
import request from 'superagent'

export default class DetailsPage extends Component {
    
    async componentDidMount () {
        //waiting for request
        const data = await request.get (`https:alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.name}`);
        console.log(data.body);
        this.setState({ pokemon: data.body })
    }
    
    render() {
        console.log('|| this.props', this.props.match.params.name)
        return (
            <div>
              Welcome to the DetailsPage  
            </div>
        )
    }
}
