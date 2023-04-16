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
  const [input, setInput] = useState('');

  const handleChange = e =>{
    console.log(e.target.value)
    setInput(e.target.value)
  }

return (
    <div>
      <h1>Nueva APP</h1>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add</button>
      </div>

      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add</button>
      </div>

      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add</button>
      </div>

      <div>
        <span>Name</span>
        <span>{dato}</span>
      </div>

    </div>
  
  );
}

export default App;
