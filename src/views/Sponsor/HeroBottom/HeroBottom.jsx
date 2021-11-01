import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faBook,faSuitcase,faTshirt,faEdit,faHamburger,faHeartbeat,faHeart } from '@fortawesome/free-solid-svg-icons'


const HeroBottom = () => {
    return (
        <div className='container' style={{ margin: '70px auto' }}>
            <h2 className='headings mb-3 text-center
            '>Sponsor a <span className='style-font' style={{ color: '#fcc005' }}>Child</span></h2>
            <p className='global_description mb-3 text-center'>Create difference, build a brighter future for underprivileged children. When you sponsor a child, you transform a community. Child sponsorship opens a new world. Child sponsorship empowers children, their families and communities to help break the cycle of poverty. Every child our bright future.</p>
            {/* <div className='d-flex justify-content-center flex-wrap mt-4 mb-3'>
                <div className='col-md-3 text-center'>
                    <FontAwesomeIcon icon={faDollarSign} size='5x' className='mb-3'/>
                    <h6>Tution</h6>
                </div>
                <div className='col-md-3 text-center'>
                    <FontAwesomeIcon icon={faBook} size='5x' className='mb-3' style={{color:"#fcc005"}} />
                    <h6>Books</h6>
                </div>
                <div className='col-md-3 text-center'>
                    <FontAwesomeIcon icon={faSuitcase} size='5x' className='mb-3'  />
                    <h6>School Bags</h6>
                </div>
                <div className='col-md-3 text-center'>
                    <FontAwesomeIcon icon={faTshirt} size='5x' className='mb-3' style={{color:"#fcc005"}} />
                    <h6>Uniforms</h6>
                </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap mt-2'>
                <div className='col-md-3 text-center'>
                    <FontAwesomeIcon icon={faEdit} size='5x' className='mb-3' />
                    <h6>Pen & Paper</h6>
                </div>
                <div className='col-md-3 text-center'>
                    <FontAwesomeIcon icon={faHamburger} size='5x' className='mb-3' style={{color:"#fcc005"}} />
                    <h6>Nutritive Foods</h6>
                </div>
                <div className='col-md-3 text-center'>
                    <FontAwesomeIcon icon={faHeartbeat} size='5x' className='mb-3'  />
                    <h6>Health Check Ups</h6>
                </div>
                <div className='col-md-3 text-center'>
                    <FontAwesomeIcon icon={faHeart} size='5x' className='mb-3' style={{color:"#fcc005"}} />
                    <h6>Unlimited Love</h6>
                </div>
            </div> */}
        </div>
    );
};

export default HeroBottom;