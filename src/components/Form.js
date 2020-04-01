
import React from 'react';

const Formulario = ({ funcionDelPadre, funcionDelPadreOnSubmit }) => {

  const handleChange = e => {
    let ingresoDelUsuario = e.target.value
    funcionDelPadre(ingresoDelUsuario)
  }

  //como hago toUpperCase?, como hago para que no quede escrito por defecto en el input lo ultimo que escribo?
  
  let handleSubmit = e => {
    e.preventDefault()
    funcionDelPadreOnSubmit()
  }


    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Agregar tarea..." onChange={handleChange}></input>
        <input className="submit" type="submit" value="Agregar"></input>
      </form>)
  }

  export default Formulario