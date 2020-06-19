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

        // characterId: []
    }

    characterId = [13];

    incrementScore = () => {
        var newScore = this.state.score + 1;
        this.setState({ score: newScore });
        this.setState({ guessed: 'Correctly' });

        var highScore = this.state.topScore;
        if (newScore >= highScore) {
            this.setState({ topScore: newScore })
        }
    }

    resetGame = () => {
        this.characterId = [13];
        this.setState({ guessed: 'Incorrectly!' });
        // this.setState({ characterId: newArr });
        this.setState({ score: 0 });
        //{ guessed: 'Incorrectly!' }
        //shuffle card images

    }


    handleShuffle = characterId => {
        //shuffle array
    
        var currentIndex = characterId.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = characterId[currentIndex];
          characterId[currentIndex] = characterId[randomIndex];
          characterId[randomIndex] = temporaryValue;
        }

        console.log(characterId);
      
    }
    


    handleScoring = id => {

        // this.state.characterId.push(id);
        // this.characterId.push(id);
        // console.log(this.characterId);
        
        
        //  this.setState({ score: this.state.score + 1 });
        // this.incrementScore();
        for (var i = 0; i < this.characterId.length; i++) {

            if (this.characterId[i] === id) {//guesses wrong
                alert('if statement');
                // this.setState({ guessed: 'Incorrectly!' });
                this.resetGame();
            } else if (this.characterId[i] !== id) {//guesses right
                alert('else if statement');
                this.characterId.push(id);
                this.incrementScore();
                // this.setState({ guessed: 'Correctly!' })
            } else {
                alert('nothing was true')
            }
        }
        console.log(this.characterId);
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
                            handleScoring={this.handleScoring}
                        />
                    })}
                </div>
            </div>


        )
    }
}
