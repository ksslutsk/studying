//change filename and imports in other files
import { useState, useEffect } from "react";
import { ProductInterface } from "../shared/models/models";
import axios, { AxiosError } from "axios";
import { useProductsHookInterface } from "../shared/models/useProductsHookInterface";

export const useProducts = (): useProductsHookInterface => {

  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addProduct = (product: ProductInterface) => {
    setProducts(prev => [...prev, product]);
  }

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);

      const responce = await axios.get<ProductInterface[]>('https://fakestoreapi.com/products?limit=5');
      // console.log(responce);
      setProducts(responce.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const e = error as AxiosError;
      setError(e.message);
    }
  }
  //callback invoke when component rendered first time
  useEffect(() => {
    fetchProducts();
  }, []);

  const hooks: useProductsHookInterface = { products, loading, error, addProduct };

  return hooks;
}