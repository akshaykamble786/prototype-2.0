import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductsContext from "../hooks/useProductsContext";

const Cart = () => {
  const { products, currency, cartItems } = useProductsContext();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const colors in cartItems[productId]) {
        for (const variants in cartItems[productId][colors]) {
          if (cartItems[productId][colors][variants] > 0) {
            tempData.push({
              id: productId,
              color: colors,
              variant: variants,
              quantity: cartItems[productId][colors][variants],
            });
          }
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <h2>YOUR CART</h2>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
            const productData  = products.find((product)=>product.id===item.id);
            return(
              <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  {/* <img className="w-16 sm:w-20" src={productData.images[0]} alt="" /> */}
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.title}</p>
                  </div>
                </div>
              </div>
            )

        })
        }
      </div>
    </div>
    // <div className="flex flex-col items-center">
    //   <img
    //     src="https://www.adasglobal.com/img/empty-cart.png"
    //     className="h-auto w-96"
    //     alt=""
    //     srcset=""
    //   />
    //   <Link to="/" className="p-4 text-sm bg-black text-white mb-8 font-medium">
    //     Go back to Shopping
    //   </Link>
    // </div>
  );
};

export default Cart;
