import React from 'react';
import { Container, Grid,  makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(4),
    },
    number: {
        fontWeight: '800',
        lineHeight: '50px',
        fontSize: '50px',
        color: '#fcc005',
        letterSpacing: '0.5px',
    },
    title: {
        fontWeight: '700',
        lineHeight: '23.5px',
        fontSize: '24px',
        margin:"10px 0px",
        "&:hover": {
            color: '#fcc005',
            cursor: 'pointer'
        }
    },
    description: {
        color: '#888888',
        marginTop: '10px',
    },
}));


const HeroBottom = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={4} lg={4} style={{ padding: '35px' }} >
                    <h2 className={classes.number}>01.</h2>
                    <h6 className={classes.title}>Give Donation</h6>
                    <p className={classes.description}>Objectively innovate empowered tured products whereas parallel platforms. the Holisticly predominate</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} style={{ padding: '35px' }}  >
                    <h2 className={classes.number}>02.</h2>
                    <h6 className={classes.title}>Give Scholarship</h6>
                    <p className={classes.description}>Objectively innovate empowered tured products whereas parallel platforms. the Holisticly predominate</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} style={{ padding: '35px' }}  >
                    <h2 className={classes.number}>03.</h2>
                    <h6 className={classes.title}>Adopt A Child</h6>
                    <p className={classes.description}>Objectively innovate empowered tured products whereas parallel platforms. the Holisticly predominate</p>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeroBottom;