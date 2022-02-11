


import axios from "axios";
import {baseURL} from "../components/config/urls";

const axiosService = axios.create({ baseURL })

export default axiosService