export const getTags = () => {
    return fetch("http://localhost:8000/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sf_token")}`
        }
    })
        .then(response => response.json())
}



export const createTags = (tag) => {
    return fetch(`http://localhost:8000/events`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("sf_token")}`,
            "Content-Type": "Application/json"
                },
        body:JSON.stringify(tag)
            }
            
        )
.then(response => response.json())
 }