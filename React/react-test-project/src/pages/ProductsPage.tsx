import { FunctionComponent, useContext, useState } from 'react';
import { CreateProduct } from '../components/CreateProduct/CreateProduct';
import { ErrorMessage } from '../shared/components/ErrorMessage/ErrorMessage';
import { Loader } from '../shared/components/Loader/Loader';
import { Modal } from '../components/Modal/Modal';
import { Product } from '../components/Product/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../Hooks/useProductsHook';
import { ProductInterface } from '../shared/models/models';

export const ProductPage: FunctionComponent = () => {

    const { loading, products, error, addProduct } = useProducts();

    const { modal, open, close } = useContext(ModalContext);

    const createHandler = (product: ProductInterface) => {
        close();
        addProduct(product);
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map((product) => <Product product={product} key={product.id} />)}


            {modal && <Modal title='Create new product' onClose={() => close()}>
                <CreateProduct onCreate={createHandler}></CreateProduct>
            </Modal>}

            <button
                className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
                onClick={() => open()}
            >+</button>
        </div>
    );
}