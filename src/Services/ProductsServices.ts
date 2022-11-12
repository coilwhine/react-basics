import { ProductModel } from "../Models/ProductModel";

class ProductsServices {
  async getAllProducts(): Promise<ProductModel[]> {
    const response = await fetch("http://localhost:3030/api/products/");
    return response.json();
  }
}

const productsServices = new ProductsServices();
export default productsServices;
