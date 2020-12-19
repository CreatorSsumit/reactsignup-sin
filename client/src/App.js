import React, { Component, Fragment } from 'react';
import CSSstyle from './App.module.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Timeline from './Components/Timeline/Timeline';
import Signin from './Components/Singin/Signin';
import Signup from './Components/Signup/Signup';
import Landingpage from "./Components/landingpage/landingpage";
import Loading from "./Components/loading"
import {connect} from "react-redux"
import {useHistory} from "react-router-dom";
import Axios from './utility/axiosconfig';
import {loadUser} from "./store/actions/signinaction"
import {bindActionCreators} from "redux"

class App extends Component {



  render() {
  const  loading = this.props.isloading;
  const signinloading = this.props.signinloading;
const { isAuthenticated } = this.props.auth;



    return (
      <BrowserRouter>
      <div className={CSSstyle.widthHeight}>
      <Navigation />
    
    {signinloading ? <Loading /> :''}
      <Route path='/'  exact component={Landingpage} />
       <Switch>
       <Route path='/signup'  exact component={Signup} />
        <Route path='/signin'  exact component={Signin} />
     {isAuthenticated ? <Fragment>
      <Route path='/timeline'  exact component={Timeline} />
     </Fragment> :  ''}   
   
       
      
   
       </Switch>

        {/* <Signin />
        <Signup />
        <Timeline />
        <Profile />
        <EditProfileForm />
        <ResetForm />
        <ForgotPassword /> */}
        <Footer />
     
      </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state){

  return{
    isloading:state.register.loading,
    signinloading:state.signin.loading,
    auth : state.signin
  }
}
  
  
function send(dispatch){
  return bindActionCreators({loadUser},dispatch)
}

 


export default connect(mapStateToProps,send)(App)