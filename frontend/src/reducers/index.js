import {combineReducers} from "redux";
import Users from './laod-user'
import DataMain from './Users'



const allReducers = combineReducers({
    users: Users
})

export default allReducers