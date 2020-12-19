import React,{useEffect,useState} from 'react';
import CSSstyle from './Timeline.module.css';
import { Container, Typography, Button, Divider, Box } from '@material-ui/core';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {timeliner} from "../../store/actions/authtoken"
import {loadUser} from "../../store/actions/signinaction"
import {useHistory} from "react-router-dom"
function Timeline(props) {
  

var history = useHistory();
 

 const [user, setuser] = useState('')

 

 var {isAuthenticated} = props.auth

useEffect(()=>{
  

    if(isAuthenticated){
        history.push('/timeline')
      }else{
        history.push('/')
      }

    if(props.auth.user) {
        if(props.auth.user.user)
        setuser(props.auth.user.user)}
       if(props.auth.user.email) setuser(props.auth.user)

       return () => {
               
            }
      
    
   
},[props.auth])


console.log(user)


    return (
        <Container>
            <Typography variant="h6">
            Hello { user ? user.username : '' }
            <span role="img" aria-label="hi" aria-labelledby="hi">👋 {user ? `${user.fullname}` : '' } </span>
            </Typography>
            <Button
            type="submit"
            variant="contained"
            className={CSSstyle.bgcolor}
          > What Is In Your Mind </Button>
          <Divider style={{margin: '1em 0'}} />
            <Typography variant="h5">Trending Posts</Typography>
            <Box className={CSSstyle.posts}>
                 <Typography align="center" style={{color:"gray"}} variant="h6">no Posts available</Typography>
           
    </Box>  
    </Container>

    )
}


function recive(state){

return{
auth:state.signin
    }
}


function send(dispatch){
    return bindActionCreators({timeliner,loadUser},dispatch)
}

export default connect(recive,send)(Timeline)
