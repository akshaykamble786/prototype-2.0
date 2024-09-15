// import React, { useEffect, useState } from "react";
// import useProductsContext from "../hooks/useProductsContext";

// const Cart = () => {
//   const { cartItems, products, currency } = useProductsContext();
//   const [cartProducts, setCartProducts] = useState([]);

//   useEffect(() => {
//     const itemsInCart = [];

//     // Loop through cartItems to get product info
//     for (const productId in cartItems) {
//       const product = products.find((prod) => prod.id === productId);

//       if (product) {
//         const cartItem = cartItems[productId];

//         if (typeof cartItem === "object") {
//           // Case 1 & 2: Product has colors (and potentially variants)
//           for (const color in cartItem) {
//             const hasColor = color !== "null";

//             if (typeof cartItem[color] === "object") {
//               // Case 1: Product has both colors and variants
//               for (const variant in cartItem[color]) {
//                 const hasVariant = variant !== "null";
//                 const quantity = cartItem[color][variant];

//                 itemsInCart.push({
//                   product,
//                   color: hasColor ? color : null,
//                   variant: hasVariant ? variant : null,
//                   quantity,
//                 });
//               }
//             } else {
//               // Case 2: Product has colors but no variants
//               itemsInCart.push({
//                 product,
//                 color: hasColor ? color : null,
//                 variant: null,
//                 quantity: cartItem[color],
//               });
//             }
//           }
//         } else {
//           // Case 3 & 4: Product has variants but no colors or has neither
//           itemsInCart.push({
//             product,
//             color: null,
//             variant: null,
//             quantity: cartItem,
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
//               className="p-4 border rounded-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
//             >
//               {/* Display the product image */}
//               <img
//                 src={
//                   color && product.colors && product.colors[color]
//                     ? product.colors[color].images[0]
//                     : product.images
//                     ? product.images[0]
//                     : Object.values(product.colors || {})[0]?.images[0]
//                 }
//                 alt={product.title}
//                 className="h-32 w-48 md:w-20 md:h-20 object-cover mr-4 rounded-lg"
//               />

//               <div className="flex-1 text-center md:text-left">
//                 <h2 className="text-lg md:text-xl font-semibold">{product.title}</h2>

//                 {/* Display color if it exists */}
//                 {color && <p className="text-sm md:text-base text-gray-600">Color: {color}</p>}

//                 {/* Display variant if it exists */}
//                 {variant && <p className="text-sm md:text-base text-gray-600">Variant: {variant}</p>}
//               </div>

//               <div className="flex flex-col items-end space-y-2">
//                 <span className="text-lg font-semibold">
//                   {currency}
//                   {(() => {
//                     if (color && product.colors && product.colors[color]) {
//                       const colorData = product.colors[color];

//                       if (
//                         variant &&
//                         colorData.price &&
//                         typeof colorData.price === "object" &&
//                         colorData.price[variant]
//                       ) {
//                         return colorData.price[variant];
//                       } else if (
//                         colorData.price &&
//                         typeof colorData.price !== "object"
//                       ) {
//                         return colorData.price;
//                       }
//                     }

//                     if (variant && product.price && product.price[variant]) {
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

// worki g for all except c/v

import React, { useEffect, useState } from "react";
import useProductsContext from "../hooks/useProductsContext";

const Cart = () => {
  const { cartItems, products, currency } = useProductsContext();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const itemsInCart = [];

    // Loop through cartItems to get product info
    for (const productId in cartItems) {
      const product = products.find((prod) => prod.id === productId);

      if (product) {
        const cartItem = cartItems[productId];

        if (typeof cartItem === "object") {
          // Case 1 & 2: Product has colors (and potentially variants)
          for (const color in cartItem) {
            const hasColor = color !== "null";

            if (typeof cartItem[color] === "object") {
              // Case 1: Product has both colors and variants
              for (const variant in cartItem[color]) {
                const hasVariant = variant !== "null";
                const quantity = cartItem[color][variant];

                itemsInCart.push({
                  product,
                  color: hasColor ? color : null,
                  variant: hasVariant ? variant : null,
                  quantity,
                });
              }
            } else {
              // Case 2: Product has colors but no variants
              itemsInCart.push({
                product,
                color: hasColor ? color : null,
                variant: null,
                quantity: cartItem[color],
              });
            }
          }
        } else {
          // Case 3 & 4: Product has variants but no colors or has neither
          itemsInCart.push({
            product,
            color: null,
            variant: null,
            quantity: cartItem,
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
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartProducts.map(({ product, color, variant, quantity }, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg flex items-center justify-between"
            >
              {/* Display the product image based on selected color */}
              <img
                src={
                  color &&
                  product.colors &&
                  product.colors[color]?.images?.length > 0
                    ? product.colors[color].images[0]
                    : product.images?.length > 0
                    ? product.images[0]
                    : "https://via.placeholder.com/150"
                }
                alt={product.title}
                className="w-20 h-20 object-cover mr-4"
              />

              <div>
                <h2 className="text-xl font-semibold">{product.title}</h2>

                {/* Display color if it exists */}
                {color && <p className="text-gray-600">Color: {color}</p>}

                {/* Display variant if it exists */}
                {variant && <p className="text-gray-600">Variant: {variant}</p>}
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
                        typeof colorData.price === "object" &&
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
