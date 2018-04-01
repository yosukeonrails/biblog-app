var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({

    text:String,
    title:String

});

var Blog = module.exports = mongoose.model('Blog', BlogSchema)

