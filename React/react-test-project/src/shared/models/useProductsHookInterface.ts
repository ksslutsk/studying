import { ProductInterface } from "./models";

export interface useProductsHookInterface {
    products: ProductInterface[],
    loading: boolean,
    error: string,
    addProduct: (p: ProductInterface) => void
}