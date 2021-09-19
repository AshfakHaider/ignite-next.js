import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import FeaturedDetails from './FeaturedDetails';


const Featured = ({ data }) => {
    const [visible, setVisible] = useState(8);

    const loadMore = () => {
        setVisible((prevValue) => prevValue + 4)
    }
    const decrease = () => {
        setVisible((prevValue) => prevValue - 4)
    }

    return (
        <div className='featured text-center'>
            <h6 className='minimal-heading'>FEATURED</h6>
            <h2 className='headings'>We Are <span className='style-font'>Got Featured</span> By</h2>
            <Grid container style={{ margin: '50px 0' }}>
                {data.slice(0, visible).map((items) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} key={items.id}>
                        <FeaturedDetails key={items.id} item={items} />
                    </Grid>

                ))}

            </Grid>
            {
                data.length > visible ?
                    <Button
                        variant='contained'
                        color='primary'
                        className='donatebtn'
                        onClick={loadMore}
                        style={{color:'#FFF'}}
                    >
                        See More
                    </Button>

                    :
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={decrease}
                        className='donatebtn'
                        style={{color:'#FFF'}}
                    >
                        See Less
                    </Button>

            }
        </div>
    );
};

export default Featured;