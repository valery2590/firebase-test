import React from 'react';
import './App.css';
import { collection, getDocs, setDoc, doc , addDoc, getFirestore} from "firebase/firestore";
import { useEffect, useState } from 'react';
import db from './firebase'



function App() {

  const initialValues = {
    age:"",
    name: "",
    race:"",
  }

  useEffect(()=>{
    const obtenerDatos = async ()=>{
      const datos = await getDocs(collection(db, 'pets'))
      console.log(datos.docs())
    }
    obtenerDatos();
  },[])

  const [dato, setDato] = useState(initialValues);
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputRace, setInputRace] = useState('');

  const handleInputChange = e =>{
    const {name, value} = e.target;
    setDato({...dato, [name]:value})
  }

  // Add a new doc into the collection
  const addOrEdit = async () =>{
   await addDoc(collection(db, "pets"), {
    age: dato.age,
    name: dato.name,
    race: dato.race
  });
  }

  // Get all the docs from a collection
//   const database = getFirestore();
//   const colRef = collection(db, "pets");
//   const docsSnap =  getDocs(colRef);
//   docsSnap.forEach(doc => {
//     console.log(doc.data());
// })

  const handleSubmit = e=>{
    e.preventDefault();
    addOrEdit(dato);
    console.log('new pet added')
    console.log(dato)
    setDato({
      age:"",
      name:"",
      race:"",
    })
  }

return (
    <div>
      <h1>Register your buddy! 🐕🦮</h1>
      <form onSubmit={handleSubmit}>
      <div className='input-container'>
      <label>Age of the pet</label>
        <input type="text" onChange={handleInputChange} value={dato.age} name="age"/>
      <label>Name of the pet</label>
        <input type="text"  onChange={handleInputChange} value={dato.name} name="name"/>
        <label>Race of the pet</label>
        <input type="text"  onChange={handleInputChange} value={dato.race} name="race" />
        <button type="submit" onSubmit={handleSubmit} >Add their race</button>
      </div>
      </form>
  <ul>

  </ul>
      

    </div>
  
  );
}

export default App;
