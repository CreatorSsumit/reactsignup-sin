import React,{useEffect} from 'react';
import CSSstyle from './Timeline.module.css';
import { Container, Typography, Button, Divider, Box } from '@material-ui/core';
import Post from '../Post/Post';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {timeliner} from "../../store/actions/authtoken"
import {loadUser} from "../../store/actions/signinaction"
import Axios from "../../utility/axiosconfig"
function Timeline(props) {

props.timeliner()

// const sessionLogin = () =>{

//     let auth = localStorage.getItem('token');

//     if(auth){
  
//       console.log(auth)
//       Axios.defaults.headers.common['auth-token'] = auth;
//     props.loadUser(auth);
  
//     }else{
//       delete Axios.defaults.headers.common['auth-token'];
  
//     }
//   }
  
  


//   useEffect(() => {
//     props.timeliner()
//       sessionLogin();
     
//       return () => {
          
//       }
//   }, [])




    return (
        <Container>
            <Typography variant="h4">
            Hello, Username  
            <span role="img" aria-label="hi" aria-labelledby="hi">👋</span>
            </Typography>
            <Button
            type="submit"
            variant="contained"
            className={CSSstyle.bgcolor}
          > What Is In Your Mind </Button>
          <Divider style={{margin: '1em 0'}} />
            <Typography variant="h5">Trending Posts</Typography>
            <Box className={CSSstyle.posts}>
                <Post />
                <Post />
                <Post />
            </Box>  
        </Container>
    )
}


function recive(state){
    return{

    }
}


function send(dispatch){
    return bindActionCreators({timeliner,loadUser},dispatch)
}

export default connect(recive,send)(Timeline)
