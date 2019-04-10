import React, { useState } from 'react';
import Group from '../Group/Group';
import Search from '../Search/Search';

const Dashboard = () => {
    return(
        <div>
            <div>
                <Search />
            </div>
            <div>
                <h1>Gaming News</h1>
            </div>
            <div>
                <Group />
            </div>
            <div>
                <h1>Rankings</h1>
            </div>

        </div>
    )

}

export default Dashboard