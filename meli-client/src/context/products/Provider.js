import ProductContext from ".";
import Api from "../../api";
import { useState } from "react";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasError: false });

  const getProducts = async (query) => {
    try {
      setLoading(true);
      setError({ hasError: false });
      const { items, categories } = await Api.search("items", query);
      setProducts(items);
      setCategories(categories);
    } catch (error) {
      setError({
        title: "Error!",
        message: "ha ocurrdo un error",
        hasError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const findProduct = async (id) => {
    try {
      setLoading(true);
      setError({ hasError: false });
      const { item } = await Api.find("items", id);
      setProduct(item);
    } catch (error) {
      setError({
        title: "Error!",
        message: "ha ocurrdo un error",
        hasError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const clearErrors = () => {
    setError({ hasError: false });
  };

  return (
    <ProductContext.Provider
      value={{
        getProducts,
        findProduct,
        clearErrors,
        setCategories,
        products,
        categories,
        product,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
