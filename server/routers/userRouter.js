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
    console.log(req.body);
    const {name, email, password} = req.body;

    const user = await db.get("SELECT * FROM users WHERE email = ?;", [email]);
    console.log("User is: ", user);

    if (!user){
        return res.status(404).send({message: "User does not exist."});
    }

    const userpass = await bcrypt.compare(password, user.password);

console.log(userpass);

    if(!userpass){
        return res.status(400).send({message: "Invalid password"});
    }

    req.session.user = user.name;
    req.session.email = user.email;

    res.send(req.session);

})

export default router;