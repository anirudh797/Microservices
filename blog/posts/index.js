const express = require('express');
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto');
const app = express();

app.use(bodyParser.json())

const posts= {};

//get request
app.get('/posts', (req,res) => {
res.send(posts);

});

//post request
app.post('/posts', (req, res)=>{

    //to generate random ids for our post
    const id = randomBytes(4).toString('hex');
    //this is sent in by user
    const { title } = req.body;


    posts[id] = {
        id,title
    };

    res.status(201).send(posts[id]);

});


app.listen(4000,()=>{
    console.log("Listening on 4000");
})