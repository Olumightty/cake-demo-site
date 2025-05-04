
import Image from 'next/image';
import React from 'react';

interface ProductProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}
const ProductCard = ({ product }: { product: ProductProps }) => {

  return (
    <div id='productCard' className="flex flex-col md:flex-row items-center w-full max-w-xl p-4 rounded-md transition-all hover:shadow-sm cursor-pointer">
      <div className="flex-shrink-0 mr-6">
        <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
          <Image 
            src={product.image} 
            alt={product.name}
            className="w-40 h-40 object-cover"
            width={200}
            height={200}
          />
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-medium text-gray-700 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {product.description}
        </p>
        <p className="text-(--alternate-color) font-medium">$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;