import React from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux';
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'My First Book',
    price: 100,
    description: 'The First Product list.',
  },
  {
    id: 'p2',
    title: 'My Second Book',
    price: 100,
    description: 'The Second Product list.',
  },
];

const Products = (props) => {
  const products = useSelector((state) => state.cart.itemQuantity);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
