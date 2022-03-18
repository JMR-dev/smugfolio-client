


export const createTags = (event) => {
    return fetch(`http://localhost:8000/events`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("sf_token")}`,
            "Content-Type": "Application/json"
                }
            }
        )
        .then(response => response.json())
}