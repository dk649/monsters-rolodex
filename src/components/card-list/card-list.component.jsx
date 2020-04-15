import React from 'react';
import {Card} from '../Card/card.component';
import './card-list.styles.css';


export const CardList = props => (

// card-list is adding the css // this is grtting returned you don't need the return word because there is only one line
<div className='card-list'> 
                            
              {props.monsters.map(monster => (
                  <Card key={monster.id} monster={monster}/>))}
            
</div>
// monster is passsed into the card component 
);
