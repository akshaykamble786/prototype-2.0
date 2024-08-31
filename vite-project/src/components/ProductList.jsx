import React, { useContext } from "react";
import ProductContext from "../../context/ProductsContext";

const ProductList = () => {
  const { products } = useContext(ProductContext); // Consume the context

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Original Price: ₹{product.originalPrice}</p>
          <p>Sale: {product.sale ? "On Sale" : "Regular Price"}</p>
          <p>
            Rating: {product.rating} ({product.reviewCount} reviews)
          </p>

          {/* Display Product Images */}
          <div className="product-images">
            <h4>Images</h4>
            {Object.values(product.cardImage).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} color option`}
                width="100"
              />
            ))}
          </div>

          {/* Display Color Options */}
          <div className="product-colors">
            <h4>Available Colors</h4>
            {Object.entries(product.colors).map(([color, details], index) => (
              <div key={index}>
                <p>Color: {color}</p>
                {details.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${product.title} ${color}`}
                    width="100"
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Display Storage or Power Options Dynamically */}
          <div className="product-options">
            {product.storage ? (
              <div>
                <h4>Storage Options</h4>
                {product.storage.map((option, index) => (
                  <p key={index}>{option}</p>
                ))}
              </div>
            ) : (
              <div>
                <h4>Power Options</h4>
                {product.power.map((option, index) => (
                  <p key={index}>{option}</p>
                ))}
              </div>
            )}
          </div>

          {/* Display Specifications */}
          <div className="product-specifications">
            <h4>Specifications</h4>
            {Object.entries(product.specifications).map(([spec, value], index) => (
              <p key={index}>
                {spec}: {value}
              </p>
            ))}
          </div>

          {/* Display Highlights */}
          <div className="product-highlights">
            <h4>Highlights</h4>
            <ul>
              {product.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Display Shipping and Returns */}
          <div className="product-shipping">
            <h4>Shipping & Returns</h4>
            <ul>
              {product.shippingAndReturns.map((policy, index) => (
                <li key={index}>{policy}</li>
              ))}
            </ul>
          </div>

          {/* Display Reviews */}
          <div className="product-reviews">
            <h4>Customer Reviews</h4>
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          </div>

          {/* Display Description */}
          <div className="product-description">
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
