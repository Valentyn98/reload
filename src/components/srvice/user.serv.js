const getAll = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}
const userService ={
    getAll
}
export default userService