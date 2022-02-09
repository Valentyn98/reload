const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}
const getById = (id) =>{
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json())
}
const getPost = () =>{
    return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}
 const userServices = {
    getAll,getById,getPost
}

export default userServices