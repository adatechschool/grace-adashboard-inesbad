
export const RemoveButton = ({id, handleDelete})=>{
  

return(
    <>
            <div>
            <button onClick={() => handleDelete(id)}> Remove</button>
            </div>
    </>
           

)
    

 

}