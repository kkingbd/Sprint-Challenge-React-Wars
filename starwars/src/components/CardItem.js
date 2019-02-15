import React from 'react';
import './CardItem.css';

function CardItem(props){
    return(
        <div className = 'characters'>
          {props.starwarsChars.map(item=>{
              return(
                <div className = 'card' key={item.name} item= {JSON.stringify(item)}>
                    <h1> {item.name} </h1>
                    <ul className= 'list'>
                        <li> Height : {item.height} </li>
                        <li> Mass : {item.mass} </li>
                        <li> Hair Color : {item.hair_color} </li>
                        <li> Eye Color : {item.eye_color} </li>
                        <li> Birth Year : {item.birth_year} </li>
                        <li> Gender : {item.gender} </li>
                    </ul>
                </div>
               );
           })}
        </div>
    );
}
export default CardItem;