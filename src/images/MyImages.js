import React, {useState, useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import { getImages, getImageData, deleteImage } from "./MyImageManager";

export const MyImages = () => {
    const [allImages, setAllImages] = useState([])
    const [ imageData, setImageData] = useState([])
    const history = useHistory()
    let { id } = useParams();

    

    useEffect( 
        () => {
        getImageData().then(data => setImageData(data))
     },[]
     )


 return(
     <>
     <h2> My Images</h2>
     <div>
     {imageData.map((image) =>{
         return (
             <>
             <img src={`http://localhost:8000${image.picture}`} key={image.id} width={616} height={408} />
             <button onClick={() => {deleteImage(image.id).then(() => getImageData().then(data => setImageData(data)))}}> Delete Image</button>
             </>
         )
     }
     )}
     </div>
    </>
 )
}