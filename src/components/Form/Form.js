import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carServ} from "../../services/car.serv";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../validators/car.validator";

const Form = ({update}) => {
    const {register,handleSubmit,watch,formState:{errors}} = useForm({resolver:joiResolver(CarValidator),mode:'onTouched'})
    const [formError, setFormError] = useState({})

    const submit = async (car) => {
            try{
                const newCar = await  carServ.create(car)
                update(newCar)
            }catch (error){
                setFormError(error.response.data)
            }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" defaultValue={''} {...register('model')} /></label>
                {errors.model &&  <span>{errors.model.message}</span>}
                <label>Price:<input type="text" defaultValue={''}{...register('price')}/></label>
                {errors.price &&  <span>{errors.price.message}</span>}
                <label>Year:<input type="text" defaultValue={''}{...register('year')} /></label>
                {errors.year &&  <span>{errors.year.message}</span>}
                <button>Make</button>
            </form>
        </div>
    );
};

export default Form;