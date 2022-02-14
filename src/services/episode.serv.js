

import {urls} from "../config/urls";
import {axiosService} from "./axios.serv";

export const episodeServ ={
    getEpisode: ()=>axiosService.get(urls.episode).then(value => value.data)

}
