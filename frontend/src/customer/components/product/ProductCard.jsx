import React from "react";
import "./Product.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="image-container h-[20rem] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={product.imageUrl}
          alt={product.title}
        />
        {/* by adding object cover  now images comig same as all sixze fix */}
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPercent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
