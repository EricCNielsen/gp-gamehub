import React, { useState } from 'react';
import axios from 'axios';
import {v4 as randomString} from 'uuid';
import Dropzone from 'react-dropzone';
import {GridLoader} from 'react-spinners';

const User = () => {
    const [isUploading, setUploading] = useState(false)
    return(
        <div>
            <h1>User</h1>
        </div>
    )

}

export default User