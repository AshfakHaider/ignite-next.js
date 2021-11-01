import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign,faBook,faSuitcase,faTshirt,faEdit,faHamburger,faHeartbeat,faHeart } from '@fortawesome/free-solid-svg-icons'
const Expenses = () => {
    return (
        <div className='container' style={{margin:'20px auto 70px auto'}}>
            <h2 className='headings mb-5 text-center'>What We Do With Your <span className='style-font'>Donation</span></h2>
             <div className='d-flex justify-content-center flex-wrap mt-4 mb-3'>
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
            </div>
            <div className='d-flex justify-content-center mt-5'><button className='sponsor-btn text-center'>Sponsor A Child</button></div>
      
        </div>
    );
};

export default Expenses;