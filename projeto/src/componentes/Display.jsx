import React from 'react';
import '../css/Display.css'

const Display = ({ display }) => {
    return(
        <div className='display'>
            <p>
                {display}
            </p>
        </div>
    )
}

export default Display;