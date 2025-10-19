import React from "react";
import Product from "./Product";

const ProductsList = ({ productsList }) => {
  const renderProducts = () =>
    productsList.map(({ name, price, category, image }) => (
      <Product
        key={name}
        name={name}
        price={price}
        category={category}
        image={image}
      />
    ));
  return productsList.length ? renderProducts() : <>Empty List</>;
};

export default React.memo(ProductsList);
