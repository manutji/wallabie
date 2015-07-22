var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Item = require('./app/models/item');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017');



app.use(express.static(__dirname + '/statics'));

app.get('/',function(req,res){
	res.redirect("index.html");
});


app.post('/posttransaction',function(req,res){
	var item = new Item();
	item.number = req.body.number;
	item.category = req.body.category;
	item.date = req.body.date;

	item.save(function(err){
		if(err)
			res.send(err);
		res.json(item);

	})
	
});


app.get('/getSumTransaction',function(req,res){
	Item.aggregate( [
	   {
	     $group: {
	        _id: "$date",
	        total: { $sum: "$number" }
	     }
	   }
	] , function( err, result) {

		total = result[0].total;
		res.json(total);
	})
 
});



app.get('/transaction',function(req,res){
	Item.find(function(err,items){
		if(err)
			res.send(err);
		res.json(items);
	});

	// data =
	// 	list : [4,5]
	// res.render '/list', data
});

app.delete('/list/:item_id',function(req,res){
	Item.remove({_id:req.params.item_id},function(err,item){
		if(err)
			res.send(err)
		res.json({message:"Success"});
	});
});

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('run',host,port);
})

