const Product = (props) => {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.price}</li>
      <li>{props.category}</li>
      <li>{props.image}</li>
    </ul>
  );
};

export default Product;
