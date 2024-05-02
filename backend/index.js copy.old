import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Exercise } from "./models/exModel.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";
import cors from "cors";

const app = express();

// middleware for parsing request body
app.use(express.json());

// app.use(cors(
//     {
//         origin: 'localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     }
// ))
app.use(cors())

// get resources from server
app.get("/", (req, res) => {
    // callback
    console.log(req);
    return res.status(234).send('') // http status code

});

// use express router
app.use("/exercises", exerciseRoutes);

// 

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to db');
    })
    .catch((error) => {
        console.log(error);
    });


