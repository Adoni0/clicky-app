import React from 'react'

export default function Card(props) {

    return (
        
            
              <div className="card-deck">
              <div className="card">
                <img src={props.img} onClick={() => props.handleScoring(props.id)} className="card-img-top" alt="..." />
              </div>
            </div>
          
    
    )
}
