import React, { useState} from 'react';
import Character from "./Character";
;

function Characters() {
  const [characters,setCharacters]=useState([])

   fetch('https://rickandmortyapi.com/api/character')
       .then(value => value.json())
       .then(value => {
           setCharacters(value.results)
       })
    return (
        <div>
            {
                characters.map(character => <Character key={character.id}
                character={character}/>)
            }
        </div>
    );
}

export default Characters;
