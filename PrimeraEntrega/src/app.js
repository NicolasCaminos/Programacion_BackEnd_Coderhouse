import express from 'express';

import cartsRouter from './routes/carts.router.js'
import producstRouter from './routes/products.router.js'

const PORT = 8080

const app = express();

// app.use
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/products', producstRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => { 
    console.log(`listening on PORT ${PORT}`)
})
