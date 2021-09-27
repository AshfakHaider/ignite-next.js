import React from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import CountUp from "react-countup";


const MissionDetails = ({ item }) => {

    return (
        <>
            <div className="counter-box">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                        <div className='countt' >
                            {isVisible ?
                                <CountUp
                                    start={0}
                                    duration={1}
                                    end={item.number}
                                    suffix={item.suffix ? `${item.suffix}` : ''}
                                /> :
                                null}
                        </div>
                    )}
                </VisibilitySensor>
                <div className="counter-bottom">
                    <h4>{item.title}</h4>
                    <FontAwesomeIcon icon={item.icon} className='counter-icon' />
                   
                </div>
            </div>
        </>
    );
};
export default MissionDetails;