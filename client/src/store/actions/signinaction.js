import {SIGNIN_FAILED,SIGNIN_SUCCESS,LOADING_TRUE} from "../actiontype";

import axios from "../../utility/axiosconfig"


export const signinuser = (existuser)=> dispatch =>{
  
axios.post('users/signin',existuser).then(success =>{
  console.log(success.data)
 return  dispatch(successSignin(success.data))
}).catch(err =>{
  console.log(err)
  return  dispatch(failedSignin(err.response.data))
})
}


export const successSignin = (done)=> ({
type:SIGNIN_SUCCESS,
payload:done
});


export const failedSignin = (err)=> ({
    type:SIGNIN_FAILED,
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