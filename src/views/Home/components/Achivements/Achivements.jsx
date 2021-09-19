import React from 'react';
import { Grid, Button } from '@material-ui/core';
import AchiveDetail from './AchiveDetail';

const Achivements = ({ data }) => {
    return (
        <section className='achivements text-center m-auto'>
            <h6 className="minimal-heading">
                ACHIVEMENTS
            </h6>
            <h2 className="headings mt-3 mb-3">
                We have <span className="style-font">Achived</span> rewards <br /> from <span className='style-font'>top organizations</span>
            </h2>
            <Grid container style={{ margin: '50px 0' }}>
                {data.map((items) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={items.id}>
                        <AchiveDetail key={items.id} item={items} />
                    </Grid>

                ))}

            </Grid>

        </section>
    );
};

export default Achivements;