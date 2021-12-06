// rcc
import React, { Component } from 'react'
import Pokecard from './Pokecard'

export default class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: "Charmader", type: 'fire', base_experience: 23 },
            { id: 7, name: "Squirtle", type: 'water', base_experience: 223 },
            { id: 11, name: "Netapod", type: 'bug', base_experience: 223 },
            { id: 12, name: "Butterfree", type: 'flying', base_experience: 24 },
            { id: 25, name: "Pikachu", type: 'electric', base_experience: 22 },
            { id: 39, name: "Jigglypuff", type: 'normal', base_experience: 221 },
            { id: 94, name: "Gengar", type: 'poison', base_experience: 225 },
            { id: 133, name: "Envee", type: 'normal', base_experience: 233 },

        ]
    }

    render() {


        return (
            <div>
                <h1>Pokedex</h1>
                {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        )
    }
}

