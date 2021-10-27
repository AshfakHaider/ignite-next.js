import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Image from 'next/image'

const CauseDetails = ({ item }) => {
   const now = 60;

    return (
        <div className="cause-block me-md-4 me-0">
            <div className='cause-card' style={{ margin: '35px 0px ' }}>
                <div className="cause-card-img">
                    <Image src={item.image} alt="" />
                </div>
                <div className="text-center cause-info">
                    <h4>{item.title}</h4>
                    <p>
                        {item.details}
                    </p>
                    <ProgressBar now={now} />
                </div>
                <div className="d-flex justify-content-center money-raising " style={{ padding: '10px 0 0 0' }}>
                    <div className='raised d-flex'>
                        <h6 className='text-secondary' style={{ fontSize: '15px' }}>Raised:</h6>
                        <h4>{item.raised}$</h4>
                    </div>
                    <div className="divider"></div>
                    <div className='goal d-flex'>
                        <h6 className='text-secondary' style={{ fontSize: '15px' }}>Goal:</h6>
                        <h4>{item.goal}$</h4>
                    </div>

                </div>
            </div>


        </div>


    );
};
export default CauseDetails;