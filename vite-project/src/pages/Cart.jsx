import React from "react";
import {Link} from 'react-router-dom'

const Cart = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://www.adasglobal.com/img/empty-cart.png"
        className="h-auto w-96"
        alt=""
        srcset=""
      />
      <Link to="/" className="p-4 text-sm bg-black text-white mb-8 font-medium">Go back to Shopping</Link>
    </div>
  );
};

export default Cart;
