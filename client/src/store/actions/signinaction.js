import {SIGNIN_FAILED,SIGNIN_SUCCESS,LOADING_TRUE,LOGOUT} from "../actiontype";

import axios from "../../utility/axiosconfig"


export const signinuser = (existuser,history)=> dispatch =>{
  
axios.post('users/signin',existuser).then(success =>{
  
 if(success.data.message  ===  'password incorrect'){
  return  dispatch(failedSignin(success.data))

 }else{
  history.push('/timeline')
  return  dispatch(successSignin(success.data))
 }

  
}).catch(err =>{
  console.log(err)
  return  dispatch(failedSignin(err.response.data))
})
}


export const successSignin = (auth)=> dispatch => {
  
  axios.defaults.headers.common = auth.token;

  return dispatch ({
    type:SIGNIN_SUCCESS,
payload:auth
});

};


export const loadUser = (token)=> ({
  type:'LOAD_USER',
  payload:token
  });


  






export const logOut = ()=> ({
  type:LOGOUT
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