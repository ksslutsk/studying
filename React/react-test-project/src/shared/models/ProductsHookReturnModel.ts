import { ProductInterface } from "./models";

export interface ProductsHookReturnModel {
    products: ProductInterface[],
    loading: boolean,
    error: string,
    addProduct: (p: ProductInterface) => void
}