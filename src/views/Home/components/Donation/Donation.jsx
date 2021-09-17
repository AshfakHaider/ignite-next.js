import React, { useState } from 'react';
import Image from 'next/Image';
import eventImg from '../../../../assets/images/event-1.jpg';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .css-u4tvz2-MuiFormLabel-root': {
            color: '#fff',
            fontWeight: '600',
            fontSize: '20px',
            letterSpacing: '0.5px'
        }
    }
}))


const Donation = ({ data }) => {

    const classes = useStyles()
    return (
        <section className='donation'>
            <div className="inner-contents-donation">
                <div className="container-fluid m-auto">
                    <div className="d-flex flex-wrap">
                        <div className="col-md-7 col-sm-12 col-xs-12 ps-0 ps-md-4 pe-md-4 pe-0">
                            <h4 className='minimal-heading'>DONATION</h4>
                            <h2 className='headings'>Make a <span className='style-font'>donation</span> now</h2>
                            <div className="donation-form">
                                <form action="" className={classes.root}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Payment Type</FormLabel>
                                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                            <FormControlLabel value="female" control={<Radio />} label="One Time" />
                                            <FormControlLabel value="male" control={<Radio />} label="Recurring" />
                                        </RadioGroup>

                                    </FormControl>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;