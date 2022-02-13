import {axiosServ} from "./axios.serv";
import {urls} from "../config/urls";

export const userServ ={
    getAll:()=>axiosServ.get(urls.users).then(value => value.data),
    getUserId:(id)=>axiosServ.get(`${urls.users}/${id}`).then(value => value.data),
    getPostById:(userId) =>axiosServ.get(`${urls.users}/${userId}/posts`).then(value => value.data),
    getAlbById:(userId) =>axiosServ.get(`${urls.users}/${userId}/albums`).then(value => value.data),
    getPhoto:(id)=>axiosServ.get(`${urls.albums}/${id}/photos`).then(value => value.data)

}