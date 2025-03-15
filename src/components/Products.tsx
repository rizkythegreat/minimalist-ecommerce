import React, { useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Minimal Chair',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    description: 'A sleek and comfortable chair that combines modern design with practical functionality. Perfect for any contemporary living space.',
    details: [
      'Solid oak frame',
      'Premium leather upholstery',
      'Ergonomic design',
      'Available in multiple colors'
    ],
    dimensions: {
      width: '60cm',
      height: '80cm',
      depth: '55cm'
    }
  },
  {
    id: 2,
    name: 'Modern Lamp',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    description: 'An elegant table lamp that provides perfect ambient lighting. Features adjustable brightness and modern design elements.',
    details: [
      'Brushed brass finish',
      'LED compatible',
      'Touch dimmer',
      'Adjustable head'
    ],
    dimensions: {
      width: '25cm',
      height: '45cm',
      depth: '25cm'
    }
  },
  {
    id: 3,
    name: 'Ceramic Vase',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800',
    description: 'Handcrafted ceramic vase with a unique organic form. Each piece is individually made and features subtle variations in texture.',
    details: [
      'Handmade ceramic',
      'Matte finish',
      'Water-resistant',
      'Unique design'
    ],
    dimensions: {
      width: '20cm',
      height: '30cm',
      depth: '20cm'
    }
  },
  {
    id: 4,
    name: 'Wall Clock',
    price: '$159',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist wall clock with silent movement. The perfect blend of form and function for your wall.',
    details: [
      'Silent quartz movement',
      'Aluminum frame',
      'Mineral glass cover',
      'Battery operated'
    ],
    dimensions: {
      width: '40cm',
      height: '40cm',
      depth: '4cm'
    }
  },
];

const Products = ({ onProductClick }) => {
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  const handleProductClick = (product) => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    onProductClick(product);
  };

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-gray-500">Discover our bestselling items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;