
import Image from 'next/image'
import { faBehance, faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import logo from '../../../../assets/images/ignite_youth_foundation_logo.png';

const Footer = () => {
    return (

        <div className='footer'>
            <div className="footer-inner">
                <div className="container">
                    <div className="d-flex flex-wrap">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <div className='footer-logo'>
                                <Image src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <h3 className="footer-header">
                                Menu
                            </h3>
                            <ul className='footer-list'>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Causes</a>
                                </li>
                                <li>
                                    <a href="#">Events</a>
                                </li>
                                <li>
                                    <a href="#">Blogs </a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <h3 className="footer-header">
                                Follow Us
                            </h3>
                            <ul className='footer-list'>
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">Google</a>
                                </li>
                                <li>
                                    <a href="#">Behance</a>
                                </li>
                                <li>
                                    <a href="#">Dribble</a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <h3 className="footer-header">
                                Contact
                            </h3>
                            <ul className='footer-list'>
                                <li>
                                    <address style={{ color: "white" }} >121 King Street, Melbourne,
                                        Australia
                                    </address>
                                </li>
                                <li className='mt-3'>
                                    <a href="#">+123 456 789 000</a>
                                </li>
                                <li>
                                    <a href="#">info@varna.com+</a>
                                </li>
                                <div className="d-flex mt-3">
                                    <FontAwesomeIcon style={{color:'white',width:'20px',marginRight:'10px'}} icon ={faFacebook}/>
                                    <FontAwesomeIcon  style={{color:'white',width:'20px',marginRight:'10px'}} icon ={faGoogle}/>
                                    <FontAwesomeIcon  style={{color:'white',width:'20px',marginRight:'10px'}} icon ={faBehance}/>
                                    <FontAwesomeIcon  style={{color:'white',width:'20px',marginRight:'10px'}} icon ={faGithub}/>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="text-center">
                    <h6>Copyright Ignite Youth Foundation &copy; 2021. All Rights Resarved</h6>
                </div>
            </div>
        </div>


    );
};

export default Footer;