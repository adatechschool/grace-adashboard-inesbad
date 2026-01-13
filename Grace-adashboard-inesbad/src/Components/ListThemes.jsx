import { ListSkills } from "./ListSkills";
import { RemoveButton } from "./RemoveButton";
export const ListThemes = ({value, handleDelete}) => {
  
 
  
  return (
 
    <div>

      {value.map((elem) => (
        <div key={elem.id}>
          <h1>{elem.name}</h1>
          <ListSkills elem={elem} />
          <RemoveButton id={elem.id} handleDelete={handleDelete} />
          
          
          
     </div>
        
      ))}

    
    
    </div>
  )
}
 
