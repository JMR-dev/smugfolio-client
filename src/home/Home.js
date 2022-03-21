import React, {useState, useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import { postImages, getImages } from "./HomeManager";

export const Home = () => {
    const homeImages = useState([])
    const history = useHistory()
    const[ businessImages, setbusinessImages] = useState([])
    const [image, setImage] = useState({
        album_id: 0,
        picture:""
    })
    const [file_name, setfile_Name] = useState("")
    const image1URL = "http://localhost:8000/media/smugimages/20140612-_JMR1361.jpg-5bbe21e5-19b0-4aae-b238-5c8791bc0b96.jpeg"
    const image2URL = "http://localhost:8000/media/smugimages/20141224-_JMR5400.jpg-b7c8b0a6-33dc-4cd3-902b-a18538eb2283.jpeg"
    const image3URL = "http://localhost:8000/media/smugimages/20140609-_JMR1159.jpg-fbcfa699-9136-4cb0-8e0a-a36694554af7.jpeg"

    useEffect( 
        () => {
        getImages().then(data => setbusinessImages(data))
     },[]
     )


    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }
    
    const createImageString = (event) => {
        let imageCopy = {...image}
        getBase64(event.target.files[0], (base64ImageString) => 
        {imageCopy.picture = base64ImageString
         setfile_Name(event.target.files[0].name)
            setImage(imageCopy)
            console.log("Base64 of file is", base64ImageString);
    
            // Update a component state variable to the value of base64ImageString
        });
    }

const resetFileNameOnUpload = (default_text) => {
    let def_text = document.getElementById("image_upload")
    def_text.files[0].name = default_text

}
const defaultImageState = 
    {
        album_id:0,
        picture:""
    }   

    // this code meant to randomize the display images. First concentrate on getting your images to display. Then worry about limiting them and randomization.
// const randomizeDisplayImages = () => {
//     let count = 0
//     do (
//          for pic of businessImages       
//         )
//         while count <= 3
            
// }


    return(
        <>
        <h1>SmugFolio</h1>
        <input label="Browse for image file to upload" type="file" id="image_upload" onChange={createImageString} />
 <input type="hidden" name="image_id" value={image.id} />
 <button onClick={
     () => 
 { postImages(image, file_name)
 .then(setImage(defaultImageState))
 .then(history.push("/SelectTags"))
 // code to rename the browse label. This is not working but should be done after other views are complete .then(setfile_Name("").then(resetFileNameOnUpload("No file chosen"))
     // Upload the stringified image that is stored in state
 }}>Upload</button>
 <div>
 <img src={image1URL} width={616} height={408} ></img>
 <img src={image2URL} width={616} height={408} ></img>
 <img src={image3URL} width={616} height={408} ></img>
 </div>
        </>
    )
}