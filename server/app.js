import express from "express"
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import userRouter from "./routers/userRouter.js";
app.use(userRouter);

const PORT = process.env.PORT || 8080

app.listen(PORT, (error) =>{
    if (error){
        console.log(error)
    }
    console.log("Server is running on port:", PORT) 
})

/*
alternativ måde at oprette server på
const server = app.listen(PORT, ()=> console.log("Server is running on port:", server.address().port));
*/