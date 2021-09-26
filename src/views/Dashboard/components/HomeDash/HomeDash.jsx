import { Typography } from '@mui/material';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const HomeDash = () => {
    return (
        <div className='dashboard-home'>
            <div className='mt-4'>
                <h2 className="headings text-center style-font">
                    Ignite Youth Foundtion
                </h2>
                <div className='d-flex mt-4 justify-content-center text-center'>
                    <div className='mission-box'>
                        <Typography
                            variant='h5'
                            sx={{
                                fontSize: '1.5rem',
                            }}
                        >Students</Typography>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='countt' >
                                    {isVisible ?
                                        <CountUp
                                            start={0}
                                            duration={1}
                                            end={75}

                                        /> :
                                        null}
                                </div>
                            )}
                        </VisibilitySensor>

                    </div>
                    <div className='mission-box'>
                        <Typography variant='h5' align='center' >Schools</Typography>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='countt' >
                                    {isVisible ?
                                        <CountUp
                                            start={0}
                                            duration={1}
                                            end={1}
                                         
                                        /> :
                                        null}
                                </div>
                            )}
                        </VisibilitySensor>

                    </div>
                    <div className='mission-box'>
                        <Typography variant='h5' align='center' >Projects</Typography>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='countt' >
                                    {isVisible ?
                                        <CountUp
                                            start={0}
                                            duration={1}
                                            end={6}
                                      
                                        /> :
                                        null}
                                </div>
                            )}
                        </VisibilitySensor>

                    </div>
                    <div className='mission-box'>
                        <Typography variant='h5' align='center'>Volunteers</Typography>
                        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                                <div className='countt' >
                                    {isVisible ?
                                        <CountUp
                                            start={0}
                                            duration={1}
                                            end={23}
                                        /> :
                                        null}
                                </div>
                            )}
                        </VisibilitySensor>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomeDash;