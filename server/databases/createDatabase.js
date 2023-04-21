import db from "./connection.js"

const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if (isDeleteMode){
    db.exec('DROP TABLE IF EXISTS users;');
}

/* DDL */

db.exec(`
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
    );
`);

/* DML - seeding */

if(isDeleteMode){
db.exec(`INSERT INTO users (name, email) VALUES ('Mikkel T', 'mikkeldrengen@mail.dk');`);
db.exec(`INSERT INTO users (name, email) VALUES ('Nicolaj H', 'niller@mail.dk');`);
db.exec(`INSERT INTO users (name, email) VALUES ('Tilde F', 'tildepigen@mail.dk');`);
}