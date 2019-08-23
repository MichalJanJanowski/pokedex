import React, { Component } from 'react'
import './Pokecard.css'

const baseUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component{
    render(){
        return(
            <div className='Pokecard'>
                <h2>{this.props.name}</h2>
                <div className='Pokecard-img'>
                    <img src={`${baseUrl}${this.props.id.toString().padStart(3, 0)}.png`} alt={this.props.name} />
                </div>
                <p><span>Type:</span> {this.props.type}</p>
                <p><span>Exp:</span> {this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard