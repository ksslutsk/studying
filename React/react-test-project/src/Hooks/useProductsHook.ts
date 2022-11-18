//change filename and imports in other files
import { useState, useEffect } from "react";
import { ProductInterface } from "../shared/models/models";
import axios, { AxiosError } from "axios";
import { ProductsHookReturnModel } from "../shared/models/ProductsHookReturnModel";

//перенести хуки до папок компонентів
//переробити типізцію
export const useProducts = (): ProductsHookReturnModel => {

  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');//errormessage

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

  return { products, loading, error, addProduct };
}