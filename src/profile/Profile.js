import React, {useState, useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import { getSmug_UserById } from "./ProfileManager";

export const Profile = () => {
    const [currentuser, setcurrentuser] = useState(localStorage.getItem("smug_user_id"))
    const [smug_user, setsmuguser] = useState({})

    useEffect( 
        () => {
        getSmug_UserById(currentuser).then(data => setsmuguser(data))
     },[]
     )
// How to filter a user by their uid? Not quite sure
return (
    <>
    <h2>My Profile</h2>
    <div>
            <p> Username: {smug_user.user.username}</p>
            <p> Email: {smug_user.user.email}</p>
            <p> Name: {smug_user.user.first_name} {smug_user.user.last_name}</p>
            <p>{smug_user.business_owner ? "Current user is business owner" : "Current user is a standard user"}</p>
            <p> User is staff? {smug_user.user.is_staff ? "Yes" : "No"}</p>

    </div>
    </>
)
}