import react, {useState, useEffect, useRef} from "react"
import { useHistory, useParams } from "react-router-dom"
import { getTags } from "./TagManager"

export const SelectTags = () => {
    const [tags, setTags] = useState([])
    const [tagselections, setTagSelections] = useState([])
    
    useEffect( 
        () => {
        getTags().then(data => setTags(data))
     },[]
     )

     return(
         <>
            <h2>Select Tags for Images</h2>

            <div>
                
            {tags.map((tagname) => {
                    return(
                        <>
                        <input type="checkbox" name="imagetags" id= "imagetags" onChange={
                            (e) => { }
                        } />
                        <label for="imagetags">{tagname.image_tag_name}</label>
                        </>
                    )
                }
                )
                
            }
            {/* <button onClick={(e) =}>Submit</button> */}
         </div>
         
         </>
     )
}