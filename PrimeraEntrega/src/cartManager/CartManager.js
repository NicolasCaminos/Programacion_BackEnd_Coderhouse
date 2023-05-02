import fs from 'fs'

// Cart obj sample
// [{
//     id: 1
//     products: []
// }, 
// ....]

class CartManager {
    constructor(carts = []) {
        this.carts = carts;
        this.path = "./src/cartManager/carts.json";
        this.last_id = 1;
    }

    // Init file
    initialize = async () => {
        const cartsJson = JSON.stringify(this.carts)
        await fs.promises.writeFile(this.path, cartsJson)
    };

    createCart = async (newCart) => {
        try {
            // validates if the product is complete
            if (!newCart.products) {
                throw new Error('Incomplete cart data')
            }

            // asignes manager product id to the new product
            newCart.id = this.last_id
            // updates the last id reference
            this.last_id = this.last_id + 1
            this.carts.push(newCart)

            // saves data on json
            const dataJson = JSON.stringify(this.carts)
            const data = await fs.promises.writeFile(this.path, dataJson)

            return newCart
        } catch (error) {
            console.log(error)
        }
    }

    getProductByCartId = async (cid) => {
        try {
            const myCart = this.carts.find(c => c.id === cid);
            if (!myCart) return console.log("Error, cart id not found");
            return myCart
        } catch (err) {
            console.log(err)
        }
    }

    addProductToCart = async (cid, pid, quantity = 1) => {
        const item_index = this.carts.findIndex(c => c.id === cid)

        if (item_index < 0) {
            console.info(`no cart with the next id: ${cid}`)
            return null
        }

        const selectedCart = this.carts[item_index];
        const productIndex = selectedCart.products.findIndex(p => p.pid === pid)

        if (productIndex >= 0) {
            this.carts[item_index][productIndex].quantity += 1
        } else {
            const cartProduct = { quantity, pid }
            selectedCart.products.push(cartProduct);
        }

        // Saves the update in JSON
        const cartJson = JSON.stringify(this.carts)
        await fs.promises.writeFile(this.path, cartJson);

        return this.carts[item_index]
    }
}

export default CartManager;