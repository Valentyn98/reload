import {axiosServices} from "./axios.serv";
import {urls} from "../config/urls";

export const EpisAndCharServ ={
    getAllCgar:()=>axiosServices.get(urls.character).then(value => value.data),
    getAllEpisode:()=>axiosServices.get(urls.episode).then(value => value.data),
}