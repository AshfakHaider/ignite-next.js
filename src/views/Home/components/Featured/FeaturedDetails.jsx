import Image from 'next/Image';
import React from 'react';

const FeaturedDetails = ({ item }) => {
  
    return (
        <div className="featured-image">
            <Image
                src={item.img}
                alt="featured img"
            />
        </div>
    );
};

export default FeaturedDetails;