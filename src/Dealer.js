import React, { Component } from 'react';
import './css/App.css'

class Dealer extends Component {
    render() { 
        const cards = this.props.table.dealerCardsInPlay.map((cardIndex,i) => 
            i === 0 
            ? (<img style={{left: (100+30*i)+'px'}} className='cardimg' src={'/cards/back.png'} alt={'back'} key={cardIndex}/>)
            : (<img style={{left: (100+30*i)+'px'}} className='cardimg' src={'/cards/'+this.props.table.deck[cardIndex].card+'.png'} alt={this.props.table.deck[cardIndex].cardIndex} key={cardIndex}/>)
        )
        let scores = '';
        if(this.props.table.winner){
            if(this.props.table.dealerScore[0]>21){
                scores += 'Bust: ';
            }
            else{
                scores += 'Score: ';
            }
            scores += this.props.table.dealerScore[0];
            if(this.props.table.dealerScore.length > 0){
                for(let i=1; i<this.props.table.dealerScore.length; i++){
                    if(this.props.table.dealerScore.indexOf(this.props.table.dealerScore[i]) === i && this.props.table.dealerScore[i] <= 21)
                        scores += ' / '+this.props.table.dealerScore[i]
                }
            }
        }
        else{
            scores += 'Score: ???';
        }

        return (
            <div id='dealer'>
                <p>DEALER</p>
                <p>{scores}</p>
                {/*<p> </p>*/}
                {cards}
            </div>
        )
    }
}

export default Dealer;