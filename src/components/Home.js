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
        // guessedCorrect: "Correctly!",
        // guessedIncorrect: "Incorrectly!",
        guessed: '',

        characterId: []
    }

    incrementScore = () => {
        var newScore = this.state.score + 1;
        this.setState({ score: newScore })

        var highScore = this.state.topScore;
        if (newScore >= highScore) {
            this.setState({ topScore: newScore })
        }
    }

    resetGame = () => {
        this.characterId.length = 0;
        this.setState({ score: 0 }, { guessed: 'Incorrectly!' })
        //shuffle card images
        //guessedIncorrect

    }

        // var arr = [];
        //if image is clicked push id# to array
        //if image clicked id# is already in array then display wrongGuess and reset score/shuffle cards
        //if image clicked id# is not in array then call increment score function
    

    randomizeImages = () => {

        for (var i = 0; i < this.state.characterId.length; i++) {
            if (this.state.characterId[i] === Card.id) {//guesses wrong
                this.resetGame();
            } else if (this.state.characterId[i] !== Card.id) {//guesses right
                this.state.characterId.push(Card.id);
                this.incrementScore();
                this.setState({ guessed: 'Correctly!' })
            }
        }
    }

    render() {
        return (
            <div>
                <Score value={this.state.score}
                    top={this.state.topScore}
                    guess={this.state.guessed} />
                <Jumbotron />

                <div className="row row-cols-1 row-cols-md-3 card-columns">
                    {this.state.characters.map(char => {
                        return <Card
                            img={char.src}
                            key={char.id}
                            id={char.id}
                            shuffle={this.randomizeImages}
                        />
                    })}
                </div>
            </div>


        )
    }
}
