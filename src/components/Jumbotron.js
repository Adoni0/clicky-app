import React from 'react'

export default function Jumbotron() {

    const divStyle = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg ')",
        color: 'white'
      };

    return (
        <div>
            <div style={divStyle} className="jumbotron .jumbotron-fluid .container-fluid ">
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead"><i>Family Guy Edition</i></p>
        <hr className="my-4"></hr>
        <p>Click on an image to earn points, but don't click on the same image twice!</p>
      </div>
        </div>
    )
}
