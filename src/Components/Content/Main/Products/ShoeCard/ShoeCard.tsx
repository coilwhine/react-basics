import { ProductModel } from "../../../../../Models/ProductModel";
import "./ShoeCard.scss";

function ShoeCard({ product }: { product: ProductModel }): JSX.Element {

    const imgSrc = 'http://localhost:3030/api/products/images/'

    return (
        <div className="ShoeCard">
            <h3>{product.name}</h3>
            <div className="all-wraper">
                <div>
                    <div className="data">
                        <label>Price:</label>
                        <span>${product.price}</span>
                    </div>

                    <div className="data">
                        <label>Stock:</label>
                        <span>{product.stock}</span>
                    </div>
                </div>

                <img src={imgSrc + product.imageName} alt={product.name + 'image'} />
            </div>
        </div>
    );
}

export default ShoeCard;
