import ProductManager from "./managers/ProductManager.js";

const productManager = new ProductManager();

const context = async () => {
    const test = await productManager.getProducts();
    console.log(test);
    let productTest = {
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25
    }

    let productTest = {
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25
    }

    await productManager.addProducts(productTest);

    const newUsers = await productManager.getProducts();
    console.log(newUsers);

    const busquedaPorId = await productManager.getProductById(1);
    console.log(busquedaPorId)

    await productManager.deleteProduct(1);
    await productManager.updateProduct(1, 'title', 'producto prueba de Test')
    console.log(await productManager.getProductById(1));
}

context();