
export const getImageData = () => {
    return fetch(`http://localhost:8000/images`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("sf_token")}`
            }
        })
        .then(response => response.json())
}

export const getImages = (URL) => {
        return fetch(`http://localhost:8000/${URL}`, {
                headers: {
                    "Authorization": `Token ${
                        localStorage.getItem("sf_token")
                 }`
                }
            }
        )
            .then(response => response.json())
        }
  

export const deleteImage = (id) => {
    return fetch(`http://localhost:8000/images/${id}`, {
    method:"DELETE",
    headers:{
        "Authorization": `Token ${localStorage.getItem("sf_token")}`
            }
        }
    )
}