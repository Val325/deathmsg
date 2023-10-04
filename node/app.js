"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // Included credentials as true
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/msg/:id', (req, res) => {
    let id = req.params.id;
    //send json data
});
app.post('/msg', (req, res) => {
    console.log("body: ", req.body);
    console.log("message: ", req.body.msg);
    console.log("hash: ", req.body.hashMsg);
    //save message
    /*
    db.serialize(() => {
    db.run("CREATE TABLE messages (id INTEGER PRIMARY KEY,message TEXT,link TEXT)");

    db.run(`INSERT INTO messages(message,link) VALUES(?,?)`, ['msg','link'], function(err:any) {
    if (err) {
      return console.log(err.message);
    }
        
    });

    db.each("SELECT message AS id, link FROM messages", (err:any, row:any) => {
        console.log(row.id + ": " + row.info);
    });
});*/
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
