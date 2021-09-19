import React from 'react';
import EventDetails from './EventDetails';

const Event = ({data}) => {
    return (
       
            <div className="col-md-5 mt-md-0 mt-4">
                <h6 className='minimal-heading'>EVENTS</h6>
                <h2 className='headings'>Upcoming<span className='style-font'> Events</span></h2>
                {
                    data.map((event, index) => <EventDetails event={event} key={index}/>)
                }
            </div>
      
    );
};

export default Event;