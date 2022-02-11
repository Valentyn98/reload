import React, {useEffect, useState} from 'react';
import {carServ} from "../../services/car.serv";
import Car from "./Car";

const Cars = ({trigger,deleteCarById}) => {
     const [cars,setCars] = useState([])
    useEffect(()=>{
        carServ.getAll().then(value => setCars(value))
    },[trigger])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteCarById={deleteCarById}/>)}
        </div>
    );
};
export default Cars;