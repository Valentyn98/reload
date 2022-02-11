import axiosService from "./axios.serv";

import {urls} from "../components/config/urls";



export const carServ ={
    getAll :() => axiosService.get(urls.cars).then(value => value.data),
    create :(car)=> axiosService.post(urls.cars,car).then(value => value.data),
    delete: (id) => axiosService.delete(`${urls.cars}/${id}`),
    update:(id,car)=> axiosService.patch(`${urls.cars}/${id}`,car).then(value => value.data)
}
