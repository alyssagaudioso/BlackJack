import React, { Component } from 'react';
import './css/App.css'

class User extends Component {
    render() { 
        const cards = this.props.table.cardsInPlay.map((cardIndex,i) => (
            <img style={{left: (100+30*i)+'px'}} className='cardimg' src={'/cards/'+this.props.table.deck[cardIndex].card+'.png'} alt={this.props.table.deck[cardIndex].cardIndex} key={cardIndex}/>
        ))
        let scores = '';
        if(this.props.table.userScore[0]>21){
            scores += 'Bust: ';
        }
        else{
            scores += 'Score: ';
        }
        scores += this.props.table.userScore[0];
        if(this.props.table.userScore.length > 0){
            for(let i=1; i<this.props.table.userScore.length; i++){
                if(this.props.table.userScore.indexOf(this.props.table.userScore[i]) === i && this.props.table.userScore[i] <= 21)
                    scores += ' / '+this.props.table.userScore[i]
            }
        }

        return (
            <div id='user'>
                <p>USER</p>
                <p>{scores}</p>
                {cards}
            </div>
        )
    }
}

export default User;