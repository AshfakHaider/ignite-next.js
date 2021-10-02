/* eslint-disable @next/next/no-img-element */

import React from 'react';

const AchiveDetail = ({item}) => {
    
    return (
        <div className="achivement-image">
            <img
                src={item.image}
                alt="achivement img"
            />
        </div>
    );
};

export default AchiveDetail;