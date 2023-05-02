// imports
import fs from "fs";

export default class ProductManager {
    constructor() {
        this.path = "./files/products.json";
    }

// GET:

getProducts = async () =>{
    try {
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path, "utf-8");
            const products = JSON.parse(data) 
            return products;
        }else{
            return [];
        }
    } catch (error) {
        console.log("se cayó el sistema", error)
    }
}

// POST:
addProduct = async (products) => {    

    try {
        const jsonProducts = JSON.stringify(products, null, "\t");
        await fs.promises.writeFile(this.path, jsonProducts);
    } catch (error) {
        console.log("se cayó el sistema", error);
    }

}


// PUT
// DELETE:
deleteProduct = async (id)=>{
    const products = await this.getProducts();
    const filteredProducts = products.filter(e => e.id != id);
    this.addProduct(filteredProducts);
}





}



