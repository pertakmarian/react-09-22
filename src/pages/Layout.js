import {Outlet,Link} from  'react-router-dom'
function Layout() {
    return (
        <div>
           <ul>
               <li><Link to={'users'}>users page</Link></li>
               <li><Link to={'posts'}>post page</Link></li>

           </ul>



            layout
            <Outlet/>
        </div>
    );
}

export  {Layout};