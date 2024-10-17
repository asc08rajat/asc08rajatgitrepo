import { productManager } from "./productManager";
import { Product } from "./product";

const productManager1 = new productManager();

const product:Product={
    id:101,
    name:"samsung galaxy s21",
    category:"mobile",
    price:20000,
    rating:4.5,
    reviewsCount:44,
    brand:"samsung",
    availability:"available",
    color:"black",
    stroge:"128gb",
    releaseDate:"2021-01-29",
};

productManager1.addProduct(product);

let products:Product[]=productManager1.listProducts();
console.log(products);

const product1:Product={
    id: 2,
    name: 'Samsung Galaxy S20',
    category: 'Mobile',
    price: 70000,
    rating: 4.3,
    reviewsCount: 90,
    brand: 'Samsung',
    availability: 'Available',
    releaseDate: '2020-02-11'
};
//add product 2
productManager1.addProduct(product1);
products=productManager1.listProducts();
console.log(products);
//remove a product with id
productManager1.removeProduct(101);
products=productManager1.listProducts();
console.log("after removing");
console.log(products);