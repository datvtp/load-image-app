import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${props.product.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.product.image}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
    </div>
  );
};

export default ProductCard;
