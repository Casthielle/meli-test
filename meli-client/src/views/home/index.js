import { useContext } from "react";
import ProductContext from "../../context/products";
import Toast from "../../components/Toast";

import "./style.css";

const Home = () => {
  const { error, clearErrors } = useContext(ProductContext);
  const { hasError } = error;
  if (hasError) return <Toast {...error} onClose={clearErrors} />;

  return <div className="home"></div>;
};

export default Home;
