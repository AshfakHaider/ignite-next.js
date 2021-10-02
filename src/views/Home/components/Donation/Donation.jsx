import React from 'react';
import Event from '../Events/Event';
import { eventData } from '../../data/fakedata';



const Donation = ({ data }) => {


    return (
        <section className='donation'>
            <div className="inner-contents-donation">
                <div className="container-fluid m-auto">
                    <div className="d-flex flex-wrap">
                        <div className="col-md-7 col-sm-12 col-xs-12 ps-0 ps-md-4 pe-md-4 pe-0">
                            <h4 className='minimal-heading'>DONATION</h4>
                            <h2 className='headings'>Make a <span className='style-font'>donation</span> now</h2>
                            <div className="donation-form">

                            </div>
                        </div>
                    
                            <Event data ={eventData}/>
                    

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;