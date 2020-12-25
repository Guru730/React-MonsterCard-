import React from 'react'
import Card from './card/card'

import './Cardlist.css'


const cardlist = (props) => {
   
    return(
    <div className="card-List">
        {console.log('card-list')}
        {
            props.name.map(monsters => <Card className="single-card" email={monsters} id={monsters}  monsters={monsters}/>)
        }
    </div>
    );
}


export default cardlist;


