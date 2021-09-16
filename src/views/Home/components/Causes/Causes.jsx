import { Grid } from '@material-ui/core';
import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap'
import CauseDetails from './CauseDetails';

const Causes = ({ data }) => {

    return (
        <section className="cause">
            <Container>
                <div className="text-center">
                    <h4 className="minimal-heading">OUR CAUSES</h4>
                    <h2 className='headings'>Raise your <span className='style-font'>funds</span> for a <span className='style-font'> cause</span>  that <br /> you care</h2>
                </div>
                <div >
                    <Grid container> 
                        {data.map((items) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={items.id}>
                                <CauseDetails key={items.id} item={items} />
                            </Grid>
                        ))}
                    </Grid>

                </div>

            </Container>
        </section>
    );
};

export default Causes;