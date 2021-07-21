/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Propagate } from "../../components/Spinners";
import ProductContext from "../../context/products";
import ProductDetails from "./components/ProductDetails";
import Toast from "../../components/Toast";

const Details = () => {
  const {
    findProduct,
    product,
    loading,
    error,
    clearErrors,
    categories,
    setCategories,
  } = useContext(ProductContext);
  const { id } = useParams();
  const { hasError } = error;

  useEffect(() => findProduct(id), []);

  useEffect(() => {
    const data = Array.from(categories);
    data.push({ id, name: product.category });
    setCategories(data);
  }, []);

  if (loading) return <Propagate size={15} color={"#36d7b7"} />;
  if (hasError) return <Toast {...error} onClose={clearErrors} />;

  return <ProductDetails product={product} />;
};

export default Details;
