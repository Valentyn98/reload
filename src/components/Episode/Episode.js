import React from 'react';
import {Link} from "react-router-dom";
import css from './Epis.module.css'

const Episode = ({episodeInfo}) => {
   const {id,name,air_date,episode} = episodeInfo
    return (
        <div>
            <div className={css.block}>
                <div className={css.styleInfo}>
                    <div >ID: {id}</div>
                    <div className={css.textStyle}>Name: {name}</div>
                    <div className={css.textStyle}>Air_date: {air_date}</div>
                    <div className={css.textStyle}>Episode: {episode}</div>
                </div>
                <Link to={'/episodeDetails'} className={css.textStyle}state={episodeInfo}>Episode Details</Link>
            </div>
        </div>
    );
};

export default Episode;