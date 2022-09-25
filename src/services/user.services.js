import {axiosServices} from "./axios.services";
import {urls} from "../config";

const userService={
    getAll:()=> axiosServices.get(urls.users),
    createUser:(user) =>axiosServices.post(urls.users,user)
}
export {
    userService
}