import React, { useState } from 'react';
import { ShoppingBag, Phone, ChevronDown, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        ) : (
          <>
            <Hero />
            <Shop />
            <Products onProductClick={setSelectedProduct} />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;