import { useEffect, useState } from "react";

export const ListSkills = ({elem}) => {
  const [valid, setValid]= useState("")

    const loadingStatus = async (id, i, status) =>{
    await fetch(`http://localhost:3000/themes/${id}/skills/${i}/${status}`,{
      method: "PUT",
      
     }
    
    )
  
 }
 



    return(
    
<>
 {elem.skills.map((skill, i)=>{
              return(
              <div key={i}>
                <h3>{skill.label}</h3>
                
                
<select onChange={(e)=> loadingStatus(elem.id, i, e.target.value)} value={skill.validation}>
<option value ="OK" > OK </option>
<option value="KO" > KO </option>
<option value="PROGRESS"> PROGRESS </option>

   
</select>
              </div> ) }

             
        )}
      

</>
    )}