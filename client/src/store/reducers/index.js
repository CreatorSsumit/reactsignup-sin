import {combineReducers} from "redux";
import {registerReducers} from "./registerd";
import {signinReducers} from './signin';
import {authTokenReduser} from "./authtoken"

export default combineReducers({
    register:registerReducers,
    signin:signinReducers,
    posts:authTokenReduser
})