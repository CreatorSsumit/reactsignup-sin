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
import {registereduser,Otpsend} from "../../store/actions/registeraction"

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

const initialForm = {fullname:"",password:"",email:"",contact:"",otp:""};
const initialError = {fullname:"",password:"",email:"",contact:"",otp:""};
  const [formdata, setformdata] = useState(initialForm);
  const [error, seterror] = useState(initialError);
  
 const onformchange = (e)=>{
   e.persist();
   setformdata(prevstate => ({...prevstate , [e.target.name]:e.target.value}) );
 }

 
 const inputvalidation = ()=>{
   if(!formdata.fullname){
     seterror(prevstate =>({...prevstate,fullname:"fullname must not empty"}) )
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
  if(formdata.fullname&&formdata.email&&formdata.password){
    // props.loadingaction();
    props.registereduser(formdata)
    
  }
   }

   const [showotpsend, setshowotpsend] = useState(false)

   const sendotp =()=>{
props.Otpsend(formdata.email)
if(formdata.email.trim()){
  setshowotpsend(true)
}else{
  setshowotpsend(false)
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

            <Button
            fullWidth
            variant="contained"
            className={`${classes.submit} ${CSSstyle.bgcolor}`}
            onClick={()=>sendotp()}
          > otp send </Button>

<center><Typography variant='inherit' component='small'  style={{color:"green",fontSize:14}}>{ showotpsend ? 'Otp Send Check Your Email' : " "}</Typography></center> 
        
          <TextField onChange={onformchange}
            text="text"
            name="otp"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
            label="enter otp sent by email"
            autoFocus
           
          />
        

          <Typography variant='inherit' component='small' color='secondary'>{(error.email && !formdata.email) ? error.email : ''}</Typography>
          <TextField
          onChange={onformchange}
          type="text"
          name="fullname"
            variant="outlined"
            margin="normal"
            fullWidth
            label="fullname"
          />
            <Typography variant='inherit' component='small' color='secondary'>{(error.fullname && !formdata.fullname) ? error.fullname : ''}</Typography>
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
            <TextField
          onChange={onformchange}
          type="number"
          name="contact"

            variant="outlined"
            margin="normal"
            fullWidth
           
            label="contact"

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
 return bindActionCreators({registereduser,Otpsend},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);