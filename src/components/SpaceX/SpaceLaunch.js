import React from 'react';

const SpaceLaunch = (props) => {
    const {mission_name,launch_year,mission_patch_small} = props
    return (
        <div className={"table_launch"}>
            <div>
                <div>{mission_name}</div>
                <div>{launch_year}</div>
            </div>
            <div ><img  className={'logo'} src={mission_patch_small} alt=""/></div>
        </div>
    );
};

export default SpaceLaunch;