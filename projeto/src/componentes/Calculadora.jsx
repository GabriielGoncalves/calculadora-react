import React, { useState } from 'react';
import '../css/Calculadora.css'
import Botoes from './Botoes'
import Display from './Display';

const Calculadora = function() {
    
    const [display, setDisplay] = useState(0)

    return(
        <div className='calculadora'>
            <Display display={display}/>
            <Botoes setDisplay={setDisplay} display={display} />
        </div>
    )
}

export default Calculadora;