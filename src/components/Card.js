import React from 'react'

export default function Card(props) {
    return (
        <div className="row row-cols-1 row-cols-md-3">
            
              <div className="col mb-4">
              <div className="card">
                <img src={props.img} className="card-img-top" alt="..." />
              </div>
            </div>
          
        </div>
    )
}
