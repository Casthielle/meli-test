import Product from "../ProductItem";
import { Container } from "react-bootstrap";

import "./style.css";

const Home = ({ products }) => {
  const renderData = () => {
    return products?.map((item, index) => (
      <Product key={index} product={item} />
    ));
  };

  return <Container className="product-list-container">{renderData()}</Container>;
};

export default Home;
