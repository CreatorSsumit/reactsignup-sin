import React,{useState,useEffect} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {connect} from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function AlertC(props) {
    
    const classes = useStyles();
    

 const [state, setstate] = useState(null);

 const [successalert, setsuccessalert] = useState(null)

 useEffect(() => {
     



 if(props.register.error){
  setstate(props.register.error)
  
  setsuccessalert('');
 }
 if(props.usercreated){
  setstate('')
 setsuccessalert(props.usercreated);
 timer();
  }
  if(props.auth.error){
    setsuccessalert('');
    setstate(props.auth.error)
  }
 
   if(props.auth.message === 'password incorrect'){
    setsuccessalert('') 
setstate(props.auth.message)

  }
  if(props.auth.message === 'Signin Successfully' ){
    

    setstate('')
setsuccessalert(props.auth.message)
timer();
  }
  if(props.auth.message&&props.auth.error){
    setstate(props.auth.error)
  }

    return () => {

    }
 }, [props.register.error,props.usercreated,props.auth])


 const timer = ()=>{
    setTimeout(()=>{
        setsuccessalert('')
        },5000)
 }

 

 let expanderror = [];

 const randonkey = Math.floor(Math.random() * 10);

  if(state){
      
  expanderror.push(<Alert key={randonkey} severity="error">{state}</Alert>)
      }
  
 return (
  
             <div className={classes.root}>
                 {successalert ? <Alert  severity="success">{successalert}</Alert> : ''}
                {expanderror.map(err =>err)}
            </div>
       
    )
}


function mapStateToProps(state){

 return{
register:state.register,
usercreated:state.register.user,
auth:state.signin
 }
    
  }
  
 
  
  export default connect(mapStateToProps,null)(AlertC);

