/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { Link } from "react-router-dom";

interface ProductsProps {}

const DUMMY_PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const Products: React.FC<ProductsProps> = ({}) => {
  return (
    <>
      <h1>Thr products</h1>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul> 
    </>
  );
};

export default Products;
