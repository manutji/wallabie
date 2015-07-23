var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	number:Number,
	category:String,
	date:String
})

var Income = new Schema({
	number:Number
})

var Expend = new Schema({
	number:Number
})

module.exports = mongoose.model('Item',ItemSchema);