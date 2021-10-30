import React from 'react';

const Map = () => {
    return (
        <div style={{margin:'70px auto'}} className='container'>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='col-md-6'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58373.85930282704!2d90.34326844825617!3d23.8766296388549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1635605668908!5m2!1sen!2sbd" width="600" height="450" style={{border:'0px'}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className=' contact-box  ps-2 col-md-6' style={{paddingTop:'100px'}}>
                    <h4>Phone: +80000000000000</h4>
                    <h4>Address: Sector 7, Uttara, Dhaka 1230</h4>
                    <h4>Email : info@ignite.com.bd</h4>
                </div>
            </div>
        </div>
    );
};

export default Map;