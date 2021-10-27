import React from 'react';
import Image from 'next/image'
import aboutImg1 from '../../../../assets/images/about-img-1.jpg'
import aboutImg2 from '../../../../assets/images/about-img-2.jpg'
import { Container } from 'react-bootstrap';



const About = () => {
    return (
        <section className="about">
            <div className="about-inner">
                <Container>
                    <div className='d-flex flex-wrap ' >
                        <div className='col-md-6 pe-md-5 pe-0'>
                            <div className='img-section'>
                                <div className="figure-1">
                                    <Image src={aboutImg1} alt="image2" />
                                </div>
                                <div className="figure-2">
                                    <Image src={aboutImg2} alt="image2" />
                                </div>
                            </div>

                        </div>
                        <div className='col-md-6 ps-md-4 ps-0' >
                            <div className="about-inner-description">
                                <h4 style={{ color: '#333333' }} className='minimal-heading'>ABOUT US</h4>
                                <h2 className='headings'>Welcome to <span className='style-font'>our</span> Varana Charity <span className='style-font'>please raise <br /> your</span> helping hand </h2>
                                <div className="separator"></div>
                                <p className='global_description'
                                    style={{ color: "#888888", margin: '25px 0' }}
                                >Integer et diam libero.Praesent quis varius nisi.Nunc vitae est sodales, tincidunt augue ac, blandit ante.Aenean a ipsum pellentesque, ultrices nibh et, maximus nisl.Ut ante arcu, congue viverra efficitur eu, posuere quis lectus.Donec rhoncus tempus tellus nec lobortis.Vivamus iaculis mollis lectus ac imperdiet.</p>
                                <button className='donatebtn'>View More Info</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section >
    );
};

export default About;