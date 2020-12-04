import {REGISTER_FAILED,REGISTER_SUCCESS,LOADING_TRUE} from "../actiontype";

import axios from "../../utility/axiosconfig"


export const registereduser = (newuser)=> dispatch =>{
  
axios.post('users/signup',newuser).then(success =>{
 return  dispatch(successRegister(success.data.message))
}).catch(err =>{
  return  dispatch(failedRegister(err.response.data))
})
}


export const successRegister = (done)=> ({
type:REGISTER_SUCCESS,
payload:done
});


export const failedRegister = (err)=> ({
    type:REGISTER_FAILED,
    payload:errorconvert(err)
});


export const loadingaction =()=>({
type:LOADING_TRUE,
payload:true
})

const errorconvert = (err) =>{
    let errorentity;
    if(Array.isArray(err)) errorentity = err.reduce(
        (err,error) => ({...error, [error.param]: error}),{});
    else errorentity = err;
    

    if(err.message){
      return  err.message ; 
    }else{
        return errorentity.msg;
    }
    
}