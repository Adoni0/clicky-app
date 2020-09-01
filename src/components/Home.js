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
        guessed: '',

        characterId: []
    }

    incrementScore = (id) => {
        var newScore = this.state.score + 1;

        this.setState({
            score: newScore,
            guessed: 'You Guessed Correctly!'
        });

        this.state.characterId.push(id)

        var highScore = this.state.topScore;
        if (newScore >= highScore) {
            this.setState({ topScore: newScore })
        }
    }

    resetGame = () => {
        this.setState({ characterId: [] });
        this.setState({ guessed: 'You Guessed Incorrectly!' });
        this.setState({ score: 0 });

    }




    handleScoring = id => {
        var currentIndex = characters.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = characters[currentIndex];
            characters[currentIndex] = characters[randomIndex];
            characters[randomIndex] = temporaryValue;
        }

        this.setState({ characters });
        
        this.state.characterId.includes(id) ? this.resetGame() : this.incrementScore(id);
    }

    render() {
        return (
            <div>
                <Score value={this.state.score}
                    top={this.state.topScore}
                    guess={this.state.guessed} />
                <Jumbotron />

                <div className="row row-cols-1 row-cols-md-4 card-columns">
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