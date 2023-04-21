import express from "express"
const app = express();

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