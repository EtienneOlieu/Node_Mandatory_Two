import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";
import bcrypt from "bcrypt";


router.get("/users/logout", async (req, res) => {
    req.session.destroy(()=>{
        res.send({ message: "Logged out." });
    })
    
});

router.post("/users/login", async (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;

    const user = await db.get("SELECT * FROM users WHERE name = ?;" [req.body.email]);
    if (!user){
        return res.status(404).send({message: "User does not exist."});
    }

    const userpass = await bcrypt.compare(password, user.password);

    if(!userpass){
        return res.status(400).send({message: "Invalid password"});
    }

    req.session.user = user.name;
    req.session.email = user.email;

    res.send(req.session);

})

export default router;