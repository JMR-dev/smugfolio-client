import React, {useState, useEffect} from "react";
import { useHistory,useParams } from "react-router-dom";
import { getSmug_UserById } from "./ProfileManager";

export const Profile = () => {
    const [users, setUsers] = useState({})

    useEffect( 
        () => {
        getSmug_UserById().then(data => setUsers(data))
     },[]
     )
// How to filter a user by their uid? Not quite sure
return (
    <>
    <h2>My Profile</h2>
    <div>
            <p></p>
    </div>
    </>
)
}