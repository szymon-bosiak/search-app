import React, { MouseEventHandler } from 'react'

const Error = ({ returnToHome }: {returnToHome: MouseEventHandler<HTMLButtonElement>}) => {

    return (
        <>
            <h1 className='error_message'>Error - item not found</h1>
            <button className='error_button' onClick={returnToHome} >Return to list</button>
        </>
    )
}

export default Error