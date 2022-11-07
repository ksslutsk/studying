//не обовʼязково писати в нових версіях реакт, але рекомендується лишати 
import React, { useState } from "react";
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}


export function Product({ product }: ProductProps) {

    const [details, setDetails] = useState(false);

    const btnBgClass = details ? "bg-yellow-400" : "bg-blue-400";
    const btnClasses = ["py-2 px-4 border", btnBgClass].join(' ');

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            
            <button
                className={btnClasses}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? ('Hide Details') : ('Show Details')}
            </button>

            {details &&
                <div>
                    <p>{product.description}</p>
                    <p>Rating: <span style={{fontWeight: "bold"}}>{product.rating.rate}</span></p>
                </div>}
        </div>
    );
}