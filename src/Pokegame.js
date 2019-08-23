import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component{
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }

    render(){
        let shuffleArr = [...this.props.pokemon]

        for (let i = shuffleArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleArr[i], shuffleArr[j]] = [shuffleArr[j], shuffleArr[i]];
        }

        let side1 = []
        let side2 = []

        for(let i = 0; i <= shuffleArr.length/2 - 1; i++){
            side1.push(shuffleArr[i])
        }

        for(let i = shuffleArr.length/2; i < shuffleArr.length; i++){
            side2.push(shuffleArr[i])
        }

        let exp1 = side1.reduce((total, exp) => total + exp.base_experience, 0)
        let exp2 = side2.reduce((total, exp) => total + exp.base_experience, 0)
        let win1 = ''
        let win2 = ''

        if(exp1 > exp2){
            win1 = 'Winning Hand'
            win2 = 'Losing Hand'
        }else{
            win1 = 'Losing Hand'
            win2 = 'Winning Hand'
        }

        return(
            <div className='Pokegame'>
                <Pokedex pokemon={side1} exp={exp1} winner={win1} />
                <Pokedex pokemon={side2} exp={exp2} winner={win2} />
            </div>
        )
    }
}

export default Pokegame