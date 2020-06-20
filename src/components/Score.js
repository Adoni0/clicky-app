import React from 'react'

export default function Score(props) {

    // var score = 0;
    // var topScore = 0;
    // var guessedCorrect = "You Guessed Correctly!";
    // var guessedIncorrect ="You Guessed Incorrectly!";

    return (
        <div>
            <nav className="navbar">
                <a href='#'>Clicky Game</a>
                <a href='#'>{props.guess}</a>
                <a href='#'>Score: <span>{props.value}</span> | Top Score: <span>{props.top}</span></a>
            </nav>
        </div>
    )
}


