import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {

  // var charArray = [$('#stewie1'), $('#herbert'), $('#carter'), $('#joe'), $('#cleaveland'), $('#quagmire'), $('#chris'), $('#meg'), $('#brian'), $('#peter'), $('#lois'), $('#stewie2')];
  // function shuffle(){
  //   var newArr = charArray.map(char => {
  //     Math.floor(Math.random() * char)
  //   })
  // }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
