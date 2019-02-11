import axios from 'axios'


export const selectUser = (user) => {
    return(
        {
            type: "user_clicked",
            payload: user
        }
    )
}

export const loadUser = async () => {
    await axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            return({
                type: 'user_load',
                payload: res.data
            })
        })
}