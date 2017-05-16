import React, { Component } from 'react';
// import { AppRegistry, View, Image } from 'react-native';
import User from './User';
import Dealer from './Dealer'
// import Img from 'react-image'
import './css/Table.css';

function getInitialState () {
  return { 
      deck: [
        {card: '2_of_clubs', value: 2, played: false},
        {card: '2_of_diamonds', value: 2, played: false},
        {card: '2_of_hearts', value: 2, played: false},
        {card: '2_of_spades', value: 2, played: false},

        {card: '3_of_clubs', value: 3, played: false},  
        {card: '3_of_diamonds', value: 3, played: false},
        {card: '3_of_spades', value: 3, played: false},
        {card: '3_of_hearts', value: 3, played: false},

        {card: '4_of_clubs', value: 4, played: false},
        {card: '4_of_diamonds', value: 4, played: false},
        {card: '4_of_spades', value: 4, played: false},
        {card: '4_of_hearts', value: 4, played: false},

        {card: '5_of_clubs', value: 5, played: false},
        {card: '5_of_diamonds', value: 5, played: false},
        {card: '5_of_spades', value: 5, played: false},
        {card: '5_of_hearts', value: 5, played: false},

        {card: '6_of_clubs', value: 6, played: false},
        {card: '6_of_diamonds', value: 6, played: false},
        {card: '6_of_spades', value: 6, played: false},
        {card: '6_of_hearts', value: 6, played: false},

        {card: '7_of_clubs', value: 7, played: false},
        {card: '7_of_diamonds', value: 7, played: false},
        {card: '7_of_spades', value: 7, played: false},
        {card: '7_of_hearts', value: 7, played: false},

        {card: '8_of_clubs', value: 8, played: false},
        {card: '8_of_diamonds', value: 8, played: false},
        {card: '8_of_spades', value: 8, played: false},
        {card: '8_of_hearts', value: 8, played: false},

        {card: '9_of_clubs', value: 9, played: false},
        {card: '9_of_diamonds', value: 9, played: false},
        {card: '9_of_spades', value: 9, played: false},
        {card: '9_of_hearts', value: 9, played: false},

        {card: '10_of_clubs', value: 10, played: false},
        {card: '10_of_diamonds', value: 10, played: false},
        {card: '10_of_spades', value: 10, played: false},
        {card: '10_of_hearts', value: 10, played: false},

        {card: 'jack_of_clubs', value: 10, played: false},
        {card: 'jack_of_diamonds', value: 10, played: false},
        {card: 'jack_of_spades', value: 10, played: false},
        {card: 'jack_of_hearts', value: 10, played: false},

        {card: 'queen_of_clubs', value: 10, played: false},
        {card: 'queen_of_diamonds', value: 10, played: false},
        {card: 'queen_of_spades', value: 10, played: false},
        {card: 'queen_of_hearts', value: 10, played: false},

        {card: 'king_of_clubs', value: 10, played: false},
        {card: 'king_of_diamonds', value: 10, played: false},
        {card: 'king_of_spades', value: 10, played: false},
        {card: 'king_of_hearts', value: 10, played: false},

        {card: 'ace_of_clubs', value: 1 || 11, played: false},
        {card: 'ace_of_diamonds', value: 1 || 11, played: false},
        {card: 'ace_of_spades', value: 1 || 11, played: false},
        {card: 'ace_of_hearts', value: 1 || 11, played: false},
    ]};
}

class Table extends Component {
    constructor(){
        super();
        this.state = getInitialState();
    }
    flipCard(){
        let ran;
        do{
        ran = Math.floor((Math.random() * 52) + 1);
        } while(!this.state[ran].played)
        return ran;
    }
    render() {
        const cards = this.state.deck.map( (curr, i) => {
            return <img key={i} src={'../cards/'+curr.card+'.png'} alt={curr.card} />
        });
        return (
            <div id='table'>
                <p>this is the mother fucking table component</p>
                <User />
                <Dealer />
                <div>
                    <img src={'/2_of_clubs.png'} alt='TEST' />
                    {/*<Image source={'2_of_clubs.png'}/>*/}
                    {cards}
                </div>
            </div>
        )
    }
}

export default Table;