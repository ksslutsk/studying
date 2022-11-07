import { useState } from 'react';
import { CreateProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Modal } from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './Hooks/products';

function App() {

  const { loading, products, error } = useProducts();

  const [modal, setModal] = useState(true);


  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => <Product product={product} key={product.id} />)}


      {modal && <Modal title='Create new product'>
        <CreateProduct onCreate={() => setModal(false)}></CreateProduct>
      </Modal>}

    </div>
  );
}

export default App;
