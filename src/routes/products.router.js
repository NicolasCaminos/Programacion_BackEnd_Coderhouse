import {
    Router
} from "express";
import ProductManager from "../../Managers/ProductManager.js";
import {
    privateDecrypt
} from "crypto";

const router = Router();
const pm = new ProductManager();

router.get("/", async (req, res) => {
    const data = await pm.getProducts();
    res.send({
        status: "ok",
        message: "lleva la info",
        data
    });
})

router.post("/", async (req, res) => {

    const products = await pm.getProducts(); 
    const product = req.body; 

    if (products.length === 0) {
        product.id = 1;
    } else {
        product.id = products[products.length - 1].id + 1;
    }

    if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock || !product.category || !product.status){
        res.send({status:"Error", message:"todos los campos son obligatorios"});
        return
    }

    product.code = parseInt(product.code);

    const validationCode = products.some(e => e.code === product.code);

    if(validationCode){        
        res.send({status:"Error", message:"Código ya ingresado"})
    }else{        
    products.push(product);
    await pm.addProduct(products)
    res.send({
        status: "ok",
        message: "pasó el prod por aca"
    });
    }
})


router.delete("/:pid", (req, res) => {
    let {pid} = req.params
    pid = parseInt(pid);   
    pm.deleteProduct(pid);
    res.send({status:"ok", message:"producto borrado correctamente"})
} )

router.post("/realtimeproducts", async (req, res) => {
    const products = await pm.getProducts(); 
    const product = req.body; 

    if (products.length === 0) {
        product.id = 1;
    } else {
        product.id = products[products.length - 1].id + 1;
    }

    if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock || !product.category || !product.status){
        res.send({status:"Error", message:"todos los campos son obligatorios"});
        return
    }

    product.code = parseInt(product.code);

    const validationCode = products.some(e => e.code === product.code);

    if(validationCode){        
        res.send({status:"Error", message:"Código ya ingresado"})
    }else{        
    products.push(product);
    await pm.addProduct(products)
    req.io.emit("products", products);
    }})


export default router