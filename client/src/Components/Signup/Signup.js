import React,{useState,useEffect} from 'react';
import CSSstyle from './Signup.module.css';
import {Avatar, Button, CssBaseline, TextField, Grid, Typography, Container  } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropsTypes from "prop-types";
import {bindActionCreators} from "redux";
import Alert from "../Alert"
import {registereduser,loadingaction} from "../../store/actions/registeraction"

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

function Signup(props) {
  const classes = useStyles();

const initialForm = {username:"",password:"",email:""};
const initialError = {username:"",password:"",email:""};
  const [formdata, setformdata] = useState(initialForm);
  const [error, seterror] = useState(initialError)
  
 const onformchange = (e)=>{
   e.persist();
   setformdata(prevstate => ({...prevstate , [e.target.name]:e.target.value}) );
 }

 
 const inputvalidation = ()=>{
   if(!formdata.username){
     seterror(prevstate =>({...prevstate,username:"Username must not empty"}) )
   }
   if(!formdata.email){
    seterror(prevstate =>({...prevstate,email:"Email must not empty"}) )
   }
   if(!formdata.password){
    seterror(prevstate =>({...prevstate,password:"Password must not empty"}) )
   }
 }

 const onformsubmit =(e)=>{
  e.preventDefault();
  inputvalidation();
  if(formdata.username&&formdata.email&&formdata.password){
    props.loadingaction();
    props.registereduser(formdata)
    
  }
   }

   
  
  return (
    <Container component="main" style={{marginBottom: '5em'}} maxWidth="xs">
      <Alert />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
 
        

        
        <form className={classes.form} onSubmit={onformsubmit}>
          <TextField onChange={onformchange}
            text="email"
            name="email"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            label="example@john.com"
            autoFocus
          />
          <Typography variant='inherit' component='small' color='secondary'>{(error.email && !formdata.email) ? error.email : ''}</Typography>
          <TextField
          onChange={onformchange}
          type="text"
          name="username"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Username"
          />
            <Typography variant='inherit' component='small' color='secondary'>{(error.username && !formdata.username) ? error.username : ''}</Typography>
          <TextField
          onChange={onformchange}
          type="password"
          name="password"

            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"

          />
            <Typography variant='inherit' component='small' color='secondary'>{(error.password && !formdata.password) ? error.password : ''}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={`${classes.submit} ${CSSstyle.bgcolor}`}
          > Sign Up </Button>
          <Grid container>
            <Grid item xs>
              
            </Grid>
            <Grid item>
              <Link to="/signin" variant="body2">
               Already have an account ? Sign In
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


Signup.PropsTypes = {
  register:PropsTypes.object,
  registereduser:PropsTypes.func.isRequired,
  loadingTrue:PropsTypes.func.isRequired

}

function mapStateToProps(state){
 
  return{
    register:state.register
  }
}

function mapDispatchToProps(dispatch){
 return bindActionCreators({registereduser,loadingaction},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);