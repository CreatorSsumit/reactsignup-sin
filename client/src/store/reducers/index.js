import {combineReducers} from "redux";
import {registerReducers} from "./registerd";
import {signinReducers} from './signin'

export default combineReducers({
    register:registerReducers,
    signin:signinReducers
})