var bodyParser =require('body-parser');

var mongoose = require('mongoose');

//connect to database 
mongoose.connect('mongoose://')


var data =[{item:'get books'},{item:'Get positive vibes'}];

var urlencodedParser = bodyParser.urlencoded({extended:false});



module.exports = function (app) {
	
app.get('/todo',function(req,res){
	res.render('todo', {todos:data});

});

app.post('/todo', urlencodedParser, function(req, res){
	data.push(req.body);
	res.json(data);
});

app.delete('/todo/:item',function(req,res){
	data =data.filter(function(todo){
		return todo.item.replace(/ /g,'-') !== req.params.item;
	});
	res.json(data);
});

};