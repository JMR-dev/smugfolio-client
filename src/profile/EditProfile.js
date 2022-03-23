import React, {useState, useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import { getSmug_UserById, putSmug_User } from "./ProfileManager";


export const EditProfile = () => {
   const { id } = useParams()
   const history = useHistory()
   const [ usertoedit, setusertoedit] = useState({})

   useEffect( 
    () => {
    getSmug_UserById().then(data => setusertoedit(data))
 },[]
 )

 return (
     <form>
         
     </form>
 )
}