import React from 'react';
import Image from 'next/image';
import event1 from '../../../assets/images/cause-3.jpg';
import Grid from '@mui/material/Grid';

const Upcoming = () => {
    return (
        <div style={{ margin: '80px auto' }} className='container'>
            <h2 className='headings mb-5 text-center'>Our Awesome <span style={{ color: '#fcc005' }} className='style-font'>Events</span></h2>
            <div className='mt-4'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='eventCard'>
                            <Image src={event1} alt='Event Image' className='rounded-top' />
                            <div style={{padding:'15px 20px'}}>
                                <h5>Donation For Children</h5>
                                <p className='global_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt soluta possimus ex, officiis et.</p>
                                <b>Time & Place: 5:00 pm - 6:00 pm at <br /> Uttara Dhaka</b> 
                                {/* <b>Place: Uttara, Dhaka 1230</b> */}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='eventCard'>
                            <Image src={event1} alt='Event Image' className='rounded-top' />
                            <div style={{padding:'15px 20px'}}>
                                <h5>Donation For Children</h5>
                                <p className='global_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt soluta possimus ex, officiis et.</p>
                                <b>Time & Place: 5:00 pm - 6:00 pm at <br /> Uttara Dhaka</b> 
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='eventCard'>
                            <Image src={event1} alt='Event Image' className='rounded-top' />
                            <div style={{padding:'15px 20px'}}>
                                <h5>Donation For Children</h5>
                                <p className='global_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt soluta possimus ex, officiis et.</p>
                                <b>Time & Place: 5:00 pm - 6:00 pm at <br /> Uttara Dhaka</b> 
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='eventCard'>
                            <Image src={event1} alt='Event Image' className='rounded-top' />
                            <div style={{padding:'15px 20px'}}>
                                <h5>Donation For Children</h5>
                                <p className='global_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt soluta possimus ex, officiis et.</p>
                                <b>Time & Place: 5:00 pm - 6:00 pm at <br /> Uttara Dhaka</b> 
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='eventCard'>
                            <Image src={event1} alt='Event Image' className='rounded-top' />
                            <div style={{padding:'15px 20px'}}>
                                <h5>Donation For Children</h5>
                                <p className='global_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt soluta possimus ex, officiis et.</p>
                                <b>Time & Place: 5:00 pm - 6:00 pm at <br /> Uttara Dhaka</b> 
             
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='eventCard'>
                            <Image src={event1} alt='Event Image' className='rounded-top' />
                            <div style={{padding:'15px 20px'}}>
                                <h5>Donation For Children</h5>
                                <p className='global_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt soluta possimus ex, officiis et.</p>
                                <b>Time & Place: 5:00 pm - 6:00 pm at <br /> Uttara Dhaka</b> 
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <h2 className='mt-5 text-center'>Join Us At Our <span style={{color:"#fcc005"}} className='style-font'>Events</span></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit facere, consequuntur sint modi unde amet quas recusandae hic inventore totam et alias soluta expedita vel deleniti cum provident nam. Veritatis quos, eius magnam, fuga, aliquid eum voluptas sit recusandae atque quasi adipisci velit nihil temporibus alias porro fugit quas repudiandae rerum nobis. Commodi veritatis dolor, corrupti rem voluptatum totam ut est consectetur rerum nihil modi? Natus modi quas sit corrupti.</p>
            </div>
        </div>
    );
};

export default Upcoming;