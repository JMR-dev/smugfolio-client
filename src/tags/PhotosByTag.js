import React, {useState, useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import { getImageData } from "../images/MyImageManager";
import { getTags } from "./TagManager";

export const PhotosByTag = () => {
    const [ imageData, setImageData] = useState([])
    const [ tagdata, settagdata ] = useState([])

    useEffect( 
        () => {
        getImageData().then(data => setImageData(data))
     },[]
     )

     return(
        <>
    <div>
     {imageData.map((image) =>{
         return (
             // <p> {tagdata.map((tag)=> tag.image_tag_name )} </p>
             <>
            
             <img src={`http://localhost:8000${image.picture}`} key={image.id} width={616} height={408} />
             
             </>
         )
     }
     )}
     </div>
     </>
     )
}