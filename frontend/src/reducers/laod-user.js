export default function (state=null, action) {
    switch (action.type) {
        case 'user_load ':
            return action.payload
            break;
    }
    return state;

}