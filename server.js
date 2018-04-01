const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const app = express();
const config = require('./config');
const Blog = require('./models/blog');

var jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(bodyParser.json());
app.use(express.static('build'));


app.get('/', (req, res) =>  res.sendFile(__dirname+'/index.html'));


app.post('/blog', (req, res )=>{
        
     Blog.create( req.body , (err , data )=>{

        if(err){
            return err
        }

        res.json(data)

     })
    
})


app.get('/blog', (req, res )=>{
        
    Blog.find((err, data)=>{

        if(err){
            return err
        }

        res.json(data);

    })
})



var runServer = function (callback){

mongoose.connect(config.DATABASE_URL , function(err){
     
    if(err && callback){
        return callback(err);
     }
    app.listen(config.PORT , function(){
        console.log( 'Listening on localhost:'+ config.PORT);
        
        if(callback){
            callback();
        }

    })
  })
}


if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}
