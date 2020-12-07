import {POST_SUCCESS,POST_FAILED,REGISTER_FAILED,REGISTER_SUCCESS,LOADING_TRUE} from "../actiontype";

import axios from "../../utility/axiosconfig"


export const timeliner = ()=> dispatch =>{
  
axios.get('users/posts/timeline').then(success =>{

 return  dispatch(successRes(success.data))
}).catch(err =>{
    console.log(err.response.data)
return  dispatch(failedRes(err.response.data))
})
}


export const successRes = (posts)=> ({
type:POST_SUCCESS,
payload:posts
});


export const failedRes = (err)=> ({
    type:POST_FAILED,
    payload:errorconvert(err)
});


const errorconvert = (err) =>{
    let errorentity;
    if(Array.isArray(err)) errorentity = err.reduce(
        (err,error) => ({...error, [error.param]: error}),{});
    else errorentity = err;
    
   

    if(err.message){
      return  err.message ; 
    }
    if(err.error){
        return err.error
    }
    else{
        return errorentity.msg;
    }
    
}