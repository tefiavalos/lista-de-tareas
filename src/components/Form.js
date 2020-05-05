
import React, {useState} from 'react';

const Formulario = ({ funcionDelPadre, funcionDelPadreOnSubmit }) => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    let ingresoDelUsuario = e.target.value
    setValue(ingresoDelUsuario)
    funcionDelPadre(ingresoDelUsuario)
  }

  //como hago toUpperCase?, como hago para que no quede escrito por defecto en el input lo ultimo que escribo?
  //como hago para que me de la direccion/link para un proyecto de react
  //para que quede de forma definitiva?
  
  let handleSubmit = e => {
    e.preventDefault()
    funcionDelPadreOnSubmit()
    setValue("")
  }


    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Agregar tarea..." onChange={handleChange}></input>
        <input className="submit" type="submit" value="Agregar"></input>
      </form>)
  }

  export default Formulario