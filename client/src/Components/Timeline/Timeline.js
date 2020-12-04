import React from 'react';
import CSSstyle from './Timeline.module.css';
import { Container, Typography, Button, Divider, Box } from '@material-ui/core';
import Post from '../Post/Post';

function Timeline() {
    return (
        <Container>
            <Typography variant="h4">
            Hello, Username  
            <span role="img" aria-label="hi" aria-labelledby="hi">👋</span>
            </Typography>
            <Button
            type="submit"
            variant="contained"
            className={CSSstyle.bgcolor}
          > What Is In Your Mind </Button>
          <Divider style={{margin: '1em 0'}} />
            <Typography variant="h5">Trending Posts</Typography>
            <Box className={CSSstyle.posts}>
                <Post />
                <Post />
                <Post />
            </Box>  
        </Container>
    )
}

export default Timeline
