var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let passportLocalMongoose = require('passport-local-mongoose');


let User = new Schema({
    admin : {
        type: Boolean,
        default : false
    }
});

User.plugin(passportLocalMongoose);

module.exports  = mongoose.model('User',User);