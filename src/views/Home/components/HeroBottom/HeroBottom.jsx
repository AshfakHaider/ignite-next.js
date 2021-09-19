import React from 'react';
import { Container, Grid } from '@material-ui/core';


const HeroBottom = () => {

    return (
        <Container className = "heroBottom" >
            <Grid container spacing={4} >
                <Grid item xs={12} sm={6} md={4} lg={4} style={{ padding: '35px' }} >
                    <h2 className="heroBottom_number">01.</h2>
                    <h6 className="heroBottom_title">Give Donation</h6>
                    <p className="heroBottom_description">Objectively innovate empowered tured products whereas parallel platforms. the Holisticly predominate</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} style={{ padding: '35px' }}  >
                    <h2 className="heroBottom_number">02.</h2>
                    <h6 className="heroBottom_title">Give Scholarship</h6>
                    <p className="heroBottom_description">Objectively innovate empowered tured products whereas parallel platforms. the Holisticly predominate</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} style={{ padding: '35px' }}  >
                    <h2 className="heroBottom_number">03.</h2>
                    <h6 className="heroBottom_title">Adopt A Child</h6>
                    <p className="heroBottom_description">Objectively innovate empowered tured products whereas parallel platforms. the Holisticly predominate</p>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeroBottom;