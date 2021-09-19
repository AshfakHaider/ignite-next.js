import { faGlobe, faHandHoldingUsd, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Help = () => {
    return (
        <section className='help'>
            <div className="d-flex flex-wrap">
                <div className="col-md-6" style={{padding:'0'}}>
                    <div className="inner-content-help">
                        <h4 className="minimal-heading mb-2">
                            WHO WE ARE
                        </h4>
                        <h2 className='headings'>We <span className='style-font'>help</span> thousand <br /> of children to get their <br /> <span className='style-font'>education</span></h2>
                        <div className="d-flex">
                            <div className="separator-help1 ms-1 me-2"></div>
                            <div className="separator-help2 me-auto"></div>
                        </div>
                        <p className='global_description'
                        >Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your.</p>
                        <div className="d-flex" style={{marginTop:'35px'}}>
                            <FontAwesomeIcon icon={faHandHoldingUsd} className='help-icon' />
                            <div style={{marginLeft:'25px',}}>
                                <h5>Make Donation</h5>
                                <p className="global_description">
                                    Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence
                                </p>
                            </div>
                        </div>
                        <div className="d-flex" style={{marginTop:'15px'}} >
                            <FontAwesomeIcon icon={faTshirt} className='help-icon' />
                            <div style={{marginLeft:'20px'}}>
                                <h5>Become a Volunteer</h5>
                                <p className="global_description">
                                    Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence
                                </p>
                            </div>
                        </div>
                        <div className="d-flex" style={{marginTop:'15px'}} >
                            <FontAwesomeIcon icon={faGlobe} className='help-icon' />
                            <div style={{marginLeft:'20px'}}>
                                <h5>Give Scholarship</h5>
                                <p className="global_description">
                                    Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence
                                </p>
                            </div>
                        </div>  

                    </div>
                </div>
                <div className="col-md-6 help-img" style={{padding:'0'}}>
                    {/* <img src="http://html.efforttech.com/html/varna-charity/images/resource/image-1.jpg" alt="" className='w-100' /> */}

                </div>
            </div>
        </section>
    );
};

export default Help;
