import { ListSkills } from "./ListSkills";
import { RemoveButton } from "./RemoveButton";
export const ListThemes = ({v, handleDelete}) => { 
  return (
    <div>
      {v.map((elem) => (
        <div key={elem.id}>
          <h1>{elem.name}</h1>
        <ListSkills elem={elem} v={v}/>
        <RemoveButton id={elem.id} handleDelete={handleDelete} /> 
         
     </div>
      ))}
    </div>
  )
}
 
