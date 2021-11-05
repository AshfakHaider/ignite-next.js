import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import featured from '../../../assets/images/featured.jpg';
import Link from "next/link";

const FeaturedAt = () => {
    return (
        <div className='container' style={{ margin: "80px auto" }}>
            <h2 className='text-center headings'>We Are <span style={{ color: '#fcc005' }} className='style-font'>Featured</span> At</h2>
            <div className='mt-5'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='featured-at-card'>
                            <Image src={featured} alt='featured-at' className='rounded-top' />
                            <div className='featured-at-card-content' style={{ padding: '15px 20px' }}>
                                <h3>The New York Times</h3>
                                <p>The New York Times is a major American business-focused magazine that is published every weekday.</p>
                                <Link href='/'>
                                    <a href="">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='featured-at-card'>
                            <Image src={featured} alt='featured-at' className='rounded-top' />
                            <div className='featured-at-card-content' style={{ padding: '15px 20px' }}>
                                <h3>The New York Times</h3>
                                <p>The New York Times is a major American business-focused magazine that is published every weekday.</p>
                                <Link href='/'>
                                    <a href="">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='featured-at-card'>
                            <Image src={featured} alt='featured-at' className='rounded-top' />
                            <div className='featured-at-card-content' style={{ padding: '15px 20px' }}>
                                <h3>The New York Times</h3>
                                <p>The New York Times is a major American business-focused magazine that is published every weekday.</p>
                                <Link href='/'>
                                    <a href="">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='featured-at-card'>
                        <Image src={featured} alt='featured-at' className='rounded-top' />
                            <div className='featured-at-card-content' style={{ padding: '15px 20px' }}>
                                <h3>The New York Times</h3>
                                <p>The New York Times is a major American business-focused magazine that is published every weekday.</p>
                                <Link href='/'>
                                    <a href="">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='featured-at-card'>
                        <Image src={featured} alt='featured-at' className='rounded-top' />
                            <div className='featured-at-card-content' style={{ padding: '15px 20px' }}>
                                <h3>The New York Times</h3>
                                <p>The New York Times is a major American business-focused magazine that is published every weekday.</p>
                                <Link href='/'>
                                    <a href="">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className='featured-at-card'>
                        <Image src={featured} alt='featured-at' className='rounded-top' />
                            <div className='featured-at-card-content' style={{ padding: '15px 20px' }}>
                                <h3>The New York Times</h3>
                                <p>The New York Times is a major American business-focused magazine that is published every weekday.</p>
                                <Link href='/'>
                                    <a href="">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default FeaturedAt;