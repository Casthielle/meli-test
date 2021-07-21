import { useContext, useEffect } from "react";
import { Propagate } from "../../components/Spinners";
import ProductContext from "../../context/products";
import ProductList from "./components/ProductList";
import Toast from "../../components/Toast";
import useQuery from "../../hooks/useQuery";

const Results = () => {
  let query = useQuery();

  const { products, loading, error, clearErrors, getProducts } =
    useContext(ProductContext);
  const { hasError } = error;
  const search = query.get("search");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getProducts(search), [search]);

  if (loading) return <Propagate size={15} color={"#36d7b7"} />;
  if (hasError) return <Toast {...error} onClose={clearErrors} />;

  return <ProductList products={products} />;
};

export default Results;
