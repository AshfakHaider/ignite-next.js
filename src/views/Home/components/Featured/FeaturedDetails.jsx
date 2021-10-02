/* eslint-disable @next/next/no-img-element */

import React from 'react';

const FeaturedDetails = ({ item }) => {
  
    return (
        <div className="featured-image">
            <img
                src={item.img}
                alt="featured img"
            />
        </div>
    );
};

export default FeaturedDetails;