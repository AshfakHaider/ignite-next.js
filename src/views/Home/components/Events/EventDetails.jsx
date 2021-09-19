import React from 'react';
import Image from 'next/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const EventDetails = ({ event }) => {

    return (
        <div className='d-flex' style={{marginTop:'28px'}}>
            <div className='event-img'>
                <Image src={event.image} alt={event.title} className='rounded' />
            </div>
            <div className='event-content'>
                <h6>{event.title}</h6>
                <div className="d-flex">
                    <div className='d-flex me-md-2 me-0'>
                        <FontAwesomeIcon icon={faClock} style={{ width:'12px', color: '#FCC005', margin: '7px 10px 5px 0px' }} />
                        <p className='mt-1'>at {event.time}</p>
                    </div>
                    <div className='d-flex ms-2'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: "12px", color: '#FCC005', margin: '7px 10px 5px 0px' }} />
                        <p className='mt-1'>{event.location}</p>
                    </div>
                </div>
                <p className="text-secondary" style={{ fontSize: "16px", fontWeight: '500', marginTop: '10px', padding:'0 15px 0 0' }}>
                    {event.description}
                </p>
            
            </div>
        </div>
    );
};

export default EventDetails;