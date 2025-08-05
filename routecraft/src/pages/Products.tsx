/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface ProductsProps {}
const Products: React.FC<ProductsProps> = ({}) => {
  return (
    <>
      <h1>Thr products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
};

export default Products;
