import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap'
import Image from 'next/image'

// importing images
import slider1 from '../../../../assets/images/vol-slide-small.webp';
import slider2 from '../../../../assets/images/shabolombi-slide.webp';


const Hero = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                   
                    <Image
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4 className='minimal-heading' >DONATE HERE</h4>
                        <h2 className='main-heading' >Help poor people life <br />and Their <span className='style-font'>Formation</span></h2>
                        <button className='donatebtn'>Donate Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4 className='minimal-heading' >DONATE HERE</h4>
                        <h2 className='main-heading' >Help poor people life <br />and Their <span className='style-font'>Formation</span></h2>
                        <button className='donatebtn'>Donate Now</button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={slider1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4 className='minimal-heading' >DONATE HERE</h4>
                        <h2 className='main-heading'>Help poor people life <br />and Their <span className='style-font'>Formation</span></h2>
                        <button className='donatebtn'>Donate Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;