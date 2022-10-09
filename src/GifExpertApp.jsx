import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GifExpertApp = (props) => {
    // const categories = ['One punch', 'Samurai', 'Dragon ball'];
    const [categories, setCategories] = useState(['One punch', 'Samurai', 'Dragon ball']);      
    const handleAdd = ()=>{
        setCategories([...categories, "otro"]);
        /*LO QUE VA A DEVOLVER dentro de el argumento de la funcion set del hook eso LO 
        VA ASIGANAR AL ESTADO, si es algo repetido no cambia de estado y no renderiza mas
        */ 

        /*EL UNICO QUE DEFINE CUANDO se renderiza un componente es la funcion que maneja al HOOK es decir SET...
        El operador Spread ... es para extraer los datos en el nuevo array u objeto, una nueva instancia independiente
        de la anterior
        */
    }


  return (
    <>
    <h2>GifExpertApp</h2>
    <button onClick={handleAdd}>Agregar</button>
    <br/>
    <ol>
        {
            // NO podemos utilizar un FOR ya que no devuelve nada, es necesario una expresion
            // es por ello que utilizamos map ya que devuelve los nuevos valores, nueva instancia
            // pero en una lista cada hijo debe de tener un key property
            categories.map((category)=>{
                return <li key={category}>{category}</li>;
            })
            // React necesita ese KEY para saber que componente en especifico cambio
            // y solo realizar los cambios en ese componente y NO RENDERIZAR TODO
            // POR ESO no debe de haber KEY PROPERTIES duplicados
        }
    </ol>
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp