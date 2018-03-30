const express = require('express');
const path = require('path');
const mongoose= require('mongoose');
const app = express();
const config = require('./config')
app.use(express.static('build'));

app.get('/', (req, res) =>  res.sendFile(__dirname+'/index.html'));


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
