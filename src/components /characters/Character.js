

function Character(props) {
    const {character}=props
    return (
        <div>
            <h5>{character.id}-{character.name}-{character.status}</h5>
           <p>{character.species}- {character.gender}</p>


            <img src={character.image}/>

        </div>
    );
}

export default Character;