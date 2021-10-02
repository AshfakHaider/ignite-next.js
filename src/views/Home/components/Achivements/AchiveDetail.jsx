import React from 'react';
import Image from 'next/Image'

const AchiveDetail = ({item}) => {
    
    return (
        <div className="achivement-image">
            <Image
                src={item.image}
                alt="achivement img"
            />
        </div>
    );
};

export default AchiveDetail;