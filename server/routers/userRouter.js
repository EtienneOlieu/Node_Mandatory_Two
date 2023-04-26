import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";
import bcrypt from "bcrypt";

router.get("/users", async (req, res) => {
    const userList = await db.all("SELECT * FROM users");
    res.send(userList);
})

router.get("/users/logout", async (req, res) => {
    req.session.destroy(()=>{
        res.send({ message: "Logged out." });
    })
    
});

router.post("/users/login", async (req, res) => {
    //TODO remove log
    console.log("Request body", req.body);
    const {email, password} = req.body;

    const user = await db.get("SELECT * FROM users WHERE email = ?;", [email]);
    //TODO remove log
    console.log("User found in DB: ", user);

    if (!user){
        return res.status(404).send({message: "User does not exist."});
    }

    const userpass = await bcrypt.compare(password, user.password);

    if(!userpass){
        return res.status(400).send({message: "Invalid password"});
    }

    req.session.user = {
        name: user.name, email
    }
    
    //TODO remove log
    console.log("Session User is: ",req.session.user)
   
    res.status(200).send(req.session.user);

})

export default router;