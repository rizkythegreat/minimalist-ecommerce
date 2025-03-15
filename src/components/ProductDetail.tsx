import React, { useEffect } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

const ProductDetail = ({ product, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen mt-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onClose}
          className="mb-8 flex items-center text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-2xl text-gray-900">{product.price}</p>
            
            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900">Product Details</h2>
              <ul className="mt-4 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900">Dimensions</h2>
              <div className="mt-4 flex flex-col bg-gray-50">
                <div className="p-3 text-center rounded-lg">
                  <p className="text-sm text-gray-500">Width</p>
                  <p className="mt-1 font-medium">{product.dimensions.width}</p>
                </div>
                <div className="text-center p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Height</p>
                  <p className="mt-1 font-medium">{product.dimensions.height}</p>
                </div>
                <div className="text-center p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Depth</p>
                  <p className="mt-1 font-medium">{product.dimensions.depth}</p>
                </div>
              </div>
            </div>

            <button className="mt-12 w-full bg-black text-white py-4 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;