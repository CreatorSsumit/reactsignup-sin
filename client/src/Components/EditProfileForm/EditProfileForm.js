import React from 'react';
import CSSstyle from './EditProfileForm.module.css';
import { Typography, TextField, Container,Divider, RadioGroup, Radio, FormControlLabel, Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import RestoreTwoTone from '@material-ui/icons/RestoreTwoTone';
import EditProfileHeader from '../EditProfileHeader/EditProfileHeader';
function EditProfileForm() {
    return (
        <Container className={CSSstyle.center}>
            <Typography variant="h4">Edit Profie Details...</Typography>
            <EditProfileHeader />
            <div style={{textAlign: 'center'}}>
            
            <Button 
                style={{margin: '0 1em 1em 0 '}}
                variant="contained" 
                startIcon={<RestoreTwoTone />} 
                className={CSSstyle.bgcolor}> Reset Password</Button>
            
            <Button 
                style={{marginBottom: '1em'}}
                variant="contained" 
                startIcon={<Delete />} 
                className={CSSstyle.bgcolor}>Delete Profile</Button>

            </div>
            

            <Divider style={{marginBottom: "1em"}}  />
            <Typography variant="h5">Profie Details...</Typography>
            <form> 

            <TextField
                type='text'
                placeholder="Username"
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                type="text"
                placeholder="Full Name"
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                type="email"
                placeholder="example@email.com"
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                type="text"
                placeholder="Address"
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                type="text"
                placeholder="+(con) tact no"
                fullWidth
                margin="normal"
                variant="outlined"
            />

            <TextField
                type="text"
                placeholder="tell us about you..."
                multiline
                fullWidth
                margin="normal"
                rows={3}
                variant="outlined"
            />

            <RadioGroup row defaultValue="male" aria-label="gender" name="customized-radios">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            
            <Button variant="contained" className={CSSstyle.bgcolor}> Submit Details </Button>

            <Button type="reset" variant="contained" style={{margin: '1em 1em'}} color="default">Reset</Button>


            </form>
        </Container>
    )
}

export default EditProfileForm
