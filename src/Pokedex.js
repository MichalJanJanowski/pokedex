import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component{
    render(){
        let win = ''
        if(this.props.winner === 'Winning Hand'){
            win = 'Pokedex-winner'
        }else{
            win = 'Pokedex-loser'
        }
        return(
            <div className='Pokedex'>
                <h1 className={win}>{this.props.winner}</h1>
                <h2>Total Exp: {this.props.exp}</h2>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((i) => (
                        <Pokecard id={i.id} name={i.name} type={i.type} exp={i.base_experience} key={i.id}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex