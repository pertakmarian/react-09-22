import {useEffect, useState} from "react";
import {UserComponent} from "../component/UserComponent";
import {Outlet} from "react-router-dom";

function Users() {
    let [users,setUsers]=useState([])
    useEffect( () => {
           fetch('http://jsonplaceholder.typicode.com/users')
                  .then(value => value.json())
                  .then(value => {setUsers(value)})
    },[])
    return (
        <div>
            <Outlet/>
            {users.map(value => <UserComponent key={value.id} item={value}/>)}
        </div>
    );
}

export  {Users};