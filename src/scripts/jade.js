var jade = require('jade');

// Compile a function
var fn = jade.compile('hello world #name', {});

// Render the function
var html = fn({name:'liu'});
console.log(html);

// 渲染字符串
var rtn = jade.render('.csser.com hello,#{name}', { name: 'liuchuanchuan' });
console.log(rtn);

// 渲染文件
var city_names = [
	'wuhan',
	'tianjin',
	'beijing',
	'shanghai'
];

var city_scores = [
	'60',
	'62',
	'80',
	'70'
];

/*jade.renderFile('./src/templates/test.jade', {
 pageTitle: 'mmtxm test jade page',
 citys: city_names,
 cscores: city_scores,
 name:'liuchuanchuan',
 h1:'who are you'
 }, function(err, html){
 // 这里的options是可选的
 // 回调函数可以作为第二个参数
 console.log(html);
 });*/

var http = require('http');
http.createServer(function (req, res) {
	
	/*jade.renderFile('./testjade.jade', { citys: city_names, cscores: city_scores, name:'liuchuanchuan', h1:'who are you' }, function(err, html){
	 res.writeHead(200, {'Content-Type': 'text/html'});
	 res.end(html);

	 });*/

	jade.renderFile('./src/templates/test.jade', {
		pageTitle: 'mmtxm test jade page',
		citys: city_names,
		cscores: city_scores,
		name:'liuchuanchuan',
		h1:'who are you'
	}, function(err, html){
		// 这里的options是可选的
		// 回调函数可以作为第二个参数

		res.writeHead(200, {'Content-Type': 'text/html'});
		//res.end(html);
		res.write(html);
		res.end();
	});

}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');