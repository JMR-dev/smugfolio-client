import react, {useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom"
import { getTags } from "./TagManager"

export const SelectTags = () => {
    const [tags, setTags] = useState([])
    
    useEffect( 
        () => {
        getTags().then(data => setTags(data))
     },[]
     )

     return(
         <h2>Select Tags for Images</h2>
     )
}