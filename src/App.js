import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">

      <nav class="navbar">
        <a href="#books">Books</a>
        <a href="#quizzes">Quizzes</a>
        <a href="#snippets">Snippets</a>
        <a href="#tools">Tools</a>
        <a href="#stringfunctions">String Functions</a>
      </nav>

      <div className="jumbotron .jumbotron-fluid .container-fluid ">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
  );
}

export default App;
