import { ProductModel } from "../Models/ProductModel";

class ProductsServices {
    async getAllProducts(): Promise<ProductModel[]> {
        const result = await fetch('http://localhost:3030/api/products/')
        return result.json();
    }
}

const productsServices = new ProductsServices();
export default productsServices;