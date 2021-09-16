import React from 'react';
import { Grid } from '@material-ui/core';
import MissionDetails from './MissionDetails';

const Mission = ({ data }) => {
    return (
        <div className='mission mt-md-4 mt-0'>
            <div className="inner-mission container">
                <h4 className="minimal-heading text-center" >OUR MISSION</h4>
                <h2 className='headings text-center'>Milestone <span className='style-font'>achived</span> </h2>
                <Grid container>
                    {data.map((items) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={items.id}>
                            <MissionDetails key={items.id} item={items} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Mission;