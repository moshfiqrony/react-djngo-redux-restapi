import axios from 'axios'

export function loadUser(){
    return(dispatch)=>{
        return axios.get('http://127.0.0.1:8000/api/')
        .then((res) => {
            dispatch(passData(res.data));
        })
    }
}

export function passData(data){
    return{
        type: 'user_load',
        payload: data
    }
}