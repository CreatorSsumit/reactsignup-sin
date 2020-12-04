import React from 'react';
import CSSstyle from './Post.module.css';
import {Paper, Avatar, Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post() {
    return (
        <Paper className={CSSstyle.paper} elevation={3}>
        <Container style={{display: 'flex'}}>
        <Avatar variant="rounded" className={CSSstyle.avatar} src='https://cdn.vox-cdn.com/thumbor/CmMjXu8KUUpGp0nMRWCYtKBJURY=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19921093/mgidarccontentnick.comc008fa9d_d.png' />
        <Box>
            <Box className={CSSstyle.social}>
                <Typography variant="inherit" component="h6">Los Angles - 28 Sep 2020, 12:59:10 PM</Typography>

                <Accordion className={CSSstyle.accordian}>
                    <AccordionSummary
                    expandIcon={<IconButton><ExpandMoreIcon /></IconButton>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"></AccordionSummary>
                    <AccordionDetails className={CSSstyle.socialContent}>
                    <i className={`fa fa-thumbs-up ${CSSstyle.like} `}></i>
                    <i className={`fa fa-thumbs-down ${CSSstyle.dislike} `}></i>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Typography variant="body1" component="h6">Name</Typography>
            <Typography variant="subtitle2" component="h6">Title</Typography>
            <Typography variant="body2" component="h6">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, et!</Typography>

        </Box>
        </Container>
        </Paper>
    )
}

export default Post
