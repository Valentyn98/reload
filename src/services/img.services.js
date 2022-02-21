import {axiosService} from "./axios.service";


export const imgServices ={
    getPhotoByUrl:(urls) => axiosService.get(urls).then(value => value.request.responseURL)
}