import React, { Component } from 'react';
import User from './User';
import Dealer from './Dealer'
import './css/App.css';

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
            {card: 'jack_of_clubs2', value: 10, played: false},
            {card: 'jack_of_diamonds2', value: 10, played: false},
            {card: 'jack_of_spades2', value: 10, played: false},
            {card: 'jack_of_hearts2', value: 10, played: false},
            {card: 'queen_of_clubs2', value: 10, played: false},
            {card: 'queen_of_diamonds2', value: 10, played: false},
            {card: 'queen_of_spades2', value: 10, played: false},
            {card: 'queen_of_hearts2', value: 10, played: false},
            {card: 'king_of_clubs2', value: 10, played: false},
            {card: 'king_of_diamonds2', value: 10, played: false},
            {card: 'king_of_spades2', value: 10, played: false},
            {card: 'king_of_hearts2', value: 10, played: false},
            {card: 'ace_of_clubs', value: [1,11], played: false},
            {card: 'ace_of_diamonds', value: [1,11], played: false},
            {card: 'ace_of_spades2', value: [1,11], played: false},
            {card: 'ace_of_hearts', value: [1,11], played: false},
        ],
        cardsInPlay: [],
        dealerCardsInPlay: [],
        userScore: [0],
        dealerScore: [0],
        userDone: false,
        dealerDone: false,
        dealt: false,
        winner: false
    };
}

class Table extends Component {
    constructor(){
        super();
        this.state = getInitialState();
        this.flipCard = this.flipCard.bind(this);
        this.deal = this.deal.bind(this);
        this.hit = this.hit.bind(this);
        this.stand = this.stand.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
    }
    flipCard(player){
        let ran;
        do{
            ran = Math.floor((Math.random() * 52));
        } while(this.state.deck[ran].played)
        const newState = Object.assign({}, this.state);
        newState.deck[ran].played = true;

        if(Array.isArray(this.state.deck[ran].value)){
            let length = this.state[player].length;
            for(let i=0; i<length; i++){
                newState[player].push(this.state[player][i]);
                newState[player][i] += this.state.deck[ran].value[0];
            }
            for(let i=length; i<this.state[player].length; i++){
                newState[player][i] += this.state.deck[ran].value[1];
            }
        }
        else{
            for(let i=0; i<this.state[player].length; i++){
                newState[player][i] += this.state.deck[ran].value;
            }
        }

        this.setState(newState);
        return ran;
    }
    deal(){
        this.setState(getInitialState(), () =>{
            const newState = Object.assign({}, this.state);
            newState.dealt = true;
            newState.cardsInPlay.push(this.flipCard('userScore'));
            newState.cardsInPlay.push(this.flipCard('userScore'));
            newState.dealerCardsInPlay.push(this.flipCard('dealerScore'));
            newState.dealerCardsInPlay.push(this.flipCard('dealerScore'));
            this.setState(newState);
        });
    }
    hit(){
        if(!this.state.dealt) return;
        if(!this.state.userDone){
            if(this.state.userScore[0] >= 21){
                console.log('before checkwinner callback.. userDone !!!');
                const newState = Object.assign({}, this.state);
                newState.userDone = true;
                this.setState(newState, this.checkWinner);
            }
            else{
                console.log('before checkwinner callback');                
                const newState = Object.assign({}, this.state);
                newState.cardsInPlay.push(this.flipCard('userScore'));
                this.setState(newState);
            }
            if(this.state.dealerScore[0] < 17){
                console.log('before checkwinner callback');                
                const newState = Object.assign({}, this.state);
                newState.dealerCardsInPlay.push(this.flipCard('dealerScore'));
                this.setState(newState);
            }
            else{
                console.log('before checkwinner callback.. dealerDone ..doesntmatter');                
                const newState = Object.assign({}, this.state);
                newState.dealerDone = true;
                this.setState(newState);
            }
        }
    }
    stand(){
        const newState = Object.assign({}, this.state);
        newState.userDone = true;
        this.setState(newState, ()=>{
            const newState = Object.assign({}, this.state);
            while(this.state.dealerScore[0] < 17){
                newState.dealerCardsInPlay.push(this.flipCard('dealerScore'));
            }
            newState.dealerDone = true;
            this.setState(newState, this.checkWinner);
        });
    }
    componentDidMount(){
        console.log('in componentDidMount');
    }
    checkWinner(){
        console.log('incheckwinner')
        console.log('state: ',this.state);
        // if(this.state.userDone){
            const newState = Object.assign({}, this.state);
            let usescr = this.state.userScore.reduce((final, curr)=>{
                return (curr <= 21 && curr > final) ? curr : final;
            }, 0);
            let dlrscr = this.state.dealerScore.reduce((final, curr)=>{
                return (curr <= 21 && curr > final) ? curr : final;
            }, 0);
            newState.winner = (usescr > dlrscr) ? 'You win' : 'Dealer wins';
            this.setState(newState);
        // }
        // this.setState(this.state);
    }
    render() {

        return (
            <div>
                <div id='table'>
                    <div id='winner'>{this.state.winner}</div>
                    <User table={this.state}/>
                    <Dealer table={this.state}/>
                </div>
                <div>
                    <button onClick={this.deal}>DEAL</button>
                    <button onClick={this.hit}>HIT</button>
                    <button onClick={this.stand}>STAND</button>
                </div>
            </div>
        )
    }
}

export default Table;