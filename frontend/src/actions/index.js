import axios from 'axios'


export const selectUser = (user) => {
    return(
        {
            type: "user_clicked",
            payload: user
        }
    )
}

export const loadUser = () => {
    let user = []
    axios.get('http://127.0.0.1:8000/api/')
        .then(res => {console.log(res.data)});
    console.log(user);
    return(
        {
            type: "user_load",
            payload: user
        }
    )
}