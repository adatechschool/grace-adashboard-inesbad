import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ListThemes } from './Components/ListThemes'




//PUT trois elements a rentrer id themes, id skills, status 
// themes/(:id)1/skills/(:idSkills)3/(:status)OK

export default function App() {
  const[v, setV]= useState([])

 useEffect(() => {
 
    async function getData() {
      const res = await fetch("http://localhost:3000/themes");
      const data = await res.json();
      setV(data)
      console.log("test", data);
    }
    getData();
  }, []);

  
    const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/themes/${id}`, {
      method: "DELETE",
    });

    setV((prev) => prev.filter((elem) => elem.id !== id));
  };
  

  return (
   
<div>
<ListThemes v={v} handleDelete={handleDelete} />

</div>

  )
};


