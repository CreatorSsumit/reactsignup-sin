import React from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import CSSstyle from './ResetForm.module.css';

function ResetForm() {
    return (
        <Container style={{textAlign: 'center'}}>
        <Typography variant="h3">Reset Password</Typography>
        <TextField
                className={CSSstyle.width}
                type='text'
                placeholder="Old Password"
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                className={CSSstyle.width}
                type="text"
                placeholder="New Password"
                margin="normal"
                variant="outlined"
            />
            <br/>
        <Button variant="contained" className={CSSstyle.bgcolor}> I'm Ready </Button>
        </Container>
    )
}

export default ResetForm;
