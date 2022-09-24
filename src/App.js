import {Posts, Users} from "./components";
import {postServices} from "./services";
import {useState} from "react";

function App() {
const [posts,setPosts]= useState([])
    const getUserId =(userId)=>{
     postServices.getPosts(userId).then(({data}) => setPosts(data))
 }
     return (
        <div>
          <Users getUserId={getUserId}/>
          <Posts posts={posts}/>
        </div>
    );
}

export default App;