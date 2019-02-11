import axios from "axios";


export default function () {
    let user = []
    axios.get('http://127.0.0.1:8000/api/')
        .then(res => {user=res.data});
    return(user)
}



// export default function () {
//     return ([
//     {
//         "name": "Rony",
//         "image": "http://127.0.0.1:8000/media/image/1_gVsjc6h.png",
//         "address": "Rampura"
//     },
//     {
//         "name": "Rony",
//         "image": "http://127.0.0.1:8000/media/image/1_nSeiRTg.png",
//         "address": "Rampura"
//     },
//     {
//         "name": "Rony",
//         "image": "http://127.0.0.1:8000/media/image/1_kUKzhwr.png",
//         "address": "Rampura"
//     },
//     {
//         "name": "11",
//         "image": "http://127.0.0.1:8000/media/image/1_EhGLVv2.png",
//         "address": "11"
//     },
//     {
//         "name": "1",
//         "image": "http://127.0.0.1:8000/media/image/1_BF50fep.png",
//         "address": "1"
//     },
//     {
//         "name": "Masud",
//         "image": "http://127.0.0.1:8000/media/image/1_hmkoAze.png",
//         "address": "Rampura"
//     }
// ])
// }
//
//
//
//
