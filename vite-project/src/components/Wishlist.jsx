import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/solid';

const Wishlist = ({ className = '', style = {} }) => {
    const [wishlist, setWishlist] = useState(false);

    const toggleWishlist = () => setWishlist(!wishlist);

    return (
        <HeartIcon
            className={`h-7 w-7 cursor-pointer ${className} ${wishlist ? 'text-red-500' : 'text-gray-400'}`}
            onClick={toggleWishlist}
            style={style}
        />
    );
};

export default Wishlist;
