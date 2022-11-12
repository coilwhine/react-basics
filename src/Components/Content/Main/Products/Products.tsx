import { useEffect, useState } from "react";
import { ProductModel } from "../../../../Models/ProductModel";
import productsServices from "../../../../Services/ProductsServices";
import "./Products.scss";
import ShoeCard from "./ShoeCard/ShoeCard";

function Products(): JSX.Element {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    productsServices.getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="Products">
      {products.map((product) => (
        <ShoeCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
