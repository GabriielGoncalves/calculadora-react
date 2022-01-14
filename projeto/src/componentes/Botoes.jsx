import React, { useEffect, useState } from 'react';
import '../css/Botoes.css'

const Botoes = ({ setDisplay, display }) => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()


    useEffect( () => {

    }, [numero1, numero2])

    const [operacao, setOperacao] = useState()
    // const numeros = []

    function addNumero(e){
        if(display=== 0 && e.target.value == 0){
            setDisplay(0)
        }
        else if(display == 0 && e.target.value != 0){
            setDisplay(e.target.value)
        } 
        else if(display != 0){
            setDisplay(display += e.target.value)
        }
    }
    
    function limparDisplay(){
        setDisplay(0)
        setOperacao('')
        setNumero1()
        setNumero2()
        // numeros.splice(0, 2)
        // console.log(numeros.length)
        // setNumero1(null)
        // setNumero2(null)
    }

    function addDigito(e){
        if(e.target.value == ','){
            if(!display.includes('.')){
                setDisplay(display += e.target.value.replace(',', '.'))
            }
        }
    }

    function addOperacao(e) {
        if(!operacao && e.target.value !== '=' && display > 0){
                    setOperacao(e.target.value)
                    const numero = parseFloat(display)
                    setNumero1(numero)
                    setDisplay(0)

                    // try {
                    //     console.log(operacao)
                    // } catch {
                    //     console.log('deu ruim')
                    // }
        } 
        else if(e.target.value === '=') {
            // if(e.target.value === '='){//}
                if(!operacao){
                    const total = (parseFloat(display)) + 0
                    setDisplay(total)
                }
                else if(operacao){
                    const numero2 = parseFloat(display)
                    setNumero2(numero2)
    
                    try{
                        const total = eval(`${numero1} ${operacao} ${numero2}`)
                        setDisplay(parseFloat(total.toFixed(1)))
                        setOperacao()
                        setNumero2()
                    }catch{
                        console.log('deu ruim z')
                    }
    
    
                    // const numero = parseFloat(display)
                    // setNumero2(numero)
                    // console.log(numero2)
                    // const total = eval(`${numero1} ${operacao} ${numero2}`)
                    // setDisplay(total)
                    // console.log(total)
                } 
        } 
        // else if(e.target.value !== '=' ){
        //     setOperacao(e.target.value)
            
        //     try{
        //         console.log()
        //     }catch{

        //     }
        // }
        
    }

    return(
            <div className='calculadora-botoes'> 
                <button className='ac' onClick={() => limparDisplay()} >AC</button>
                <button className='botao barra' value={'/'} onClick={(e) => addOperacao(e)}>/</button>
                <button className='numero' value={7} onClick={(e) => addNumero(e)}>7</button>
                <button className='numero'value={8}  onClick={(e) => addNumero(e)}>8</button>
                <button className='numero'value={9}  onClick={(e) => addNumero(e)}>9</button>
                <button className='botao vezes' value={'*'} onClick={(e) => addOperacao(e)}>*</button>
                <button className='numero' value={4} onClick={(e) => addNumero(e)} >4</button>
                <button className='numero' value={5} onClick={(e) => addNumero(e)} >5</button>
                <button className='numero' value={6} onClick={(e) => addNumero(e)} >6</button>
                <button className='botao menos' value={'-'} onClick={(e) => addOperacao(e)}>-</button>
                <button className='numero' value={1} onClick={(e) => addNumero(e)} >1</button>
                <button className='numero' value={2} onClick={(e) => addNumero(e)} >2</button>
                <button className='numero' value={3} onClick={(e) => addNumero(e)} >3</button>
                <button className='botao mais' value={'+'} onClick={(e) => addOperacao(e)}>+</button>
                <button className='numero numero0' value={0} onClick={(e) => addNumero(e)}>0</button>
                <button className='virgula' value={','} onClick={(e) => addDigito(e)}>,</button>
                <button className='botao igual' value={'='} onClick={(e) => addOperacao(e)}>=</button>
            </div>
    )
}

export default Botoes;