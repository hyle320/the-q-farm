import { useState } from 'react';
import cucumberSvg from '../assets/images/cucumber.svg';
import tomatoSvg from '../assets/images/tomato.svg';
import '../styles/Products.css';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Fresh Cucumbers',
      image: cucumberSvg,
      price: '$3.99/lb',
      description: 'Crisp, refreshing cucumbers perfect for salads and snacking.',
      features: ['Organic', 'Greenhouse-grown', 'Pesticide-free', 'Harvested daily']
    },
    {
      id: 2,
      name: 'Vine-Ripened Tomatoes',
      image: tomatoSvg,
      price: '$4.99/lb',
      description: 'Sweet, juicy tomatoes bursting with natural flavor.',
      features: ['Non-GMO', 'Vine-ripened', 'Rich in nutrients', 'Perfect for cooking']
    }
  ];

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-card ${selectedProduct === product.id ? 'selected' : ''}`}
              onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
                {selectedProduct === product.id && (
                  <ul className="product-features">
                    {product.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                )}
                <button className="product-button">
                  {selectedProduct === product.id ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
