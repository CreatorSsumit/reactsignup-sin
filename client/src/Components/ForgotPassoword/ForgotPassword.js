import React from 'react';
import CSSstyle from './ForgotPassword.module.css';
import { Container, Typography, TextField, Button } from '@material-ui/core';

function ForgotPassword() {
    return (
        <Container style={{textAlign: 'center'}}>
        <Typography variant="h3">Password Recovery</Typography>
        <TextField
                className={CSSstyle.width}
                type='email'
                placeholder="registered email"
                margin="normal"
                variant="outlined"
            />
            <br/>
        <Button variant="contained" className={CSSstyle.bgcolor}> Are You Sure ? </Button>
        </Container>
    )
}

export default ForgotPassword
