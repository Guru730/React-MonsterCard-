import React from 'react'
import './card.css'

const card = (props) => {

    return (
            <div className="Card-Container">
            <img  className="card-image" src={`https://robohash.org/${props.monsters.id}`}  />
            <h2>{props.monsters.name}</h2>
            <p>{props.monsters.email}</p>
            </div>
    )
}


export default card