import { productModel } from "../Models/ProductModel";

class ProductsServices {
    async getAllProducts(): Promise<productModel[]> {
        const products = await fetch('http://localhost:3030/api/products/', {
            method: 'GET'
        }).then((response) => response.json())
        return products;
    }
}

const productsServices = new ProductsServices;
export default productsServices;