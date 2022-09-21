import React from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

import useStyles from './Frame.style';

function Frame({ image }) {
    const classes = useStyles();

    return (
        <div className={classes.frame}>
            <div className={classes.topBar}>
                <Box display="inline-block" bgcolor="error.main" borderRadius="50%" p={0.5} mr={0.5} />
                <Box display="inline-block" bgcolor="warning.main" borderRadius="50%" p={0.5} mr={0.5} />
                <Box display="inline-block" bgcolor="success.main" borderRadius="50%" p={0.5} mr={0.5} />
            </div>

            <CardMedia
                component="img"
                image={image}
                alt=""
            />
        </div>
    );
}

export default Frame;