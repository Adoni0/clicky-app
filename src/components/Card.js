import React from 'react'
import ShuffleCards from './ShuffleCards'

export default function Card(props) {

    return (
        
            
              <div className="col mb-4">
              <div className="card">
                <img src={props.img} onClick={props.update} className="card-img-top" alt="..." />
              </div>
            </div>
          
    
    )
}
