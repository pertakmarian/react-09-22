import {useEffect, useState} from "react";
import {userService} from "../../services";
import {UserForm} from "../userFrom/UserForm";
import {User} from "../user/User";

function Users() {
  const[users,setUsers] = useState([])
   useEffect( () =>{
       userService.getAll().then(({data})=> setUsers(data))
   },[])

    return (
        <div>
          <div><UserForm setUsers={setUsers}/></div>
          <div>
              {
                  users.map(user => <User key={user.id}user={user}/>)
              }
          </div>
        </div>
    );
}

export  {Users};