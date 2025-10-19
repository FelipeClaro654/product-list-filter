import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import getProducts from "../api/products";

const useProducts = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      setProductList(response.products);
      setCategories(response.categories);
    } catch (error) {
      setError(true);
      console.error("Error when fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { productList, categories, loading, error };
};

export default useProducts;
