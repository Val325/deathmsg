import express from 'express';
const app = express();
const port = 8000;
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db');
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000', // Set the origin to allow requests from the frontend
    credentials: true, // Included credentials as true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/msg/id/:id',(req, res) => {
    let id = req.params.id;
    //send json data
}) 

app.get('/msg/link/:link',(req, res) => {
    let link = req.params.link;

    db.get("SELECT * FROM messages WHERE link = ?",[link], function(err:any, row:any) {
        console.log(row);
        return res.json(row); 
    });
    //send json data
}) 

app.post('/msg',(req, res) => {
    console.log("body: ",req.body)
    console.log("message: ", req.body.msg);
    console.log("hash: ", req.body.hashMsg)
    //save message
    
    db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY,message TEXT,link TEXT,amountRequestMsg INTEGER)");

    db.run(`INSERT INTO messages(message,link,amountRequestMsg) VALUES(?,?,?)`, [req.body.msg,req.body.hashMsg, 1], function(err:any) {
    if (err) {
      return console.log(err.message);
    }
        
    });

    db.each("SELECT message AS id, link FROM messages", (err:any, row:any) => {
        console.log(row.id + ": " + row.message + ": " + row.link);
    });
});
}) 

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

