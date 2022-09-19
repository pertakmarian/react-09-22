import axios from  'axios'

let axiosInstance= axios.create({
    baseURL :'http://jsonplaceholder.typicode.com',
    headers:{}
})
const  getUsers= () =>{return  axiosInstance.get('/users')}
const getUser =(id) =>{
    return axiosInstance.get('/users/'+id)
}
export  {
    getUsers,
    getUser
}

