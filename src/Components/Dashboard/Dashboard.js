import React, { useState } from 'react';
import Group from '../Group/Group';
import Search from '../Search/Search';
import GamingNews from '../GamingNews/GamingNews';
import Rankings from '../Rankings/Rankings';


const Dashboard = () => {
    return(
        <div>
            <Search />
            <Group />
            <GamingNews />
            <Rankings />
        </div>
    )

}

export default Dashboard