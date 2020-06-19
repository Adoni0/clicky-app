import React from 'react'

export default function Card(props) {

    return (
        
            
              <div className="col mb-4">
              <div className="card">
                <img src={props.img} onClick={() => props.randomizeImages(props.id)} className="card-img-top" alt="..." />
              </div>
            </div>
          
    
    )
}
