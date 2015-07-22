var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	number:Number,
	category:String,
	date:String
})

module.exports = mongoose.model('Item',ItemSchema);