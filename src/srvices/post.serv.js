import {axiosServ} from "./axios.serv";
import {urls} from "../config/urls";

export const postServ ={
    getAll:()=>axiosServ.get(urls.posts).then(value => value.data),
    getPostByID:(id)=>axiosServ.get(`${urls.posts}/${id}`).then(value => value.data),
    getCommByPost:(id)=>axiosServ.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}