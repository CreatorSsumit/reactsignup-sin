import React from 'react';
import CSSstyle from './EditProfileHeader.module.css';
import {Grid, Paper, Avatar, Button, Typography} from '@material-ui/core';
import Camera from '@material-ui/icons/Camera';

function EditProfileHeader() {
  return (
    <Grid className={CSSstyle.center} >
    <Paper className={CSSstyle.spacing} elevation={3}> 
    <main className={CSSstyle.details}>
    <Grid className={CSSstyle.mediaContainer}>
      <Avatar variant="rounded" className={CSSstyle.avatar} src='https://cdn.vox-cdn.com/thumbor/CmMjXu8KUUpGp0nMRWCYtKBJURY=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19921093/mgidarccontentnick.comc008fa9d_d.png' />

      <Grid>
        <Typography variant="h4">John Doe</Typography>
        <Typography className={CSSstyle.downSpace} variant="subtitle1" color="textSecondary">@johndoe</Typography>
        <Button variant="contained" startIcon={<Camera />} className={CSSstyle.bgcolor}> Change Photo</Button>
      </Grid>

    </Grid>
    <div style={{marginBottom: '1em'}}>
      <Typography className={CSSstyle.bgcolor}  style={{padding: '.2em', borderRadius: '.3em'}} variant="body2" component="span">
      Posts: 0
      </Typography> 
      <Typography variant="body2" component="span" style={{margin:'0 .5em'}}>|</Typography>
      <Typography variant="body2" component="span" color="textSecondary">
      Joined 28 Sep 2020, 11:11:47 AM
      </Typography>
    </div>
    </main>
    </Paper>
    </Grid>
  )
}

export default EditProfileHeader
