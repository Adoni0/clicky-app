import React, { Component } from 'react'
import characters from '../characters.json'
import Score from './Score'
import Card from './Card'
import Jumbotron from './Jumbotron'

export default class Home extends Component {

    state = {
        characters,
        score: 0,
        topScore: 0,
        guessedCorrect: "Correctly!",
        guessedIncorrect: "Incorrectly!"
    }

    incrementScore = () => {
        var newScore = this.state.score + 1;
        this.setState({ score: newScore })

        var highScore = this.state.topScore;
        if(newScore >= highScore) {
            this.setState({ topScore: newScore })
        }       
    }

    showGuessResult = () => {
        var correctGuess = this.state.guessedCorrect;
        var wrongGuess = this.state.guessedIncorrect;
        // var arr = [];
        //if image is clicked push id# to array
        //if image clicked id# is already in array then reset score and shuffle cards
        //if image clicked id# is not in array then call increment score function
    }

    render() {
        return (
            <div>
                <Score value={this.state.score}
                    top={this.state.topScore} 
                    guess={this.showGuessResult}/>
                <Jumbotron />

                <div className="row row-cols-1 row-cols-md-3">
                    {this.state.characters.map(char => {
                        return <Card
                            img={char.src}
                            update={this.incrementScore}
                        />
                    })}
                </div>
            </div>


        )
    }
}
