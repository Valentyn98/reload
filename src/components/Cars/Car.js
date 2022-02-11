import React from 'react';
import {carServ} from "../../services/car.serv";

const Car = ({car,deleteCarById}) => {

    const deletCar =  (id) => {
        deleteCarById(id)
    }

    return (
        <div>
            <div><b>carId:</b> {car.id}</div>
            <div><b>Model:</b> {car.model}</div>
            <div><b>Year:</b> {car.year}</div>
            <div><b>Price:</b> {car.price}</div>
            <button onClick={()=>deletCar(car.id)}>Delete</button>
        </div>
    );
};
export default Car;