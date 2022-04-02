import React from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: '',
    title: '',
    price: '',
    description: '',
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
        DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}  
            title={product.id}
            price={product.id}
            description={product.id}
          />
        )
      }
      </ul>
    </section>
  );
};

export default Products;
