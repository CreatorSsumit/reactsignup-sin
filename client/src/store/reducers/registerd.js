import {REGISTER_SUCCESS,REGISTER_FAILED,LOADING_TRUE} from "../actiontype";

const initialstate={
    errors:null,
    loading:false
};

export const registerReducers = ( state = initialstate , {type,payload}) => {

   

   
    switch (type) {
        case REGISTER_SUCCESS:
      return {
          ...state,loading:false,user:payload
      }
        
      case REGISTER_FAILED:
        return {
            ...state,error:payload,user:'',
        loading:false }

        case LOADING_TRUE:
            return{
                ...state,loading:true,circleloading:payload
            }


        default:

           return state;
    }
}