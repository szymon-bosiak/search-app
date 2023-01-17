import React from 'react'

const Error = ({ returnToHome }: {returnToHome:any}) => {
    return (
        <>
            <h1 className='error_message'>Error - item not found</h1>
            <button className='error_button' onClick={returnToHome} >Return to list</button>
        </>
    )
}

export default Error