import {SIGNIN_FAILED,SIGNIN_SUCCESS,LOADING_TRUE,LOGOUT} from "../actiontype";
import jwtdecode from "jwt-decode";

const initialstate={
    errors:null,
    isAuthenticated:localStorage.getItem('token') ? true : false,
    loading:false,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    user: localStorage.getItem('token') ? jwtdecode(localStorage.getItem('token')) : null
};

export const signinReducers = ( state = initialstate , {type,payload}) => {
  
    switch (type) {
        case SIGNIN_SUCCESS:
if(payload.token){
    localStorage.setItem('token',payload.token)
}else{
    localStorage.setItem('token','')
}
       
      return {
          ...state,...payload,loading:false, isAuthenticated:localStorage.getItem('token') ? true : false
      }
        
      case SIGNIN_FAILED:
        return {
            ...state,error:payload,
        loading:false }

        case 'LOAD_USER':
        return {
            ...state,token:payload,isAuthticated:true,...jwtdecode(payload),error:null,
        loading:false }

        case LOADING_TRUE:
            return{
                ...state,loading:true,circleloading:payload
            }
            case LOGOUT:
  localStorage.removeItem('token')
                return{
                   loading:false,circleloading:payload,isAuthenticated:false
                }    


        default:

           return state;
    }
}