import React from 'react';

const Subscribe = () => {
    return (
        <div className='subscribe-box'>
            <div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div>
                        <h1 className='donationText'>
                            Donation Hotline : <br /> 03 2689254 - 03 2685987

                        </h1>
                    </div>
                    <div className='mt-md-0 mt-3'>
                        <input placeholder='Please Enter Your Email' type="email" name="email" id="" className='subscribe-input' />
                        <button className='subscribeBtn'>Subscribe Us</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Subscribe;