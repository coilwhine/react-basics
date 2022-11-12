import { useEffect, useState } from "react";
import { productModel } from "../../../../Models/ProductModel";
import productsServices from "../../../../Services/ProductsServices";
import "./Products.scss";
import ShoeCard from "./ShoeCard/ShoeCard";

function Products(): JSX.Element {

    const [products, setProducts] = useState<productModel[] | null>(null);
    useEffect(() => {
        productsServices.getAllProducts()
            .then((data) => {
                setProducts(data);
            })
    }, [])

    return (
        <div className="Products">
            {products?.map((product) => {
                return <ShoeCard key={product.id} product={product} />
            })}
        </div>
    );
}

export default Products;
