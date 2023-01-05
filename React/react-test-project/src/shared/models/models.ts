export interface RatingInterface {
    rate: number,
    count: number
}

export interface ProductInterface {
    id?: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: RatingInterface
}

export interface ProductsHookReturn {
    products: ProductInterface[],
    loading: boolean,
    error: string,
    addProduct: (p: ProductInterface) => void
}