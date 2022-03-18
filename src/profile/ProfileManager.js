export const getSmug_UserById = (id) => {
    return fetch(`http://localhost:8000/smug_users/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sf_token")}`
        }
    })
        .then(response => response.json())
}

export const putSmug_User = (editedProfile) => {
    return fetch(`http://localhost:8000/games/${editedProfile.id}`, {
        method: "PUT",
        body: JSON.stringify(
            editedProfile 
        ),
        headers:{
            "Authorization": `Token ${localStorage.getItem("sf_token")}`,
            "Content-Type": "Application/json"
            }
        }
    )
}