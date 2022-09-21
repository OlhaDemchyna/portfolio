import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

import Frame from '../Frame/Frame'

import useStyles from './Project.style';

function Project({ image, title, children, href, github }) {
    const classes = useStyles();

    return (
        <Card className={classes.project} elevation={0}>
            <Grid spacing={3} container>
                <Grid xs={12} sm={6} item>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {children}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="outlined"
                            size="small"
                            href={href}
                            target="_blank"
                            startIcon={<OpenInNewIcon />}
                        >
                            Project link
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            href={github}
                            target="_blank"
                            startIcon={<GitHubIcon />}
                        >
                            Source code
                        </Button>
                    </CardActions>
                </Grid>

                <Grid xs={12} sm={6} item>
                    <Frame image={image} />
                </Grid>
            </Grid>
      </Card>
    );
}

export default Project;