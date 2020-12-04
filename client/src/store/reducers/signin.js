import jwtdecode from "jwt-decode"
import {SIGNIN_FAILED,SIGNIN_SUCCESS,LOADING_TRUE} from "../actiontype";

const initialstate={
    errors:null,
    isAuthenticated: localStorage.getItem('token')  ? true : false,
    loading:false,
    token:localStorage.getItem('token') || '',
    user:  localStorage.getItem('token') ? jwtdecode(localStorage.getItem('token')) :  ''
};

export const signinReducers = ( state = initialstate , {type,payload}) => {
  
    
    switch (type) {
        case SIGNIN_SUCCESS:

        localStorage.setItem('token',payload.token)
      return {
          ...state,loading:false,...payload,isAuthenticated:true,error:null,...jwtdecode(payload.token)
      }
        
      case SIGNIN_FAILED:
          
        return {
            ...state,error:payload,user:null,isAuthenticated:false,token:null,
        loading:false }

        case LOADING_TRUE:
            return{
                ...state,loading:true,circleloading:payload
            }


        default:

           return state;
    }
}