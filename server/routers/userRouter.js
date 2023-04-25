import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";
import bcrypt from "bcrypt";


router.get("/users/logout", async (req, res) => {

    res.send({ users });
});

router.post("/users/login", async (req, res) => {
    const currentUser = await db.all("SELECT * FROM users WHERE name = ?;" [req.body.name]);
    

})

router.post("/users", async (req, res) => {
    if (!req.body.name){
        return res.status(400).send({message: "Missing the key (name) in the body"});
    };

    const encryptedPassword = await bcrypt.hash(req.body.password, 12);

    const { lastID } = await db.run('INSERT INTO users(name, email, password) VALUES (?, ?, ?)', [req.body.name, req.body.email, encryptedPassword]);
    res.status(201).send({ id: lastID, name: req.body.name });
})

export default router;