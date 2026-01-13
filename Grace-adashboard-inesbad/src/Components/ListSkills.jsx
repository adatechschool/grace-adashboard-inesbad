export const ListSkills = ({elem}) => {

    return(

        <ul>
          {elem.skills.map((skill, i)=>{
            return(
              <li key={i}>
                {skill.label}
              </li>
            )
          }
        )}
        </ul>
    )
}