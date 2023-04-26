import db from "./connection.js"
import bcrypt from "bcrypt";

const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if (isDeleteMode){
    db.exec('DROP TABLE users;');
}

/* DDL */

db.exec(`
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
    );
`);

/* DML - seeding */

const mikkelPw = await bcrypt.hash("denimder", 12);
const nicolajPw = await bcrypt.hash("excelstan", 12);
const tildePw = await bcrypt.hash("gothchick83", 12);

if(isDeleteMode){
db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", ['Mikkel', 'mikkeldrengen@mail.dk', mikkelPw]);
db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", ['Nicolaj', 'niller@mail.dk', nicolajPw]);
db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", ['Tilde', 'tildepigen@mail.dk', tildePw]);
}