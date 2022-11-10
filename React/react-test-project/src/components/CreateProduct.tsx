import axios from "axios";
import React, { FunctionComponent, useState } from "react"
import { ProductInterface } from "../shared/models/models";
import { ErrorMessage } from "../shared/components/ErrorMessage";

const productData: ProductInterface = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
};

interface CreateProductProps {
    onCreate: (product: ProductInterface) => void
}

export const CreateProduct: FunctionComponent<CreateProductProps> = ({ onCreate }: CreateProductProps) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        setError('');

        if (value.trim().length === 0) {
            setError('Please enter valid title');
            return;
        }
        productData.title = value;

        const responce = await axios.post<ProductInterface>('https://fakestoreapi.com/products', productData);

        onCreate(responce.data);
    }

    //це не працює зовсім ніяк
    // function changeHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    //     setValue(event.target.value);
    // }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="border py-2 px-4 mb-2 w-full" placeholder="Enter product title" value={value} onChange={event => setValue(event.target.value)} />

            {error && <ErrorMessage error={error} />}

            <button type="submit" className="py-2 px-4 border bg-yellow-400">Create</button>
        </form>
    )
}