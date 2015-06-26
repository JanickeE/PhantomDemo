var page = require('webpage').create();

page.open('http://google.com', function(){
	page.render('googleNOW.png');
	phantom.exit();
});