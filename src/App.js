import {useEffect, useState} from "react";
import {getUsers, getUser} from "./services/user.service";
import Users from "./component/Users";

function App() {
    let [users, setUsers] = useState([])
    let [chosenUser, setChosenUser] = useState(null)

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])

    const chooseUser = (id) => {
        getUser(id).then(value => setChosenUser(value.data))
    }
    return (
        <div>

            <div>{chosenUser?.name} {chosenUser?.username}
                {chosenUser?.email}
            </div>
            <hr/>
            {users.map(value =>
                <Users
                    key={value.id}
                    item={value}
                    chooseUser={chooseUser}
                />)}
        </div>
    )


}

export default App;