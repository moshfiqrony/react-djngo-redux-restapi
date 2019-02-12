import {combineReducers} from "redux";
import Users from './laod-user'
import Axios from "axios";
// import Data from './Users'
import axios from 'axios'



const allReducers = combineReducers({

    users: Users
})

export default allReducers