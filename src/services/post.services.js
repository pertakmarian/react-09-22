import {axiosServices} from "./axios.services";
import {urls} from "../config";

const  postServices={
    getPosts:(userId) => axiosServices.get(`${urls.posts}/?userId=${userId}`)
}
export {
    postServices
}