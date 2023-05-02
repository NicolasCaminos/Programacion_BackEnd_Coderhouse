import express from "express";
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import productsRouter from "./routes/products.router.js";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js"
import ProductManager from "../Managers/ProductManager.js";




const app = express();
const PORT = process.env.PORT || 8080; 
const server = app.listen(PORT, ()=>{console.log(`listening on PORT ${PORT}`)});
const pm = new ProductManager();

// Server de sockets:
const io = new Server(server);



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`));


// handlebars:
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");


// midleware IO
app.use((req, res, next) => {
    req.io = io;
    next();
});

//routers
app.use("/api/products", productsRouter);
app.use("/", viewsRouter);



io.on(`connection`, async socket => {
    console.log("nuevo cliente conectado");
    socket.on(`click`, data =>{       
        socket.emit("sendProducts", products)
    });
});