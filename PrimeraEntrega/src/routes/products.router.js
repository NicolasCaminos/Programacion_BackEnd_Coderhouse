import { Router } from 'express'
import { manager } from '../productManager/managerSandbox.js'
import { Product } from '../productManager/ProductManager.js';

const router = Router();

router.get('/', async (req, res) => {
    const data = await manager.getProducts()
    console.log(data);
    res.json(data)
})

router.get('/:pid', async (req, res) => {
    try {
        const { pid } = req.params
        const item = await manager.getProductById(Number(pid));
        res.send(item)
    } catch (e) {
        console.error(e)
        res.code(500)
        res.send('Product dont find')
    }
})

router.post('/', async (req, res) => {
    try {
        if (!req.body.title ||
            !req.body.description ||
            !req.body.code ||
            !req.body.price ||
            !req.body.status ||
            !req.body.stock ||
            !req.body.category ||
            !req.body.thumbnails) {

            console.error('Product definition incomplete');
            res.send()
            return
        }


        const title = req.body.title
        const description = req.body.description
        const code = req.body.code
        const price = req.body.price
        const status = req.body.status
        const stock = req.body.stock || 1
        const category = req.body.category
        const thumbnails = req.body.thumbnails

        const newProduct = new Product(title, description, price, category, thumbnails, code, stock, status)
        const newProductCreated = await manager.addProduct(newProduct);

        res.json(newProductCreated)
    } catch (e) {
        res.send("Error on create product, please check logs")
    }
})

router.put('/:pid', async (req, res) => {
    try {
        const pid = req.params.pid; // 'asd' || undefined

        const title = req.body.title;
        const description = req.body.description;
        const code = req.body.code;
        const price = req.body.price;
        const status = req.body.stock;
        const stock = req.body.stock;
        const category = req.body.category;
        const thumbnails = req.body.thumbnails;

        if (!pid) return res.send('Not send the pid')

        const updatedProduct = await manager.updateProduct(Number(pid), 'price', price);
        res.json(updatedProduct);
    } catch (e) {
        const pid = req.params.pid;
        console.log(`Error on update product ${pid}`)
        res.send(null)
    }
})

router.delete('/:pid', async (req, res) => {
    try {
        const { pid = null } = req.params;
        const isDeleteProduct = await manager.deleteProduct(Number(pid))
        res.send(isDeleteProduct);
    } catch (e) {
        console.log("Error", e)
    }
})


export default router;