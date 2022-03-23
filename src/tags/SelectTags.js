import react, {useState, useEffect, useRef} from "react"
import { useHistory, useParams } from "react-router-dom"
import { getTags, addTagsToImages } from "./TagManager"

export const SelectTags = () => {
    const [tags, setTags] = useState([])
    const [tag_selections, setTagSelections] = useState( new Array(tags.length).fill(0))
    let { id } = useParams();
    const tagscopy = [...tags]
    
    useEffect( 
        () => {
        getTags().then(data => setTags(data))
     },[]
     )

     return(
         <>
            <h2>Select Tags for Images</h2>

            <div>
                
            {tagscopy.map((tagname) => {
                    return(
                        <>
                        <input type="checkbox" name="imagetags" value={tagname.id} id= "imagetags" onChange={
                            (e) => {tagname.forEach(setTagSelections(e.target.value)) }
                        } />
                        <label for="imagetags">{tagname.image_tag_name}</label>
                        </>
                    )
                }
                )
                
            }
            < button onClick = {
                () => {
                    addTagsToImages(tag_selections, {id})
                }
            }
            
            
            >Submit</button>
         </div>
         
         </>
     )
}