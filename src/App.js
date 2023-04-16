import React from 'react';
import './App.css';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import db from './firebase'


function App() {
  useEffect(()=>{
    const obtenerDatos = async ()=>{
      const datos = await getDocs(collection(db, 'pets'))
      console.log(datos.docs[0].data())
    }
    obtenerDatos();
    setDato('prueba');
  },[])

  const [dato, setDato] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputRace, setInputRace] = useState('');

  const handleInputChange = e =>{
    console.log(e.target.value)
    const {name, value} = e.target;
    console.log(name, value)
  }

  const handleChangeName = e =>{
    console.log(e.target.value)
    setInputName(e.target.value)
  }
  const handleChangeAge = e =>{
    console.log(e.target.value)
    setInputAge(e.target.value)
  }
  const handleChangeRace = e =>{
    console.log(e.target.value)
    setInputRace(e.target.value)
  }

return (
    <div>
      <h1>Register your buddy! 🐕🦮</h1>
      <div className='input-container'>
      <label>Name of the pet</label>
        <input type="text"  onChange={handleInputChange} name="name"/>
        <label>Age of the pet</label>
        <input type="text" onChange={handleInputChange} name="age"/>
        <label>Race of the pet</label>
        <input type="text"  onChange={handleInputChange} name="race" />
        <button type="submit">Add their race</button>
      </div>
      

    </div>
  
  );
}

export default App;
