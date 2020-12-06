import { LOGOUT,POST_FAILED,POST_SUCCESS,REGISTER_SUCCESS,REGISTER_FAILED,LOADING_TRUE} from "../actiontype";

const initialstate={
    errors:null,
    loading:false,
    posts:null
};

 export const authTokenReduser = ( state = initialstate , {type,payload}) => {

   
    switch (type) {
        case POST_SUCCESS:
      return {
          ...state,loading:false,...payload,error:null
      }
        
      case POST_FAILED:
        return {
            ...state,error:payload,loading:false }


            case LOGOUT:
                localStorage.removeItem('token')
                              return{
                                 loading:false,posts:null,isAuthenticated:false
                              }

        case LOADING_TRUE:
            return{
                ...state,loading:true,circleloading:payload
            }


        default:

           return state;
    }
}

