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
        var newArr = this.state.characterId.splice(0, this.state.characterId.length);
        this.setState({ score: 0 }, { guessed: 'Incorrectly!' }, { characterId: newArr })
        //shuffle card images
        //guessedIncorrect

    }

    // var arr = [];
    //if image is clicked push id# to array
    //if image clicked id# is already in array then display wrongGuess and reset score/shuffle cards
    //if image clicked id# is not in array then call increment score function


    //shuffle array
    // function shuffle(array) {
    //     var currentIndex = array.length, temporaryValue, randomIndex;

    //     // While there remain elements to shuffle...
    //     while (0 !== currentIndex) {

    //       // Pick a remaining element...
    //       randomIndex = Math.floor(Math.random() * currentIndex);
    //       currentIndex -= 1;

    //       // And swap it with the current element.
    //       temporaryValue = array[currentIndex];
    //       array[currentIndex] = array[randomIndex];
    //       array[randomIndex] = temporaryValue;
    //     }

    //     return array;
    //   }

    // Used like so
    //   var arr = [2, 11, 37, 42];
    //   shuffle(arr);
    //   console.log(arr);

    randomizeImages = id => {
        // alert(this.state.characterId.length);
        for (var i = -1; i < this.state.characterId.length; i++) {
            // alert('enter for loop')
            if (this.state.characterId[i] === id) {//guesses wrong
                // alert('game about to be reset')
                this.resetGame();
            } else if (this.state.characterId[i] !== id) {//guesses right
                // alert('score increased')
                this.state.characterId.push(id);
                this.incrementScore();
                this.setState({ guessed: 'Correctly!' })
            } else {
                alert('nothing was true')
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
                            randomizeImages={this.randomizeImages}
                        />
                    })}
                </div>
            </div>


        )
    }
}
