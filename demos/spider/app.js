var express = require('express');
var app = express();

var request = require('request');
var cheerio = require('cheerio')
app.get('/', function(req, res) {
    request('http://www.jikexueyuan.com/', function(error, response, body) {
    	var $ = cheerio.load(body);
    	res.json({
    		classNum: $(".aside-cList li").length
    	})
        // console.log('error:', error);
        // console.log('statusCode:', response && response.statusCode); 
        // console.log('body:', body);
    });

});

app.listen(3000);