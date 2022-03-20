export const getImages = () => {
    return fetch("http://localhost:8000/images", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sf_token")}`
        }
    })
        .then(response => response.json())
}

export const postImages = (image, file_name) => {
        return fetch(`http://localhost:8000/images?file_name=${file_name}`, {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("sf_token")}`,
                "Content-Type": "application/json"
                    },
            body:JSON.stringify(image),
                }
            )
            .then(response => response.json())
    
}