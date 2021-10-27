import React from 'react';
import Image from 'next/image'

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