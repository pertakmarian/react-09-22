

export  default function Users({item,chooseUser}) {

    return (
        <div>
            <h2>{item.id}- {item.name} </h2>
        <button onClick={() => {chooseUser(item.id);}}>Info</button>
        </div>
    );
}

