import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({handleAddCategory}) => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        // console.log(e.target.value); ese e.target.value contiene el valor inicial y ademas la tecla que presionamos
        setInputValue(e.target.value);
    }



    /* Si coloco el estado de un hook en el input 
        <input 
     type="text"
     value={inputValue}
     />
     sin haber colocado ningun metodo de onChange, como el estado se mantiene en la caja de input no se podra escribir
     NADA, YA QUE NO CAMBIA DE ESTADO y se mantiene constante EN EL ESTADO INCIAL
    
    
    */

    /*PARA QUE EL ENTER TENGA FUNCion o funcione DENTRO de la caja de texto del input es necesario que este dentro 
    DE UN FORM  FORM FORM, es por ello que adicionamos el form

    PERO CADA VEZ QUE OPRIMO ENTER EN UN FORM SE REFRESCA TODO
    */

    const handleSubmit = (e)=>{
        // console.log("Submit hecho")
        e.preventDefault();
        handleAddCategory(inputValue);
        setInputValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    handleAddCategory: PropTypes.func.isRequired
}