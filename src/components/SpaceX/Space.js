import React, {useEffect, useState} from 'react';

import SpaceLaunch from "./SpaceLaunch";

const Space = () => {
    let [launch , setLaunch] = useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setLaunch(value.filter(value => value.launch_year !== '2020'))
            })
    }, [])
    return (
        <div>
            {launch.map(space => {return <SpaceLaunch mission_name={space.mission_name} launch_year={space.launch_year} mission_patch_small={space.links.mission_patch_small}  />} )}

        </div>
    );
};

export default Space;