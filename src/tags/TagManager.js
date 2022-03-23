export const getTags = () => {
    return fetch("http://localhost:8000/image_tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sf_token")}`
        }
    })
        .then(response => response.json())
}



export const createTags = (tag) => {
    return fetch(`http://localhost:8000/image_tags`, {
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

 export const addTagsToImages = (tag_selections,id) => {
     return fetch(`http://localhost:8000/images/${id}`, {
     method: "PUT",
     headers:{
        "Authorization": `Token ${localStorage.getItem("sf_token")}`,
        "Content-Type": "Application/json"
            },
    body:JSON.stringify(tag_selections)
        }
    )
 }