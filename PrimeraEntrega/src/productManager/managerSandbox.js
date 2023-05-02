import ProductManager, { Product } from './ProductManager.js'
import CartManager from '../cartManager/CartManager.js'

// -------------------------------------------------
// INITS CART MANAGER AND CREATES CARTS.JSON FILE
const managerCart = new CartManager()
await managerCart.initialize()

// -------------------------------------------------
// INITS MANAGER AND CREATES PRODUCTS.JSON FILE
const manager = new ProductManager()
await manager.initialize()

// ADDS PRODUCTS
const product_1 = new Product("T-Shirt Woman", 'A beautiful T-shirt', 5, "T-Shirt", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUz2udYJSW8es9xZztGlbA6tO9xjviF-tSmv9BxfET0Bf9b_nKAulzEWEBFomNJC-5u6k&usqp=CAU", 1231, 10)
await manager.addProduct(product_1);
const product_2 = new Product("Jeans", 'A beautiful Jeans', 15, "Trousers", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH83MdZlqlxbkvnL-QWVbw20MsVwDauYNHwnIJyEfcrnmtiTvJnLDT0eI3_Yz9HlI5M4A&usqp=CAU", 1232, 10)
await manager.addProduct(product_2);
const product_3 = new Product("T-Shirt Man", 'A beautiful T-shirt Man', 24, "T-Shirt", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1NA51PxaIl7JijtKRgS4dCerNIcrRlqxfrr0GmEl-VClfRRXE1x-LQGq8WvFEQh--Jg&usqp=CAU", 1233, 10)
await manager.addProduct(product_3);
const product_4 = new Product("Fit", 'A beautiful Fit', 14, "Trousers","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdyIY-GAFu9-2Bq8njs2JlNnqXH4eoEdJpQLoB_kqoWu6zaGCn3XZBZvZjw_iRBFa-Sc8&usqp=CAU", 1234, 10)
await manager.addProduct(product_4);
const product_5 = new Product("Dress Shoes Woman", 'A beautiful Dress Shoes Woman', 22, "Shoes", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiL3Q5LM-HYkD4_Gl5Hoi0RQn3yqLP1I7lH4LQhbXPoLtedadtSWpylRXTiKu79Sv_aFk&usqp=CAU", 1235, 10)
await manager.addProduct(product_5);
const product_6 = new Product("Dress Shoes Man", 'A beautiful Dress Shoes Man', 22, "Shoes", "https://i.insider.com/613fbae6261771001825ec35?width=700", 1236, 10)
await manager.addProduct(product_6);
const product_7 = new Product("Socks Woman", 'A beautiful Socks Woman"', 5, "Socks", "https://pyxis.nymag.com/v1/imgs/3db/6ca/5687b337910c415811616b09700e174c67-darnersocks.2x.rdeep-vertical.w245.jpg", 1237, 10)
await manager.addProduct(product_7);
const product_8 = new Product("Socks Man", 'A beautiful Socks Man', 5, "Socks", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmPN6bj6Nja8Fy91tSH3WDclJU9Nvq-nmLw&usqp=CAU", 1238, 10)
await manager.addProduct(product_8);
const product_9 = new Product("Dress", 'A beautiful Dress', 34, "Dress", "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300892483SAGE_2_1024x1024.jpg?v=1647033311", 1239, 10)
await manager.addProduct(product_9);
const product_10 = new Product("Dress", 'A beautiful Dress', 30, "Dress", "https://www.laura.ca/dw/image/v2/BBFF_PRD/on/demandware.static/-/Sites-laura-master/default/dw986f6a20/images/hi-res/4010103-0816-433_1.jpg?sw=350", 1230, 10)
await manager.addProduct(product_10);

console.log('----------------------------------')

await managerCart.createCart({ products: [] });
await managerCart.createCart({ products: [] });
await managerCart.createCart({ products: [] });
await managerCart.createCart({ products: [] });

console.log('SANDBOX DATA ----------------------------------')

console.log('gets all products')
console.log(await manager.getProducts())

console.log('gets by product id: 1')
console.log(await manager.getProductById(4));

console.log('gets by product memory cache')
console.log(manager.products);

console.log('----------------------------------')

export {
    manager,
    managerCart
}

export default null



