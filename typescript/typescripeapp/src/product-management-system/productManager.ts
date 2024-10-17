import { Product } from "./product";
export class productManager{

    private products:Product[]=[];
    addProduct(product:Product):void{
        this.products.push(product);
    }
    listProducts():Product[]{
        return this.products;
    }
    removeProduct(id:number):void{
        this.products=this.products.filter(product =>product.id !==id);
    }
}





