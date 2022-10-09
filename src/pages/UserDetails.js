import {useLocation} from "react-router-dom";

function UserDetails() {
  let {state}= useLocation()
    return (
        <div>
            {
                JSON.stringify(state)
            }
        </div>
    );
}

export  {UserDetails};