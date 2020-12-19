import {REGISTER_FAILED,REGISTER_SUCCESS} from "../actiontype";

import axios from "../../utility/axiosconfig"


export const registereduser = (newuser)=> dispatch =>{
  console.log(newuser)
axios.post('users/signup',newuser).then(success =>{
 return  dispatch(successRegister(success.data.message))
}).catch(err =>{
  return  dispatch(failedRegister(err.response.data))
})
}


export const Otpsend = (email)=> dispatch =>{
  console.log(email)
  axios.post('users/otpsend',{email:email}).then(success =>{
    console.log(success)
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