import React, { Component } from 'react';
import CSSstyle from './App.module.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import ForgotPassword from './Components/ForgotPassoword/ForgotPassword';
import ResetForm from './Components/ResetForm/ResetForm';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Profile from './Components/Profile/Profile';
import Timeline from './Components/Timeline/Timeline';
import Signin from './Components/Singin/Signin';
import Signup from './Components/Signup/Signup';
import Landingpage from "./Components/landingpage/landingpage";
import EditProfileForm from './Components/EditProfileForm/EditProfileForm';
import Loading from "./Components/loading"
import {connect} from "react-redux"
class App extends Component {

 

  render() {
  const  loading = this.props.isloading;
  const signinloading = this.props.signinloading;

    return (
      <BrowserRouter>
      <div className={CSSstyle.widthHeight}>
      <Navigation />
    
    {signinloading ? <Loading /> :''}
      <Route path='/'  exact component={Landingpage} />
       <Switch>
       <Route path='/signup'  exact component={Signup} />
        <Route path='/signin'  exact component={Signin} />
        <Route path='/timeline'  exact component={Timeline} />
        <Route path='/profile'  exact component={Profile} />
        <Route path='/editprofile'  exact component={EditProfileForm} />
        <Route path='/resetpassword'  exact component={ResetForm} />
        <Route path='/forgetpassword'  exact component={ForgotPassword} />
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
  console.log(state)
  return{
    isloading:state.register.loading,
    signinloading:state.signin.loading
  }
}
  
  


 


export default connect(mapStateToProps,null)(App)