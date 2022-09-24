import {axiosServices} from "./axios.services";
import {urls} from "../config";

const userServices ={
    getAll:()=> axiosServices.get(urls.users)
}
export {
    userServices
}