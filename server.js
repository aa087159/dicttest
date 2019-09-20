const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'F0615gILZ123',
    database : 'phpblog'
})

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql connected...')
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search.js', (req, res) => {
    res.sendFile(_dirname + "/" + 'search.js')
})

app.post('/getword', (req, res) => {
    response = {
        word:req.body
    }
    let sql = `SELECT * FROM posts WHERE title LIKE "${response.word}"`
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(JSON.stringify(result));
    })
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));