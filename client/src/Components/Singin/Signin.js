import React,{useState,useEffect} from 'react';
import CSSstyle from './Signin.module.css';
import {Avatar, Button, CssBaseline, TextField, Grid, Typography, Container  } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropsTypes from "prop-types";
import Alert from "../Alert"
import {signinuser,loadingaction} from "../../store/actions/signinaction"


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#ffb01f',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1), 
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signin(props) {
  const classes = useStyles();
  

  const initialForm = {username:"",password:"",};
  const initialError = {username:"",password:"",};
    const [formdata, setformdata] = useState(initialForm);
    const [error, seterror] = useState(initialError)
    const {isAuthenticated} = props.auth;
    
   const onformchange = (e)=>{
     e.persist();
     setformdata(prevstate => ({...prevstate , [e.target.name]:e.target.value}) );
   }
  
   
   const inputvalidation = ()=>{
     if(!formdata.username){
       seterror(prevstate =>({...prevstate,username:"Username must not empty"}) )
     }
    
     if(!formdata.password){
      seterror(prevstate =>({...prevstate,password:"Password must not empty"}) )
     }
   }
  
   const onformsubmit =(e)=>{
    e.preventDefault();
    inputvalidation();
    if(formdata.username&&formdata.password){
      props.loadingaction()
       props.signinuser(formdata,props.history);
       
       
    }
     }
  
     
  return (
    <Container component="main" style={{marginBottom: '5em'}} maxWidth="xs">
      <CssBaseline />
      <Alert />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onformsubmit}>
          <TextField onChange={onformchange}
            variant="outlined"
            type="text"
            margin="normal"
          name='username'
            fullWidth
            label="Username"
            autoFocus
          />
           <Typography variant='inherit' component='small' color='secondary'>{(error.username && !formdata.username) ? error.username : ''}</Typography>
         
          <TextField onChange={onformchange}
            variant="outlined"
            type="password"
            margin="normal"
          name='password'
            fullWidth
            name="password"
            label="Password"
            type="password"
          />
              <Typography variant='inherit' component='small' color='secondary'>{(error.password && !formdata.password) ? error.password : ''}</Typography>
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={`${classes.submit} ${CSSstyle.bgcolor}`}
          > Sign In </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgetpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

Signin.PropsTypes = {

  loading:PropsTypes.func.isRequired

}

function mapStateToProps(state){

  return{
   auth:state.signin
  }
}

function mapDispatchToProps(dispatch){
 return bindActionCreators({signinuser,loadingaction},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin);