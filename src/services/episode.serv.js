

import {urls} from "../config/urls";
import {axiosService} from "./axios.serv";

export const episodeServ ={
    getEpisode: (pages)=>axiosService.get(`${urls.episode}${pages}`).then(value => value.data)

}
