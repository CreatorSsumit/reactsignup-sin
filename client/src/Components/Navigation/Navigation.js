import React, { useEffect, useState } from 'react';
import CSSstyle from './Navigation.module.css';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, MenuItem, Menu} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Timeline from '@material-ui/icons/Timeline';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Settings from '@material-ui/icons/Settings';
import {Link ,useHistory,withRouter} from "react-router-dom";
import {connect} from "react-redux"
import PropsTypes from "prop-types";
import {bindActionCreators} from "redux";
import {logOut} from "../../store/actions/signinaction"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Navigation(props) {

  var history = useHistory();

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const gotoProfile = () => {
    handleMenuClose();
  };

  const gotoTimeline = () => {
    handleMenuClose();
  };

  const gotoSetting = () => {
    handleMenuClose();
  };

  const loggingout = () =>{
        props.logOut();
        handleMenuClose();
        history.push({
          pathname: '/',
          search: '?query=abc',
          state: { detail: 'some_value' }
      })
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={gotoTimeline}>
        <IconButton title="Timeline" color="inherit">
            <Timeline />
        </IconButton>
        <p>Timeline</p>
      </MenuItem>
      <MenuItem onClick={gotoProfile}>
        <IconButton title="Profile" color="inherit">
            <VerifiedUser />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={loggingout}>
        <IconButton title="Logout" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
      <MenuItem onClick={gotoSetting}>
      <IconButton title="Settings" color="inherit">
        <Settings />
      </IconButton>
      <p>Settings</p>
    </MenuItem>
    </Menu>
  );



 const {isAuthenticated}  = props.auth ;

        

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={CSSstyle.backgroundColor}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
              <Link style={{textDecoration:"none",color:"white"}} className={CSSstyle.Link} to='/'>Taskmanagr</Link>           
          </Typography>
          <div className={classes.grow} />

         

            {isAuthenticated ? (<div className={classes.sectionDesktop}>
            <IconButton onClick={gotoTimeline}
              title="Timeline" color="inherit">
                <Timeline />        
            </IconButton>
            <IconButton onClick={gotoProfile}
              title="Profile" color="inherit">
                <VerifiedUser />
            </IconButton>
            <IconButton
              onClick={loggingout}
              title="Logout" color="inherit">
              <AccountCircle />
            </IconButton>
            <IconButton
              onClick={gotoSetting}
              title="Settings" color="inherit">
              <Settings />
            </IconButton>
          </div>)  : null}


          {isAuthenticated ? (
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> )  : null}

         

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}



function mapStateToProps(state){

   return{
  auth:state.signin
   } }
    
function mapDispatchToProps(dispatch){
      return bindActionCreators({logOut},dispatch)
     }
    
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigation));
  
  

