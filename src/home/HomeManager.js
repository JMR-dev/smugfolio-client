export const getImages = () => {
    return fetch("http://localhost:8000/images", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("sf_token")}`
        }
    })
        .then(response => response.json())
}