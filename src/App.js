import React, { useState } from 'react';
import './App.css';


const App = () => {

  const ElementoDeLaLista = ({ tarea, i }) => {
    return (
      <li className={tarea.completado ? "completada" : ""} key={i}>
        {tarea.nombre}
        <button onClick={() => handleEraseCLick(i)}>X</button>
        <button onClick={() => handleCompleteClick(i)}>{tarea.completado === false ? `Marcar como completado` : `Marcar como no completado`}</button>

      </li>)
  }
  //por que en el cod agregamos i? si antes funcionaba
  const handleEraseCLick = indiceTareaABorrar => {
    const tareasFiltradas = tareas.filter((tarea, i) => i !== indiceTareaABorrar)
    setTareas(tareasFiltradas)
  }

  const handleCompleteClick = indiceTareaACompletar => {
    const tareasModificadas = tareas.map((tarea, i) => {
      tarea.completado = i === indiceTareaACompletar ? !tarea.completado : tarea.completado
      return tarea
    })
    setTareas(tareasModificadas)
  }

  const [tareas, setTareas] = useState([
    { nombre: "Manteca", completado: false },
  ])

  const [nuevaTarea, setNuevaTarea] = useState("")

  const handleChange = e => {
    setNuevaTarea(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const listaDeTareas = tareas
    const objeto = {
      nombre: nuevaTarea,
      completado: false,
    }
    listaDeTareas.push(objeto)
    setTareas(listaDeTareas)
  }

  return (
    <div className="main">
      <ul>
        {tareas.map((tarea, i) =>
          <ElementoDeLaLista key={i} tarea={tarea} i={i}></ElementoDeLaLista>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Agregar tarea..." onChange={handleChange}></input>
        <input className="submit" type="submit" value="Agregar"></input>
      </form>
    </div>
  );
}

export default App;
