
import './App.css';

import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";
import {carServ} from "./services/car.serv";

function App() {
    const [trigger, setTrigger] =  useState(null)
    const update = data =>{
        setTrigger(data)
    }

const deleteCarById = async (id) =>{
    try{
        const delCar = await  carServ.delete(id)
        console.log(delCar);
        update(delCar)
    }catch (error){

    }
}
  return (
    <div className="App">
        <Form update={update}/>
        <Cars update={update} trigger={trigger} deleteCarById={deleteCarById}/>
    </div>
  );
}

export default App;
