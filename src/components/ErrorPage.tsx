import React, { MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1 className='error_message'>Error - item not found</h1>
            <button className='error_button' onClick={() => navigate(`/`)} >Return to list</button>
        </>
    )
}

export default Error