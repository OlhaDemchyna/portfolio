import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useStyles from './Info.style';

function Info() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" sx={{ mb: 5 }} id="about">
            <Grid spacing={3} className={classes.profile} container>
                <Grid xs={12} md={6} item>
                    <Typography variant="h2" component="h1">
                        Hi 🙋🏼‍♀️, I'm Olha
                    </Typography>

                    <Typography variant="subtitle1" paragraph>
                        I'm a Junior Front-End developer 👩🏼‍💻 living in Munich. Started with pure JS and CSS, Bootstrap and now exploring Material UI with React.
                    </Typography>

                    <Typography variant="subtitle1" paragraph>
                        Profession in biology (Cytogenetic for 2+ years). I have Bachelor Degree in Immunology and Master Degree in Biotechnology 🎓
                    </Typography>

                    <Typography variant="subtitle1" paragraph>
                        My hobbies include hip-hop dancing, photography and learning something new.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Info;