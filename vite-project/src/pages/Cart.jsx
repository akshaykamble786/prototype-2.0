// import React, { useEffect, useState } from "react";
// import useProductsContext from "../hooks/useProductsContext";

// const Cart = () => {
//   const { cartItems, products, currency } = useProductsContext();
//   const [cartProducts, setCartProducts] = useState([]);

//   useEffect(() => {
//     const itemsInCart = [];

//     for (const productId in cartItems) {
//       const product = products.find((prod) => prod.id === productId);

//       if (product) {
//         if (cartItems[productId]) {
//           for (const color in cartItems[productId]) {
//             const hasColor = color !== "null";

//             if (cartItems[productId][color]) {
//               for (const variant in cartItems[productId][color]) {
//                 const hasVariant = variant !== "null";
//                 const quantity = cartItems[productId][color][variant];

//                 itemsInCart.push({
//                   product,
//                   color: hasColor ? color : null,
//                   variant: hasVariant ? variant : null,
//                   quantity,
//                 });
//               }
//             }
//           }
//         } else {
//           itemsInCart.push({
//             product,
//             color: null,
//             variant: null,
//             quantity: cartItems[productId],
//           });
//         }
//       }
//     }

//     setCartProducts(itemsInCart);
//   }, [cartItems, products]);

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

//       {cartProducts.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="space-y-4">
//           {cartProducts.map(({ product, color, variant, quantity }, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-lg flex items-center justify-between"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold">{product.title}</h2>

//                 {color && <p className="text-gray-600">Color: {color}</p>}

//                 {variant && <p className="text-gray-600">Variant: {variant}</p>}
//               </div>

//               <div className="flex flex-col items-end">
//                 <span className="text-lg font-semibold">
//                   {currency}
//                   {(() => {
//                     if (color && product.colors && product.colors[color]) {
//                       const colorData = product.colors[color];

//                       if (variant && colorData.price && colorData.price[variant]) {
//                         return colorData.price[variant];
//                       } else if (colorData.price) {
//                         return colorData.price;
//                       }
//                     } else if (variant && product.price && product.price[variant]) {
//                       return product.price[variant];
//                     }

//                     return product.cost;
//                   })()}
//                 </span>
//                 <p className="text-gray-500">Quantity: {quantity}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import useProductsContext from "../hooks/useProductsContext";

const Cart = () => {
  const { cartItems, products, currency } = useProductsContext();
  const [cartProducts, setCartProducts] = useState([]);

  console.log(products.images);

  useEffect(() => {
    const itemsInCart = [];

    // Loop through cartItems to get product info
    for (const productId in cartItems) {
      const product = products.find((prod) => prod.id === productId);

      if (product) {
        // Case 1: Product has colors
        if (cartItems[productId]) {
          for (const color in cartItems[productId]) {
            const hasColor = color !== "null";

            if (cartItems[productId][color]) {
              for (const variant in cartItems[productId][color]) {
                const hasVariant = variant !== "null";
                const quantity = cartItems[productId][color][variant];

                // Add item to cartProducts array
                itemsInCart.push({
                  product,
                  color: hasColor ? color : null,
                  variant: hasVariant ? variant : null,
                  quantity,
                });
              }
            }
          }
        } else {
          // Case 2: Product has no colors or variants
          itemsInCart.push({
            product,
            color: null,
            variant: null,
            quantity: cartItems[productId],
          });
        }
      }
    }

    setCartProducts(itemsInCart);
  }, [cartItems, products]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartProducts.map(({ product, color, variant, quantity }, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg flex items-center justify-between"
            >
              {/* Display the product image */}
              <img
                src={
                  product.images && product.images.length > 0
                    ? product.images[0]
                    : "https://via.placeholder.com/150"
                }
                alt={product.title}
                className="w-20 h-20 object-cover mr-4"
              />

              <div>
                <h2 className="text-xl font-semibold">{product.title}</h2>

                {/* Display color if it exists */}
                {color && <p className="text-gray-600">Variant: {color}</p>}

                {/* Display variant if it exists */}
                {variant && <p className="text-gray-600">Color: {variant}</p>}
              </div>

              <div className="flex flex-col items-end">
                <span className="text-lg font-semibold">
                  {currency}
                  {(() => {
                    // Calculate product cost based on color and variant selection
                    if (color && product.colors && product.colors[color]) {
                      const colorData = product.colors[color];

                      if (
                        variant &&
                        colorData.price &&
                        colorData.price[variant]
                      ) {
                        return colorData.price[variant];
                      } else if (colorData.price) {
                        return colorData.price;
                      }
                    } else if (
                      variant &&
                      product.price &&
                      product.price[variant]
                    ) {
                      return product.price[variant];
                    }

                    return product.cost;
                  })()}
                </span>
                <p className="text-gray-500">Quantity: {quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
