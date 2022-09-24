import {useEffect, useState} from "react";
import {userServices} from "../../services";

import {User} from "../user/User";

function Users({getUserId}) {
 let [users,setUsers]=useState([])
    useEffect(()=>{
        userServices.getAll().then(({data})=> setUsers(data))
    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
        </div>
    );
}

export  {Users};